import React from "react";
import {
  View,
  Text,
  TouchableOpacityProps,
  TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { ArrowedButtonStyles } from "./styles";

interface IArrowedButton extends TouchableOpacityProps {
  text: string;
  arrowToRight?: boolean;
  color?: string;
}

export default function ArrowedButton(props: IArrowedButton) {
  const { text, arrowToRight = true, color = "#707070" } = props;
  return (
    <TouchableOpacity style={ArrowedButtonStyles.button} {...props}>
      {arrowToRight ? (
        <>
          <Text style={{ color: color, ...ArrowedButtonStyles.text }}>
            {text}
          </Text>
          <AntDesign name="arrowright" size={24} color={color} />
        </>
      ) : (
        <>
          <AntDesign name="arrowleft" size={24} color={color} />
          <Text style={{ color: color, ...ArrowedButtonStyles.text }}>
            {text}
          </Text>
        </>
      )}
    </TouchableOpacity>
  );
}
