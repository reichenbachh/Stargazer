import React from "react";
import { Text, StyleSheet } from "react-native";

const TextReg = ({ text, size, color }) => {
  return (
    <Text
      style={{ fontFamily: "Montserrat-Regular", fontSize: size, color: color }}
    >
      {text}
    </Text>
  );
};

const TextBold = ({ text, size, color }) => {
  return (
    <Text
      style={{ fontFamily: "Montserrat-Bold", fontSize: size, color: color }}
    >
      {text}
    </Text>
  );
};

const TextBlack = ({ text, size, color }) => {
  return (
    <Text
      style={{ fontFamily: "Montserrat-Black", fontSize: size, color: color }}
    >
      {text}
    </Text>
  );
};

export { TextReg, TextBold, TextBlack };
