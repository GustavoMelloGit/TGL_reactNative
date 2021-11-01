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
  Divider,
  Card,
  Cart,
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
            Nova aposta de{" "}
            <Text style={{ ...HomeStyles.span, color: gameResponse.color }}>
              {gameResponse.type}
            </Text>
          </Text>
          <TouchableOpacity>
            <AntDesign name="shoppingcart" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <Divider />
        <View style={HomeStyles.subHeader}>
          <Text style={HomeStyles.subHeader_title}>Jogos disponíveis:</Text>
          <GamesList
            gameSelected={gameSelected}
            setGameSelected={setGameSelected}
          />
          <Text style={HomeStyles.description}>{gameResponse.description}</Text>
        </View>
        <ArrowedButton
          text="Faça seu jogo"
          color={theme.colors.actions}
          onPress={() => setModal((prev) => !prev)}
        />
        <NumbersModal
          visible={modal}
          closeModal={() => setModal((prev) => !prev)}
          type={gameResponse.type}
          range={gameResponse.range}
          max={gameResponse.max_number}
          price={gameResponse.price}
        />
        <View style={HomeStyles.cartWrapper}>
          <Cart />
        </View>
      </View>
    </Background>
  );
}
