import {
  useFonts,
  Arimo_400Regular,
  Arimo_400Regular_Italic,
  Arimo_700Bold,
  Arimo_700Bold_Italic,
} from "@expo-google-fonts/arimo";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import Routes from "./src/routes";
import store from "./src/store";
import Toast from "react-native-toast-message";
import Constant from "expo-constants";

const { statusBarHeight } = Constant;

export default function App() {
  const [loadedFonts] = useFonts({
    Arimo_400Regular,
    Arimo_400Regular_Italic,
    Arimo_700Bold,
    Arimo_700Bold_Italic,
  });

  if (!loadedFonts) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }
  return (
    <>
      <Provider store={store}>
        <NavigationContainer>
          <Routes />
        </NavigationContainer>
      </Provider>
      <Toast
        ref={(ref) => Toast.setRef(ref)}
        style={{ paddingTop: statusBarHeight }}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
