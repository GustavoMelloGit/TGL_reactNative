//Utils
import React from "react";
import { Text, View } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
//Style
import { styles } from "./styles";
import theme from "../../utils/theme";
//Components
import ArrowedButton from "../ui/ArrowedButton";
import Card from "../ui/Card";
import { Divider } from "..";
import { CartList } from "./sub_components";
import { transformToCurrency } from "../../utils";

const Cart = () => {
  const games = useSelector((state: RootState) => state.games);
  const totalPrice = transformToCurrency(games.totalPrice);
  return (
    <Card>
      <View style={styles.container}>
        <Text style={styles.header}>Carrinho</Text>
        {games.cartGames.length > 0 ? (
          <>
            <CartList />
          </>
        ) : (
          <Text style={styles.emptyCart}>Carrinho vazio</Text>
        )}
        <Text style={styles.totalPrice}>total: {totalPrice}</Text>
      </View>
      <View style={styles.saveWrapper}>
        <ArrowedButton text="Salvar" color={theme.colors.actions} />
      </View>
    </Card>
  );
};

export default React.memo(Cart);
