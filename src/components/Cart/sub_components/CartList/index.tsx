//Utils
import React from "react";
import { View, Text, FlatList } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "../../../../store";
import CartItem from "../CartItem";
//Styles
import { styles } from "./styles";
//Components
export default function CartList() {
  const games = useSelector((state: RootState) => state.games);
  return (
    <View style={styles.container}>
      <FlatList
        data={games.cartGames}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <CartItem numbers={item.numbers} type={item.type} id={item.id} />
        )}
        contentContainerStyle={{ paddingBottom: 30, paddingTop: 20 }}
      />
    </View>
  );
}
