import { StyleSheet } from "react-native";
import theme from "../../../utils/theme";

const size = 40;
export const styles = StyleSheet.create({
  numberButton: {
    width: size,
    height: size,
    borderRadius: size / 2,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.colors.borders,
    marginBottom: 5,
    fontFamily: theme.fonts.Arimo700Bold,
  },
});
