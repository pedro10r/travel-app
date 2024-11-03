import { theme } from "@styles/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: theme.colors.gray,
    borderRadius: 30,
  },
  icon: {
    marginLeft: 20,
  },
  input: {
    flex: 1,
    height: 60,
    paddingHorizontal: 20,
    fontFamily: theme.fonts.regular,
    fontSize: 18,
  },
});
