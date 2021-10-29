import React from "react";
import { View, Text, TextInput } from "react-native";
import Card from "../../ui/Card";
import { styles } from "../../../screens/Authentication/styles";
import theme from "../../../utils/theme";
import { formStyles } from "../formStyles";
import FormProps from "../interfaces";
import ArrowedButton from "../../ui/ArrowedButton";

export default function ResetPassword(props: FormProps) {
  return (
    <>
      <Text style={formStyles.header}>Reset password</Text>
      <View style={formStyles.cardWrapper}>
        <Card>
          <TextInput style={styles.input} placeholder="Email" />
          <View style={formStyles.buttonWrapper}>
            <ArrowedButton text="Register" color={theme.colors.secondary} />
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
