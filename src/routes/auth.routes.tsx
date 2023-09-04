import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";

import { SignIn } from "@screens/Auth/Login/login";
import { SignUp } from "@screens/Auth/Register/register";

const { Navigator, Screen } = createNativeStackNavigator();

export function AuthRoutes() {
  return (
    <Navigator>
      <Screen
        name="SignIn"
        component={SignIn}
        options={{ headerShown: false }}
      />

      <Screen
        name="SignUp"
        component={SignUp}
        options={{ headerShown: false }}
      />
    </Navigator>
  );
}
