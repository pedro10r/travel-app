import { KeyboardAvoidingView, Platform, ScrollView } from "react-native";

import { ContentSection, HeaderSection } from "./Sections";

import { styles } from "./styles";

export function Home() {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.avoidingViewContainer}
    >
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <HeaderSection />

        <ContentSection />
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
