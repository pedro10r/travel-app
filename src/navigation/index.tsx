import { NavigationContainer } from "@react-navigation/native";
import { AppRoutes } from "./app.routes";

export function AppNavigation() {
  return (
    <NavigationContainer>
      <AppRoutes />
    </NavigationContainer>
  );
}
