import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import theme from "../../../utils/theme";
import { styles } from "./styles";

interface INumberButton extends TouchableOpacityProps {
  index: string;
}
export default function NumberButton({ index, ...rest }: INumberButton) {
  const numbers = useSelector((state: RootState) => state.games.game.numbers);
  const selected = numbers.includes(+index);
  const backgroundColor = selected
    ? theme.colors.secondary
    : theme.colors.numbers;
  return (
    <TouchableOpacity
      style={{ ...styles.numberButton, backgroundColor: backgroundColor }}
      {...rest}
    >
      <Text>{index}</Text>
    </TouchableOpacity>
  );
}
