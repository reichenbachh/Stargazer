import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { TextBlack, TextReg } from "./Typography";
import { getDate } from "../utils/getDate";

const HomeHeader = () => {
  const today = getDate();

  return (
    <View style={style.view}>
      <View>
        <TextBlack text='Today' color='white' size={25} />
        <TextReg text={today} size={15} color='white' />
      </View>
      <View>
        <FontAwesome name='gear' size={30} color='white' />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  view: {
    paddingHorizontal: 20,
    paddingVertical: 5,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default HomeHeader;
