import { StyleSheet } from "react-native";
import theme from "../../utils/theme";

export const formStyles = StyleSheet.create({
  header: {
    textAlign: "center",
    fontSize: 18,
    fontFamily: theme.fonts.Arimo700BoldItalic,
    color: "#707070",
  },
  cardWrapper: {
    marginVertical: 15,
  },
  buttonWrapper: {
    marginVertical: 8,
  },
});
