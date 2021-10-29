//Utils
import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";
import FormProps from "../interfaces";

//Style
import { styles } from "../../../screens/Authentication/styles";
import theme from "../../../utils/theme";
import { formStyles } from "../formStyles";

//Components
import ArrowedButton from "../../ui/ArrowedButton";
import Card from "../../ui/Card";
import { useDispatch } from "react-redux";
import { signIn } from "../../../store/auth";

export default function SignUp(props: FormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  function handleSignIn() {
    dispatch(signIn({ name, email, password }));
  }
  return (
    <>
      <Text style={formStyles.header}>Register</Text>
      <View style={formStyles.cardWrapper}>
        <Card>
          <TextInput
            style={styles.input}
            placeholder="Name"
            textContentType="name"
            autoCompleteType="name"
            onChangeText={setName}
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            textContentType="emailAddress"
            keyboardType="email-address"
            onChangeText={setEmail}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry
            textContentType="password"
            autoCompleteType="password"
            onChangeText={setPassword}
          />
          <View style={formStyles.buttonWrapper}>
            <ArrowedButton
              text="Register"
              color={theme.colors.secondary}
              onPress={handleSignIn}
            />
          </View>
        </Card>
      </View>
      <ArrowedButton
        text="Back"
        arrowToRight={false}
        onPress={() => props.setForm(0)}
      />
    </>
  );
}
