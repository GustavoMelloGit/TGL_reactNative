import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Account from "../screens/Account";
import Home from "../screens/Home";

const Tab = createBottomTabNavigator();

export default function HomeRoutes() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <AntDesign name="home" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
