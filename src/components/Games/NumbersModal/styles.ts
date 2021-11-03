import { StyleSheet } from "react-native";
import theme from "../../../utils/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    paddingBottom: 30,
  },
  numbersWrapper: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
  },
  buttonWrapper: {
    borderRadius: 10,
    borderWidth: 2,
    borderColor: theme.colors.actions,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    flexGrow: 1,
  },
  buttonText: {
    color: theme.colors.actions,
    fontSize: 18,
    fontFamily: theme.fonts.Arimo700BoldItalic,
  },
  actions: {
    width: "100%",
  },
  actions__inner: {
    flexDirection: "row",
    width: "100%",
    marginBottom: 6,
  },
});
