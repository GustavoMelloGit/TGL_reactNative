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

const Cart = () => {
  const games = useSelector((state: RootState) => state.games);
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
      </View>
      <View style={styles.saveWrapper}>
        <ArrowedButton text="Salvar" color={theme.colors.actions} />
      </View>
    </Card>
  );
};

export default React.memo(Cart);
