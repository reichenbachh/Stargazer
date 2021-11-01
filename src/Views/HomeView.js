import React, { useEffect, Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { View, ScrollView, StyleSheet, StatusBar } from "react-native";
import { fetchApod } from "../redux/Actions";
import HomeHeader from "../components/HomeHeader";
import config from "../../config/config.json";
import Apod from "../components/Apod";
import Preloader from "../components/Preloader";
import PlanetScroller from "../components/ItemScroller";

const HomeView = ({ route, navigation }) => {
  const dispatch = useDispatch();
  const { loading, apod, error } = useSelector((state) => state.appReducer);
  useEffect(() => {
    dispatch(fetchApod());
  }, []);

  return (
    <View onLayout={route.params.onLayoutRootView} style={style.view}>
      <HomeHeader />
      {loading ? (
        <Preloader />
      ) : (
        <ScrollView>
          <Apod apod={apod} />
          <PlanetScroller navigation={navigation} />
        </ScrollView>
      )}
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
