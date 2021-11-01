import { StyleSheet } from "react-native";
import theme from "../../utils/theme";

export const HomeStyles = StyleSheet.create({
  container: {
    marginTop: 15,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  subHeader: {
    marginVertical: 15,
  },
  title: {
    fontSize: 18,
    fontFamily: theme.fonts.Arimo700BoldItalic,
    textTransform: "uppercase",
    color: theme.colors.primary,
  },
  span: {
    fontFamily: theme.fonts.arimo400,
  },
  description: {
    fontFamily: theme.fonts.arimo400Italic,
    color: theme.colors.primary,
  },
  gameNumbersWrapper: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    marginBottom: 160,
  },
});
