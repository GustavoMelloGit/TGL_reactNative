import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

interface INumberButton {
  index: number;
}
export default function NumberButton({ index }: INumberButton) {
  return (
    <TouchableOpacity style={styles.numberButton}>
      <Text>{index}</Text>
    </TouchableOpacity>
  );
}
