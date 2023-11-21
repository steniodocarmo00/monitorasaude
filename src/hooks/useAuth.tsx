import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { Alert, Linking, Platform } from "react-native";

import {
  Accuracy,
  enableNetworkProviderAsync,
  getCurrentPositionAsync,
  getForegroundPermissionsAsync,
  requestForegroundPermissionsAsync,
} from "expo-location";

import { useToast } from "native-base";
import { User } from "firebase/auth";
import { Auth } from "@/services/firebase.config";

interface IAuthProviderProps {
  children: ReactNode;
}

interface INewUserEntity {
  email: string;
  password: string;
  name: string;
  accessibilities: any;
}

interface ILocationEntity {
  latitude: number;
  longitude: number;
}

interface IAuthContextData {
  isLoggedIn: boolean;
  user: User | null;
  location: ILocationEntity;
  locationAuthorization: () => Promise<void>;
  isLoadingAuthInfo: boolean;
}

const AuthContext = createContext<IAuthContextData>({} as IAuthContextData);

export const BASE_LOCATION = {
  latitude: -1.4476,
  longitude: -48.488,
};

export const LATITUDE_DELTA = 0.02;
export const LONGITUDE_DELTA = 0.02;

export function AuthProvider({ children }: IAuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  const [location, setLocation] = useState<ILocationEntity>(BASE_LOCATION);
  const [isLoadingAuthInfo, setIsLoadingAuthInfo] = useState(true);
  const toast = useToast();

  useEffect(() => {
    loadInfos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function loadInfos() {
    try {
      await locationAuthorization();
      await loadStoredData();
    } catch (error: any) {
      toast.show({
        title: error.message,
        placement: "top",
      });
    } finally {
      setIsLoadingAuthInfo(false);
    }
  }

  async function loadStoredData() {
    try {
      Auth.onAuthStateChanged((user: User | null) => {
        setUser(user);
      });
    } catch (error: any) {
      throw new Error(error);
    }
  }

  async function locationAuthorization() {
    try {
      const { status } = await requestForegroundPermissionsAsync();
      await enableNetworkProviderAsync();

      const { canAskAgain } = await getForegroundPermissionsAsync();

      if (status !== "granted" && canAskAgain) {
        Alert.alert(
          "Permissão de localização",
          "Para melhorar a sua experiência, precisamos da sua localização",
          [
            {
              text: "Autorizar",
              onPress: async () => {
                await locationAuthorization();
              },
            },
          ]
        );
        return;
      }

      if (status !== "granted" && !canAskAgain) {
        Alert.alert(
          "Permissão de localização",
          "Por favor, habilite a permissão de localização nas configurações do seu dispositivo",
          [
            {
              text: "Abrir configurações",
              onPress: () => {
                if (Platform.OS === "ios") {
                  Linking.openURL("app-settings:");
                } else {
                  Linking.openSettings();
                }
              },
            },
          ]
        );
        return;
      }

      if (status === "granted") {
        await loadLocation();
      }
    } catch {
      throw new Error(
        "Erro ao validar as permissões de localização, feche e abra o aplicativo novamente"
      );
    }
  }

  async function loadLocation() {
    try {
      const { coords } = await getCurrentPositionAsync({
        distanceInterval: 500,
        accuracy: Accuracy.BestForNavigation,
      });

      setLocation({
        latitude: coords.latitude,
        longitude: coords.longitude,
      });
    } catch {
      throw new Error(
        "Não foi possível obter a sua localização, feche e abra o aplicativo novamente"
      );
    }
  }

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: user !== null,
        user,
        location,
        locationAuthorization,
        isLoadingAuthInfo,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}
