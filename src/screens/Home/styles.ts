import { StyleSheet } from "react-native";
import theme from "../../utils/theme";

export const HomeStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  subHeader: {
    marginVertical: 5,
  },
  content: {
    justifyContent: "space-between",
    flex: 1,
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
    marginBottom: 5,
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
    marginTop: 5,
  },
});
