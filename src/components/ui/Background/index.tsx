import React, { ReactNode } from "react";
import { View, Text } from "react-native";
import { BackgroundStyles } from "./styles";

interface IBackground {
  children: ReactNode;
}
export default function Background({ children }: IBackground) {
  return <View style={BackgroundStyles.container}>{children}</View>;
}
