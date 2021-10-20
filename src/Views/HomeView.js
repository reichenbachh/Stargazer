import React from "react";
import { View, Image, Text, StyleSheet, StatusBar } from "react-native";
import HomeHeader from "../components/HomeHeader";
import config from "../../config/config.json";
import Apod from "../components/Apod";

const HomeView = ({ route }) => {
  return (
    <View onLayout={route.params.onLayoutRootView} style={style.view}>
      <HomeHeader />
      <Apod />
    </View>
  );
};

const style = StyleSheet.create({
  view: {
    paddingTop: StatusBar.currentHeight + 10,
    backgroundColor: config.primaryColor,
    flex: 1,
  },
});

export default HomeView;
