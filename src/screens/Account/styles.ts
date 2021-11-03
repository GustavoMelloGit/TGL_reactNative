import { StyleSheet } from "react-native";
import { theme } from "../../utils";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 5,
    justifyContent: "space-evenly",
  },
  header: {},
  headerText__title: {
    fontSize: 20,
    fontFamily: theme.fonts.Arimo700BoldItalic,
    color: theme.colors.primary,
  },
  headerText__subtitle: {
    fontSize: 16,
    fontFamily: theme.fonts.arimo400Italic,
    color: theme.colors.primary,
    textAlignVertical: "center",
  },
  filters: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  separatorComponent: {
    marginVertical: 5,
  },
  listWrapper: {
    height: 400,
  },
});
