import { StyleSheet } from "react-native";
import theme from "../../utils/theme";

export const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  header: {
    fontSize: 20,
    fontFamily: theme.fonts.Arimo700BoldItalic,
    color: theme.colors.primary,
    textTransform: "uppercase",
  },
  emptyCart: {
    fontFamily: theme.fonts.arimo400Italic,
    color: theme.colors.primary,
    textAlign: "center",
    marginVertical: 20,
  },
  saveWrapper: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.colors.tertiary,
    height: 70,
    borderRadius: 8,
  },
  totalPrice: {
    textTransform: "uppercase",
    color: theme.colors.primary,
    fontFamily: theme.fonts.Arimo700Bold,
    fontSize: 17,
  },
});
