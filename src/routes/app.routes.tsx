import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "@screens/index";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator>
      <Screen name="Home" component={Home} options={{ headerShown: false }} />
    </Navigator>
  );
}
