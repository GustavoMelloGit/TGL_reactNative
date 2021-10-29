import { StyleSheet } from "react-native";
import theme from "../../../utils/theme";

export const ArrowedButtonStyles = StyleSheet.create({
  button: {
    flexDirection: "row",
    alignSelf: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 26,
    fontFamily: theme.fonts.Arimo700BoldItalic,
  },
});
