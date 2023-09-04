import { theme } from "@/theme/index"; 
import { NativeBaseProvider } from "native-base";
import { SafeAreaProvider } from "react-native-safe-area-context"

export function GlobalContext({ children }: any) {
  return(
    <NativeBaseProvider theme={theme}>
      <SafeAreaProvider>{children}</SafeAreaProvider>
    </NativeBaseProvider>
  )
}