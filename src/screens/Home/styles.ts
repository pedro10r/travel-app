import { theme } from "@styles/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 60,
    backgroundColor: theme.colors.white,
  },
  avoidingViewContainer: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 50,
  },
  title: {
    fontFamily: theme.fonts.bold,
    fontSize: 30,
  },
  content: {
    gap: 20,
  },
});
