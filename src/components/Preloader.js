import React from "react";
import { View, Image, StyleSheet } from "react-native";
import loading from "../../assets/loading.gif";

const Preloader = () => {
  return (
    <View style={styles.container}>
      <View style={styles.loadingContainer}>
        <Image source={loading} style={styles.loading} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loadingContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  loading: {
    flex: 1,
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
});

export default Preloader;
