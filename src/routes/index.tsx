import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Authentication from "../screens/Authentication";
import Home from "../screens/Home";
import Background from "../components/ui/Background";
import { useSelector } from "react-redux";
import { RootState } from "../store";

const Tab = createBottomTabNavigator();

export default function Routes() {
  const user = useSelector((state: RootState) => state.auth.user);
  return (
    <Background>
      {user ? (
        <Tab.Navigator>
          <Tab.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
          />
        </Tab.Navigator>
      ) : (
        <Authentication />
      )}
    </Background>
  );
}
