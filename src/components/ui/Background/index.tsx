import React, { ReactNode } from "react";
import { View, Text } from "react-native";
import { BackgroundStyles } from "./styles";
import Constant from "expo-constants";

const { statusBarHeight } = Constant;

interface IBackground {
  children: ReactNode;
  hasHeader?: boolean;
}
export default function Background({ children, hasHeader }: IBackground) {
  const padding = hasHeader ? 0 : statusBarHeight;
  return (
    <View style={{ ...BackgroundStyles.container, paddingTop: padding }}>
      {children}
    </View>
  );
}
