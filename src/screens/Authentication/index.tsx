//Utils
import React, { useState } from "react";
import {
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";

//Styles
import { styles } from "./styles";

//Components
import { Background } from "../../components";
import ResetPassword from "../../components/Form/ResetPassword";
import LogIn from "../../components/Form/LogIn";
import SignUp from "../../components/Form/SignUp";

export default function Authentication() {
  const [userForm, setUserForm] = useState(0);

  function showUserForm(index: number) {
    switch (index) {
      case 0:
        return <LogIn setForm={setUserForm} />;
      case 1:
        return <ResetPassword setForm={setUserForm} />;
      case 2:
        return <SignUp setForm={setUserForm} />;
    }
  }
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.authContainer}
    >
      <Background>
        <ScrollView contentContainerStyle={styles.authContainer}>
          <View style={styles.heroContainer}>
            <Text style={{ ...styles.text, ...styles.hero }}>
              The{"\n"}greatest{"\n"}app
            </Text>
            <View>
              <Text style={{ ...styles.text, ...styles.span }}>for</Text>
            </View>
            <Text style={{ ...styles.text, ...styles.hero }}>lottery</Text>
            <View style={styles.authenticationWrapper}>
              {showUserForm(userForm)}
            </View>
          </View>
        </ScrollView>
      </Background>
    </KeyboardAvoidingView>
  );
}
