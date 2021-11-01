import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Authentication from "../screens/Authentication";
import Background from "../components/ui/Background";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import HomeRoutes from "./home.routes";

const Tab = createBottomTabNavigator();

export default function Routes() {
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);
  return (
    <HomeRoutes />
    // {/* {isAuthenticated ? <HomeRoutes /> : <Authentication />} */}
  );
}
