import React, { useState } from "react";
import { View, Text } from "react-native";
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
    <View style={styles.authContainer}>
      <Text style={styles.hero}>
        The {"\n"} greatest{"\n"} app{"\n"}
        <Text style={styles.span}>for{"\n"}</Text>
        lottery
      </Text>
    </View>
  );
}
