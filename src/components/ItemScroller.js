import React from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  Image,
  Text,
  TouchableOpacity,
} from "react-native";
import { data } from "../data/data";

const PlanetScroller = ({ navigation }) => {
  const SideScroller = ({ dataList }) => {
    return (
      <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
        {dataList.map((item) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Details", {
                  name: item.name,
                  list: dataList,
                })
              }
            >
              <View style={styles.row1}>
                <View style={styles.itemContainer}>
                  <Image style={styles.image} source={item.imageUrl} />
                  <Text style={styles.itemText}>{item.name}</Text>
                </View>
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    );
  };
  return (
    <View style={styles.row1}>
      <Text style={styles.title}>PLANETS </Text>
      <SideScroller dataList={data.planets} />
      <Text style={styles.title}>DWARF PLANETS </Text>
      <SideScroller dataList={data.dwraf_planets} />
      <Text style={styles.title}>PLANETS </Text>
      <SideScroller dataList={data.space_bodies} />
    </View>
  );
};

const styles = StyleSheet.create({
  row1: {
    flex: 1,
  },
  itemContainer: {
    height: 130,
    width: 130,
    marginRight: 20,
    marginBottom: 40,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    paddingBottom: 10,
  },
  itemText: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
  },
  image: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: "cover",
    borderRadius: 20,
  },
});

export default PlanetScroller;
