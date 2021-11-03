//Utils
import React, { useState } from "react";
import { View, Text, FlatList } from "react-native";
import api from "../../api/api.json";
import { RootState } from "../../store";
import { useSelector } from "react-redux";
import { GameProps } from "../../models/GamesInterfaces";

//Styles
import { styles } from "./styles";
import { theme } from "../../utils";

//Components
import {
  ArrowedButton,
  Background,
  Divider,
  GameButton,
  GameItem,
} from "../../components";
import { IRouteProps } from "../../models/RoutesIterface";

export default function Account({ navigation }: IRouteProps) {
  const [gameSelected, setGameSelected] = useState<number[]>([]);
  const savedGames = useSelector((state: RootState) => state.games.savedGames);
  const gameResponse = api.types;
  const games = gameSelected.map((number) => gameResponse[number]);
  const gameFilter = savedGames.filter((game) =>
    games.some((element) => element.type === game.type)
  );

  function getGamesList(game: GameProps[]) {
    return (
      <FlatList
        data={game}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <GameItem {...item} />}
        contentContainerStyle={{ paddingBottom: 20, paddingTop: 10 }}
        ItemSeparatorComponent={() => Separator}
      />
    );
  }
  function handleFilterClicked(index: number) {
    if (gameSelected.includes(index)) {
      setGameSelected((prev) => prev.filter((element) => element !== index));
      return;
    }
    setGameSelected((prev) => [...prev, index]);
  }
  function isSelected(index: number) {
    return gameSelected.includes(index);
  }
  const filtersButton = api.types.map((game, index) => (
    <View key={index}>
      <GameButton
        text={game.type}
        color={game.color}
        index={index}
        selected={isSelected(index)}
        onPress={() => handleFilterClicked(index)}
      />
    </View>
  ));

  function handleNewBet() {
    navigation.navigate("Home");
  }
  const Separator = (
    <View style={styles.separatorComponent}>
      <Divider />
    </View>
  );
  return (
    <Background hasHeader>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText__title}>Jogos recentes</Text>
          <Text style={styles.headerText__subtitle}>Filtros:</Text>
          <View style={styles.filters}>{filtersButton}</View>
        </View>
        <View style={styles.listWrapper}>
          {gameSelected.length > 0
            ? getGamesList(gameFilter)
            : getGamesList(savedGames)}
        </View>
        <ArrowedButton
          text="Nova aposta"
          color={theme.colors.secondary}
          onPress={handleNewBet}
        />
      </View>
    </Background>
  );
}
