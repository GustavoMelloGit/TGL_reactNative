//Utils
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import api from "../../../../api/api.json";
//Styles
import { Feather } from "@expo/vector-icons";
import { styles } from "./styles";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../../../store/games";
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

  const price = game!.price.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });
  function handleRemoveItem() {
    console.log("cliquou");
    dispatch(removeFromCart({ id: props.id, price: game!.price }));
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleRemoveItem}>
        <Feather name="trash-2" size={24} color="black" />
      </TouchableOpacity>
      <View style={styles.gameInfo}>
        <Text>{numbers.join(", ")}</Text>
        <Text>
          {props.type} <Text>{price}</Text>
        </Text>
      </View>
    </View>
  );
}
