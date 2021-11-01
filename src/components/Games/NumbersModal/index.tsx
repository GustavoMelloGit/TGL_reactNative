//Utils
import React from "react";
import { ScrollView, ToastAndroid, View } from "react-native";
import { useDispatch } from "react-redux";
import { addNumberSelected, addToCart } from "../../../store/games";

//Style
import { styles } from "./styles";
import theme from "../../../utils/theme";

//Components
import ArrowedButton from "../../ui/ArrowedButton";
import ModalView from "../../ui/ModalView";
import NumberButton from "../NumberButton";

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

  function handleAddToCart() {
    dispatch(addToCart({ type, min: max, price }));
    closeModal();
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
        <View style={styles.buttonWrapper}>
          <ArrowedButton
            text="Jogar"
            color={theme.colors.secondary}
            onPress={handleAddToCart}
          />
        </View>
      </View>
    </ModalView>
  );
}
