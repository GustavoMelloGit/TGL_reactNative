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
    borderColor: theme.colors.secondary,
  },
});
