//Utils
import React from "react";
import { ScrollView, Text, View } from "react-native";
//Style
//Components
import ModalView from "../../ui/ModalView";
import NumberButton from "../NumberButton";
import { styles } from "./styles";

interface INumbersModal {
  visible: boolean;
  closeModal: () => void;
  range: number;
}
export default function NumbersModal({
  visible,
  closeModal,
  range,
}: INumbersModal) {
  function getGameNumbers() {
    let numbers = [];
    for (let i = 1; i <= range; i++) {
      numbers.push(<NumberButton key={i} index={i} />);
    }
    return numbers;
  }
  return (
    <ModalView
      visible={visible}
      title="Escolha seu jogo"
      closeModal={closeModal}
    >
      <ScrollView>
        <View style={styles.numbersWrapper}>{getGameNumbers()}</View>
      </ScrollView>
    </ModalView>
  );
}
