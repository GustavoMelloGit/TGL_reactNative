//Utils
import React from "react";
import { View, Text } from "react-native";
import api from "../../../api/api.json";
import { transformToCurrency, formatDate, sortNumbers } from "../../../utils";
//Styles
import { styles } from "./styles";
//Components

interface IGameItemProps {
  type: string;
  numbers: number[];
  date: number;
}
export default function GameItem(props: IGameItemProps) {
  const game = api.types.find((game) => game.type === props.type);
  const dateObj = new Date(props.date);
  const price = transformToCurrency(game!.price);
  const numbers = sortNumbers(props.numbers).join(", ");
  const date = formatDate(dateObj);

  return (
    <View style={styles.container}>
      <View style={{ ...styles.verticalLine, backgroundColor: game!.color }} />
      <View style={styles.gameInfo}>
        <Text style={styles.numbers}>{numbers}</Text>
        <Text style={styles.date}>
          {date} - ({price})
        </Text>
        <Text style={{ ...styles.name, color: game?.color }}>{props.type}</Text>
      </View>
    </View>
  );
}
