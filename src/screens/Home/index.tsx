//Utils
import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import api from "../../api/api.json";
//Styles
import { HomeStyles } from "./styles";
import { AntDesign } from "@expo/vector-icons";
import theme from "../../utils/theme";
//Components
import {
  GamesList,
  Background,
  NumbersModal,
  ArrowedButton,
} from "../../components";

export default function Home() {
  const [gameSelected, setGameSelected] = useState(0);
  const [modal, setModal] = useState(false);
  const gameResponse = api.types[gameSelected];

  return (
    <Background>
      <View style={HomeStyles.container}>
        <View style={HomeStyles.header}>
          <Text style={HomeStyles.title}>
            New bet <Text style={HomeStyles.span}>for {gameResponse.type}</Text>
          </Text>
          <TouchableOpacity>
            <AntDesign name="shoppingcart" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <View style={HomeStyles.subHeader}>
          <GamesList
            gameSelected={gameSelected}
            setGameSelected={setGameSelected}
          />
          <Text style={HomeStyles.description}>{gameResponse.description}</Text>
        </View>
        <ArrowedButton
          text="Faça seu jogo"
          color={theme.colors.secondary}
          onPress={() => setModal((prev) => !prev)}
        />
        <NumbersModal
          visible={modal}
          closeModal={() => setModal((prev) => !prev)}
          range={gameResponse.range}
        />
      </View>
    </Background>
  );
}
