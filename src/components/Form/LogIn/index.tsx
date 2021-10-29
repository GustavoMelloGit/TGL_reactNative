import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import { styles } from "../../../screens/Authentication/styles";
import { logIn } from "../../../store/auth";
import theme from "../../../utils/theme";
import ArrowedButton from "../../ui/ArrowedButton";
import Card from "../../ui/Card";
import { formStyles } from "../formStyles";
import FormProps from "../interfaces";
import { LogInStyles } from "./styles";

export default function LogIn(props: FormProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  function handleLogIn() {
    try {
      dispatch(logIn({ email, password }));
    } catch (e: any) {
      console.log(e.message);
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
            placeholder="Email"
            onChangeText={setEmail}
          />
          <TextInput
            style={styles.input}
            secureTextEntry
            textContentType="password"
            autoCompleteType="password"
            placeholder="Password"
            onChangeText={setPassword}
          />
          <TouchableOpacity>
            <Text style={LogInStyles.text} onPress={() => props.setForm(1)}>
              I forgot my password
            </Text>
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
