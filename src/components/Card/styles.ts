import { theme } from "@styles/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    gap: 10,
  },
  card: {
    width: 80,
    height: 80,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.colors.gray,
    borderRadius: 25,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 25,
  },
  title: {
    fontFamily: theme.fonts.regular,
    fontSize: 14,
  },
});
