import { StyleSheet } from "react-native";
import theme from "../../../utils/theme";

export const styles = StyleSheet.create({
  overlay: {
    flex: 1,
  },
  header: {
    width: "100%",
    height: 50,
    backgroundColor: theme.colors.secondary,
    alignItems: "center",
    textAlign: "center",
    flexDirection: "row",
    paddingLeft: 10,
  },
  title: {
    position: "absolute",
    width: "100%",
    textAlign: "center",
    fontFamily: theme.fonts.Arimo700BoldItalic,
    fontSize: 16,
  },
});
