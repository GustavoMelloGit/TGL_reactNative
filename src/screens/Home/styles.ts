import { StyleSheet } from "react-native";
import theme from "../../utils/theme";

export const HomeStyles = StyleSheet.create({
  container: {},
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  subHeader: {
    marginVertical: 10,
  },
  title: {
    fontSize: 18,
    fontFamily: theme.fonts.Arimo700BoldItalic,
    textTransform: "uppercase",
    color: theme.colors.primary,
  },
  subHeader_title: {
    fontSize: 18,
    fontFamily: theme.fonts.Arimo700Bold,
    color: theme.colors.primary,
    marginBottom: 15,
  },
  span: {
    fontFamily: theme.fonts.arimo400,
  },
  description: {
    height: 70,
    fontFamily: theme.fonts.arimo400Italic,
    color: theme.colors.primary,
    marginTop: 15,
  },
  cartWrapper: {
    marginVertical: 20,
  },
});
