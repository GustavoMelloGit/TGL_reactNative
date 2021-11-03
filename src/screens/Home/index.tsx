//Utils
import React, { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { IRouteProps } from "../../models/RoutesIterface";
import api from "../../api/api.json";
//Styles
import { HomeStyles } from "./styles";
import theme from "../../utils/theme";
//Components
import {
  GamesList,
  Background,
  NumbersModal,
  ArrowedButton,
  Divider,
  Cart,
} from "../../components";

export default function Home({ navigation }: IRouteProps) {
  const [gameSelected, setGameSelected] = useState(0);
  const [modal, setModal] = useState(false);
  const gameResponse = api.types[gameSelected];
  return (
    <Background hasHeader>
      <View style={HomeStyles.container}>
        <View style={HomeStyles.header}>
          <Text style={HomeStyles.title}>
            Nova aposta de{" "}
            <Text style={{ ...HomeStyles.span, color: gameResponse.color }}>
              {gameResponse.type}
            </Text>
          </Text>
        </View>
        <View style={HomeStyles.content}>
          <View style={HomeStyles.subHeader}>
            <Text style={HomeStyles.subHeader_title}>Jogos disponíveis:</Text>
            <GamesList
              gameSelected={gameSelected}
              setGameSelected={setGameSelected}
            />
            <Text style={HomeStyles.description}>
              {gameResponse.description}
            </Text>
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
            <Cart navigation={navigation} />
          </View>
        </View>
      </View>
    </Background>
  );
}
