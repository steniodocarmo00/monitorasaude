import { StatusBar } from "native-base";
import {
  useFonts,
  Quicksand_400Regular,
  Quicksand_600SemiBold,
  Quicksand_700Bold,
} from "@expo-google-fonts/quicksand";
import { GlobalContext } from "@context/globalContext";
import RootNavigation from "@routes/index";
import { Loading } from "@/components/loading";
import * as SplashScreen from "expo-splash-screen"

export default function App() {
  const [fontsLoaded] = useFonts({
    Quicksand_400Regular,
    Quicksand_600SemiBold,
    Quicksand_700Bold,
  });

  SplashScreen.preventAutoHideAsync();
  setTimeout(SplashScreen.hideAsync, 2000)
  
  return (
    <GlobalContext>
      {fontsLoaded ? ( <RootNavigation /> ) : ( <Loading /> )}
      <StatusBar />
    </GlobalContext>
  );
}
