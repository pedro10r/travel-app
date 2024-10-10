import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Routes } from "./routes";

import { Onboarding } from "@screens/Onboarding";
import { Home } from "@screens/Home";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator
      initialRouteName={Routes.ONBOARING}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name={Routes.ONBOARING} component={Onboarding} />
      <Screen name={Routes.HOME} component={Home} />
    </Navigator>
  );
}
