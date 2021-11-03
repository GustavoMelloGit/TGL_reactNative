//Utils
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import api from "../../../../api/api.json";
import { transformToCurrency } from "../../../../utils";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../../../store/games";
//Styles
import { Feather } from "@expo/vector-icons";
import { styles } from "./styles";
//Components

interface ICartItem {
  numbers: number[];
  type: string;
  id: number;
}
export default function CartItem(props: ICartItem) {
  const game = api.types.find((game) => game.type === props.type);
  const dispatch = useDispatch();

  let numbers = props.numbers;
  numbers = numbers.slice().sort((a, b) => a - b);

  const price = transformToCurrency(game!.price);
  function handleRemoveItem() {
    dispatch(removeFromCart({ id: props.id, price: game!.price }));
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleRemoveItem}>
        <Feather name="trash-2" size={24} color="black" />
      </TouchableOpacity>
      <View style={{ ...styles.gameInfo, borderLeftColor: game!.color }}>
        <Text style={styles.text}>{numbers.join(", ")}</Text>
        <Text style={{ ...styles.text, color: game!.color }}>
          {props.type} <Text style={styles.text}>{price}</Text>
        </Text>
      </View>
    </View>
  );
}
