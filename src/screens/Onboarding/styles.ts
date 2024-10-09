import { theme } from "@styles/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    padding: 30,
  },
  title: {
    fontFamily: theme.fonts.bold,
    fontSize: 34,
    color: theme.colors.white,
  },
  description: {
    marginTop: 10,
    fontFamily: theme.fonts.regular,
    fontSize: 14,
    color: theme.colors.white,
  },
  footer: {
    marginTop: 25,
    alignItems: "center",
  },
  button: {
    width: "50%",
    padding: 16,
    borderRadius: 32,
    backgroundColor: "orange",
  },
  textButton: {
    textAlign: "center",
  },
});
