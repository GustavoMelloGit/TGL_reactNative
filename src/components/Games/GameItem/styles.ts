import { StyleSheet } from "react-native";
import { theme } from "../../../utils";

export const styles = StyleSheet.create({
  container: {
    minHeight: 65,
    flexDirection: "row",
  },
  verticalLine: {
    width: 6,
    height: 65,
    borderRadius: 100,
    marginRight: 15,
  },
  gameInfo: {
    justifyContent: "space-between",
    paddingRight: 25,
  },
  numbers: {
    fontSize: 16,
    fontFamily: theme.fonts.Arimo700BoldItalic,
    color: theme.colors.primary,
  },
  date: {
    fontFamily: theme.fonts.arimo400,
    color: theme.colors.primary,
  },
  name: {
    fontFamily: theme.fonts.Arimo700Bold,
  },
});
