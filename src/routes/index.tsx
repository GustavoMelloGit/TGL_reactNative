import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { View, Text } from "react-native";
import Authentication from "../screens/Authentication";
import Home from "../screens/Home";

const Tab = createBottomTabNavigator();

export default function Routes() {
  return (
    <>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Authentication"
          component={Authentication}
          options={{ headerShown: false }}
        />
      </Tab.Navigator>
    </>
  );
}
