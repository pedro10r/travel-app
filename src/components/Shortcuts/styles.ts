import { theme } from "@styles/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  shortcuts: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: theme.colors.gray,
    height: 60,
    borderRadius: 30,
  },
  button: {
    borderRadius: 50,
  },
  buttonActive: {
    backgroundColor: theme.colors.white,
    borderRadius: 50,
  },
  buttonTextActive: {
    fontFamily: theme.fonts.bold,
    fontSize: 16,
    color: theme.colors.orange,
    margin: 10,
    textAlign: "center",
  },
  buttonText: {
    fontFamily: theme.fonts.regular,
    fontSize: 16,
    margin: 10,
    textAlign: "center",
  },
});
