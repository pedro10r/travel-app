import { ImageBackground, Text, TouchableOpacity, View } from "react-native";

import { styles } from "./styles";

import background from "@assets/onboarding.jpeg";
import { useNavigation } from "@react-navigation/native";
import { Routes } from "@navigation/routes";

type OnboardingProps = {};

export function Onboarding({}: OnboardingProps) {
  const { navigate } = useNavigation();

  function handleGoHome() {
    navigate(Routes.HOME);
  }

  return (
    <ImageBackground source={background} style={styles.container}>
      <Text style={styles.title}>Traviling made easy!</Text>
      <Text style={styles.description}>
        Experience the word's best adventure around the word with us
      </Text>

      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.8}
          onPress={handleGoHome}
        >
          <Text style={styles.textButton}>Let's go!</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}
