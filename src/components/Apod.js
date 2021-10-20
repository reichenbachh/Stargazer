import React, { useEffect } from "react";
import { View, Text, Image } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { fetchApod } from "../redux/Actions";

export default Apod = () => {
  const { loading, apod, error } = useSelector((state) => state.appReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchApod());
  }, []);
  return (
    <View>
      <Image />
    </View>
  );
};
