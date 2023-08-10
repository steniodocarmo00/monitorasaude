import { SearchBar } from "@/components/searchBar";
import { Center, Text, VStack, View } from "native-base";
import {
  useForegroundPermissions,
  watchPositionAsync,
  LocationAccuracy,
  LocationSubscription,
  LocationObjectCoords,
} from "expo-location";
import { useEffect, useState } from "react";
import { getAddressLocation } from "@/utils/getAddressLocation";
import { Loading } from "@/components/loading";
import { Map } from "@/components/map";
import { RegisterButton } from "@/components/registerButton";

export default function Home() {
  const [locationForegroundPermission, requestLocationForegroundPermission] =
    useForegroundPermissions();

  const [isLoadingLocation, setIsLoadingLocation] = useState(true);

  const [currentAddress, setCurrentAddress] = useState<string | null>(null);
  const [currentCoords, setCurrentCoords] =
    useState<LocationObjectCoords | null>(null);

  useEffect(() => {
    requestLocationForegroundPermission();
  }, []);

  useEffect(() => {
    if (!locationForegroundPermission?.granted) {
      return;
    }
    let subscription: LocationSubscription;

    watchPositionAsync(
      {
        accuracy: LocationAccuracy.High,
        timeInterval: 1000,
      },
      (location) => {
        setCurrentCoords(location.coords);

        getAddressLocation(location.coords)
          .then((address) => {
            if (address) {
              setCurrentAddress(address);
            }
          })
          .finally(() => setIsLoadingLocation(false));
      }
    ).then((response) => (subscription = response));
    return () => {
      if (subscription) {
        subscription.remove();
      }
    };
  }, [locationForegroundPermission]);

  if (!locationForegroundPermission?.granted) {
    return (
      <VStack flex={1}>
        <Center>
          <SearchBar />
          <Text
            top="280"
            textAlign="center"
            fontFamily="bold"
            fontSize="md"
            margin={2}
          >
            Por favor, permita que o aplicativo tenha acesso a localização nas
            configurações do dispositivo para utilizar o mapa.
          </Text>
        </Center>
      </VStack>
    );
  }

  if (isLoadingLocation) {
    return <Loading />;
  }
  return (
    <View>
      {currentCoords && <Map coordinates={[currentCoords]} />}
      <VStack flex={1} position="absolute">
        <Center>
          <SearchBar />
          <RegisterButton />
        </Center>
      </VStack>
    </View>
  );
}
