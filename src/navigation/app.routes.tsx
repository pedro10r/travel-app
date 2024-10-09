import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { RouteName } from "./routes";

import { Onboarding } from "@screens/Onboarding";
import { Home } from "@screens/Home";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator
      initialRouteName={RouteName.ONBOARING}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name={RouteName.ONBOARING} component={Onboarding} />
      <Screen name={RouteName.HOME} component={Home} />
    </Navigator>
  );
}
