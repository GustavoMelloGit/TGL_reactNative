//Utils
import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import { formStyles } from "../formStyles";
import FormProps from "../interfaces";
import { logIn } from "../../../store/auth";

//Styles
import theme from "../../../utils/theme";
import { styles } from "../../../screens/Authentication/styles";
import { LogInStyles } from "./styles";
import Toast from "react-native-toast-message";

//Components
import Card from "../../ui/Card";
import ArrowedButton from "../../ui/ArrowedButton";

export default function LogIn(props: FormProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  function handleLogIn() {
    try {
      dispatch(logIn({ email, password }));
    } catch (e: any) {
      Toast.show({ type: "error", text1: e.message });
    }
  }

  return (
    <>
      <Text style={formStyles.header}>Authentication</Text>
      <View style={formStyles.cardWrapper}>
        <Card>
          <TextInput
            style={styles.input}
            textContentType="emailAddress"
            keyboardType="email-address"
            autoCapitalize="none"
            placeholder="Email"
            onChangeText={setEmail}
          />
          <TextInput
            style={styles.input}
            secureTextEntry
            textContentType="password"
            autoCompleteType="password"
            autoCapitalize="none"
            placeholder="Password"
            onChangeText={setPassword}
          />
          <TouchableOpacity onPress={() => props.setForm(1)}>
            <Text style={LogInStyles.text}>I forgot my password</Text>
          </TouchableOpacity>
          <View style={formStyles.buttonWrapper}>
            <ArrowedButton
              text="Log In"
              color={theme.colors.secondary}
              onPress={handleLogIn}
            />
          </View>
        </Card>
      </View>
      <ArrowedButton
        text="Sign Up"
        onPress={() => {
          props.setForm(2);
        }}
      />
    </>
  );
}
