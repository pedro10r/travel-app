import { theme } from "@styles/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 30,
  },
  scrollView: {
    padding: 10,
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  column: {
    width: "48%",
    marginBottom: 15,
  },
  card: {
    height: 220,
    justifyContent: "flex-end",
    alignItems: "center",
    padding: 10,
  },
  image: {
    borderRadius: 30,
  },
  title: {
    fontFamily: theme.fonts.bold,
    color: theme.colors.white,
    fontSize: 16,
  },
  description: {
    fontFamily: theme.fonts.regular,
    color: theme.colors.white,
    fontSize: 12,
    textAlign: "center",
  },
});
