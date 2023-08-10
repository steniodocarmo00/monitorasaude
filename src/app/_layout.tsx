import { SplashScreen, Stack } from "expo-router";
import { NativeBaseProvider, StatusBar } from "native-base";
import {
  useFonts,
  Quicksand_400Regular,
  Quicksand_600SemiBold,
  Quicksand_700Bold,
} from "@expo-google-fonts/quicksand";
import { useEffect } from "react";
import { theme } from "@/theme/index";

//SplashScreen.preventAutoHideAsync();

export default function Layout() {
  const [fontsLoaded] = useFonts({
    Quicksand_400Regular,
    Quicksand_600SemiBold,
    Quicksand_700Bold,
  });

  /* useEffect(() => {
    if (fontsLoaded) {
      // Hide the splash screen after the fonts have loaded and the
      // UI is ready.
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);
  */
  if (!fontsLoaded) {
    return null;
  }

  return (
    <NativeBaseProvider theme={theme} isSSR={false}>
        <StatusBar
          barStyle="dark-content"
          backgroundColor="transparent"
          translucent
        />
        <Stack screenOptions={{ headerShown: false,  }} >
          <Stack.Screen
            name="index"
            options={{
              title: "SignUp",
            }}
          />
        </Stack>
    </NativeBaseProvider>
  );
}
