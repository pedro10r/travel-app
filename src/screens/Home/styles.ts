import { theme } from "@styles/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: theme.colors.white,
  },
  content: {
    paddingTop: 40,
  },
  avoidingViewContainer: {
    flex: 1,
  },
});
