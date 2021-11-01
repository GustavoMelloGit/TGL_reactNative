//Utils
import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import api from "../../api/api.json";
//Styles
import { HomeStyles } from "./styles";
import { AntDesign } from "@expo/vector-icons";
//Components
import { GamesList, Background } from "../../components";
import NumberButton from "../../components/Games/NumberButton";

export default function Home() {
  const [gameSelected, setGameSelected] = useState(0);
  const gameResponse = api.types[gameSelected];

  function getGameNumbers() {
    let numbers = [];
    for (let i = 1; i <= gameResponse.range; i++) {
      numbers.push(<NumberButton key={i} index={i} />);
    }
    return numbers;
  }

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
        <ScrollView>
          <View style={HomeStyles.gameNumbersWrapper}>{getGameNumbers()}</View>
        </ScrollView>
      </View>
    </Background>
  );
}
