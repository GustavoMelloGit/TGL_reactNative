import { StyleSheet } from "react-native";
import theme from "../../../../utils/theme";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  gameInfo: {
    borderLeftWidth: 3,
    minHeight: 55,
    borderRadius: 3,
    width: "100%",
    paddingLeft: 10,
    paddingRight: 25,
    marginLeft: 6,
    justifyContent: "center",
  },
  text: {
    fontFamily: theme.fonts.Arimo700BoldItalic,
    color: theme.colors.primary,
  },
});
