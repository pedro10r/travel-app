import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

import {
  useFonts,
  Nunito_400Regular,
  Nunito_500Medium,
  Nunito_700Bold,
} from "@expo-google-fonts/nunito";

import { AppNavigation } from "./src/navigation";

export default function App() {
  const [fontsLoaded] = useFonts({
    Nunito_400Regular,
    Nunito_500Medium,
    Nunito_700Bold,
  });

  return (
    <SafeAreaProvider>{fontsLoaded && <AppNavigation />}</SafeAreaProvider>
  );
}
