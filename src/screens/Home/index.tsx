import { KeyboardAvoidingView, Platform, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { ContentSection, HeaderSection } from "./Sections";

import { styles } from "./styles";

export function Home() {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.avoidingViewContainer}
    >
      <SafeAreaView style={styles.container}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.content}
        >
          <HeaderSection />

          <ContentSection />
        </ScrollView>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}
