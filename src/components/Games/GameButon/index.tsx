import React from "react";
import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { GameButtonStyles } from "./styles";

interface IGameButton extends TouchableOpacityProps {
  text: string;
  color: string;
  index: number;
  selected: boolean;
}

export default function GameButton(props: IGameButton) {
  const { text, color, index, selected } = props;

  const borderColor = selected ? "transparent" : color;
  const backgroundColor = selected ? color : "transparent";
  const textColor = selected ? "#fff" : color;

  return (
    <TouchableOpacity
      style={{
        ...GameButtonStyles.button,
        borderColor: borderColor,
        backgroundColor: backgroundColor,
      }}
      {...props}
    >
      <Text style={{ ...GameButtonStyles.text, color: textColor }}>{text}</Text>
    </TouchableOpacity>
  );
}
