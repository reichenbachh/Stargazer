import React from "react";
import config from "../../config/config.json";
import { FontAwesome } from "@expo/vector-icons";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  StatusBar,
  Image,
  TouchableOpacity,
} from "react-native";

const DetailsView = ({ route, navigation }) => {
  const { name, list } = route.params;
  const data = list.find((p) => p.name === name);
  return (
    <View style={style.view}>
      <ScrollView>
        <Text style={style.title}>{name}</Text>
        <View style={style.container}>
          <Image source={data.imageUrl} />
        </View>
        <View style={style.detailsTextView}>
          <Text style={style.detailsText}>
            Surface Temperature: {data.surfaceTemp}
          </Text>
          <Text style={style.detailsText}>Mass: {data.mass}</Text>
          <Text style={style.detailsText}>
            Polar Diameter: {data.polarDiameter}
          </Text>
          <Text style={style.detailsText}>
            Equitorial Diametere :{data.equitorialDiameter}
          </Text>
        </View>
        <View style={style.detailsTextView}>
          <Text style={style.detailsText2}>{data.details}</Text>
        </View>
      </ScrollView>
      <TouchableOpacity onPress={() => navigation.pop()} style={style.backBtn}>
        <FontAwesome name='arrow-left' size={20} color='white' />
      </TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create({
  view: {
    paddingTop: StatusBar.currentHeight + 10,
    backgroundColor: config.primaryColor,
    flex: 1,
    position: "relative",
  },
  backBtn: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    position: "absolute",
    top: 58,
    left: 20,
    backgroundColor: "#000",
    height: 60,
    width: 60,
    borderRadius: 60 / 2,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
  },
  detailsTextView: {
    paddingHorizontal: 20,
  },
  detailsText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 10,
  },
  detailsText2: {
    color: "#fff",
    fontSize: 15,
    marginBottom: 10,
  },
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
  },
});
export default DetailsView;
