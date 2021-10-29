import React, { useState } from "react";
import {
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import LogIn from "../../components/Form/LogIn";
import ResetPassword from "../../components/Form/ResetPassword";
import SignUp from "../../components/Form/SignUp";
import { styles } from "./styles";

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
      <View>
        <ScrollView>
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
      </View>
    </KeyboardAvoidingView>
  );
}
