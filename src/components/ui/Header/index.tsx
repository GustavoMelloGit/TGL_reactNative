import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { AntDesign } from "@expo/vector-icons";

interface IHeader {
  title: string;
  closeModal: () => void;
}
export default function Header({ title, closeModal }: IHeader) {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity onPress={closeModal}>
        <AntDesign name="arrowleft" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
}
