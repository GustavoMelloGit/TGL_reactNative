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
import { AntDesign } from "@expo/vector-icons";

//Components
import Background from "../Background";

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
          <View style={styles.header}>
            <Text style={styles.title}>{title}</Text>
            <TouchableOpacity onPress={closeModal}>
              <AntDesign name="arrowleft" size={24} color="black" />
            </TouchableOpacity>
          </View>
          <View style={styles.overlay}>
            <Background>{children}</Background>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}
