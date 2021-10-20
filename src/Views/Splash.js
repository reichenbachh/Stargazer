import React from "react";
import star_logo_light from "../assets/star_logo_light.png";
import { View, Image, StyleSheet } from "react-native";
import config from "../config/config.json";

const Splash = () => {
  return (
    <View style={style.splashWrapper}>
      <View style={style.imageHolder}>
        <Image style={style.image} source={star_logo_light} />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  splashWrapper: {
    backgroundColor: config.primaryColor,
    paddingTop: 60,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imageHolder: {
    height: 300,
    width: 300,
  },

  image: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: "contain",
  },
});
export default Splash;
