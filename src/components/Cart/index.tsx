//Utils
import React from "react";
import { Text, ToastAndroid, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";

//Style
import { styles } from "./styles";
import theme from "../../utils/theme";

//Components
import ArrowedButton from "../ui/ArrowedButton";
import Card from "../ui/Card";
import { CartList } from "./sub_components";
import { transformToCurrency } from "../../utils";
import { clearCartGames, saveGames } from "../../store/games";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import Toast from "react-native-toast-message";

interface ICartProps {
  navigation: BottomTabNavigationProp<any, any>;
}
const Cart = ({ navigation }: ICartProps) => {
  const games = useSelector((state: RootState) => state.games);
  const totalPrice = transformToCurrency(games.totalPrice);
  const dispatch = useDispatch();

  function handleSaveGame() {
    try {
      dispatch(saveGames());
      dispatch(clearCartGames());
      navigation.navigate("Conta");
    } catch (e: any) {
      Toast.show({
        type: "info",
        text1: e.message,
      });
    }
  }
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
        <ArrowedButton
          text="Salvar"
          color={theme.colors.actions}
          onPress={handleSaveGame}
        />
      </View>
    </Card>
  );
};

export default React.memo(Cart);
