import { StyleSheet } from "react-native";
import theme from "../../utils/theme";

export const styles = StyleSheet.create({
  authContainer: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
  },
  hero: {
    fontSize: 20,
    textAlign: "center",
  },
  spanWrapper: {
    justifyContent: "center",
  },
  span: {
    backgroundColor: theme.colors.secondary,
    overflow: "hidden",
    borderRadius: 100,
    width: 30,
    color: "#fff",
    fontSize: 18,
  },
});
