import { StyleSheet } from "react-native";
import theme from "../../utils/theme";

export const styles = StyleSheet.create({
  authContainer: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
  },
  heroContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontFamily: theme.fonts.Arimo700BoldItalic,
    textAlign: "center",
  },
  hero: {
    fontSize: 28,
    textTransform: "capitalize",
  },
  span: {
    backgroundColor: theme.colors.secondary,
    overflow: "hidden",
    borderRadius: 50,
    width: 60,
    color: "#fff",
    fontSize: 18,
    textTransform: "lowercase",
  },
  authenticationWrapper: {
    marginTop: 20,
  },
  input: {
    margin: 10,
    height: 50,
    width: 200,
    paddingLeft: 5,
    paddingRight: 3,
    borderBottomColor: theme.colors.borders,
    borderBottomWidth: 2,
  },
});
