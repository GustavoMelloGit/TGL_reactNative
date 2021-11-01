import { StyleSheet } from "react-native";
import Constant from "expo-constants";

const { statusBarHeight } = Constant;

export const BackgroundStyles = StyleSheet.create({
  container: {
    backgroundColor: "#F7F7F7",
    paddingTop: statusBarHeight,
    paddingHorizontal: 10,
    flex: 1,
  },
});
