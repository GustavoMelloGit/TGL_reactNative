//Utils
import React from "react";
import { View, Text } from "react-native";
import { useDispatch } from "react-redux";
import api from "../../../api/api.json";
import { cleanNumbersArray } from "../../../store/games";
import GameButton from "../GameButon";
import { GamesListStyles } from "./styles";
//Components
//Styles

interface IGamesList {
  gameSelected: number;
  setGameSelected: (index: number) => void;
}

export default function GamesList(props: IGamesList) {
  const { setGameSelected, gameSelected } = props;
  const dispatch = useDispatch();
  function handleGameClicked(index: number) {
    setGameSelected(index);
    dispatch(cleanNumbersArray());
  }
  const gamesList = api.types.map((game, index) => (
    <GameButton
      text={game.type}
      color={game.color}
      key={index}
      index={index}
      selected={gameSelected === index}
      onPress={() => handleGameClicked(index)}
    />
  ));
  return <View style={GamesListStyles.list}>{gamesList}</View>;
}
