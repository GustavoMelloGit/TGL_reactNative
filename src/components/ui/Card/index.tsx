import React, { ReactNode } from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";

interface ICard {
  children: ReactNode;
}
export default function Card({ children }: ICard) {
  return <View style={styles.CardContainer}>{children}</View>;
}
