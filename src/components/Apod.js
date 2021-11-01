import React from "react";
import { Dimensions } from "react-native";
import { View, Text, Image, StyleSheet } from "react-native";

const { width } = Dimensions.get("window");

export default Apod = ({ apod }) => {
  console.log(apod);
  return (
    <View style={styles.container}>
      <Text style={styles.apodLeadText}>Astronomy Picture of The Day</Text>
      <View style={styles.imageContainer}>
        <Image source={{ uri: apod.url }} style={styles.image} />
        <View style={styles.imageCaption}>
          <Text style={styles.imageCaptionTextLead}>{apod.title}</Text>
          <Text style={styles.imageCaptionText}>{apod.date}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 260,
    width: width,
    padding: 10,
  },
  apodLeadText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 10,
  },
  imageContainer: {
    flex: 1,
    position: "relative",
  },
  imageCaption: {
    padding: 10,
    backgroundColor: "rgba(0,0,0,0.5)",
    position: "absolute",
    bottom: 10,
    left: 20,
  },
  imageCaptionTextLead: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#fff",
  },
  imageCaptionText: {
    fontSize: 13,
    color: "#fff",
  },
  image: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: "cover",
    borderRadius: 20,
  },
});
