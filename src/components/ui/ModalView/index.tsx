//Utils
import React, { Dispatch, ReactNode, SetStateAction } from "react";
import {
  Modal,
  ModalProps,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";

//Style
import { styles } from "./styles";

//Components
import Background from "../Background";
import Header from "../Header";

interface IModalView extends ModalProps {
  children: ReactNode;
  title: string;
  closeModal: () => void;
}

export default function ModalView(props: IModalView) {
  const { children, closeModal, title, ...rest } = props;

  return (
    <Modal transparent animationType="slide" {...rest}>
      <TouchableWithoutFeedback>
        <View style={styles.overlay}>
          <Header title={title} closeModal={closeModal} />
          <View style={styles.overlay}>
            <Background>{children}</Background>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}
