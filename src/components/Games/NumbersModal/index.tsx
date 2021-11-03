//Utils
import React from "react";
import {
  ScrollView,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View,
} from "react-native";
import { useDispatch } from "react-redux";
import {
  addNumberSelected,
  addToCart,
  cleanNumbersArray,
  completeGame,
} from "../../../store/games";

//Style
import { styles } from "./styles";
import theme from "../../../utils/theme";

//Components
import ArrowedButton from "../../ui/ArrowedButton";
import ModalView from "../../ui/ModalView";
import NumberButton from "../NumberButton";
import Toast from "react-native-toast-message";
import Constant from "expo-constants";

const { statusBarHeight } = Constant;
interface INumbersModal {
  visible: boolean;
  closeModal: () => void;
  range: number;
  max: number;
  type: string;
  price: number;
}
export default function NumbersModal(props: INumbersModal) {
  const dispatch = useDispatch();
  const { visible, closeModal, range, max, type, price } = props;

  function handleNumberClicked(index: number) {
    try {
      dispatch(addNumberSelected({ index, max: max }));
    } catch (e: any) {
      ToastAndroid.show(e.message, ToastAndroid.SHORT);
    }
  }

  function handleCompleteGame() {
    dispatch(completeGame({ max, range, type }));
  }
  function handleClearGame() {
    dispatch(cleanNumbersArray());
  }

  function handleAddToCart() {
    try {
      dispatch(addToCart({ type, min: max, price }));
      closeModal();
    } catch (e: any) {
      ToastAndroid.show(e.message, ToastAndroid.SHORT);
    }
  }
  function getGameNumbers() {
    let numbers = [];
    for (let i = 1; i <= range; i++) {
      numbers.push(
        <NumberButton
          key={i}
          index={("0" + i).slice(-2)}
          onPress={() => handleNumberClicked(i)}
        />
      );
    }
    return numbers;
  }

  return (
    <ModalView
      visible={visible}
      title="Escolha seu jogo"
      closeModal={closeModal}
    >
      <View style={styles.container}>
        <View style={styles.numbersWrapper}>{getGameNumbers()}</View>
        <View style={styles.actions}>
          <View style={styles.actions__inner}>
            <TouchableOpacity
              style={{ ...styles.buttonWrapper, marginRight: 5 }}
              onPress={handleCompleteGame}
            >
              <Text style={styles.buttonText}>Complete game</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonWrapper}
              onPress={handleClearGame}
            >
              <Text style={styles.buttonText}>Clear game</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={styles.buttonWrapper}
            onPress={handleAddToCart}
          >
            <ArrowedButton
              text="Jogar"
              color={theme.colors.actions}
              onPress={handleAddToCart}
            />
          </TouchableOpacity>
        </View>
      </View>
    </ModalView>
  );
}
