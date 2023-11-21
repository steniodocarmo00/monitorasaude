import { StatusBar } from "native-base";
import {
  useFonts,
  Quicksand_400Regular,
  Quicksand_600SemiBold,
  Quicksand_700Bold,
} from "@expo-google-fonts/quicksand";
import { GlobalContext } from "@context/GlobalContext";
import { Loading } from "@/components/loading";
import * as SplashScreen from "expo-splash-screen"
import { Routes } from "@routes/index";

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
      {fontsLoaded ? ( <Routes /> ) : ( <Loading /> )}
      <StatusBar />
    </GlobalContext>
  );
}
