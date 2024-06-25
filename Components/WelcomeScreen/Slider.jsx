//import liraries
import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  Dimensions,
} from "react-native";
import Indicator from "./Indicator";
// create a component
const screenWidth = Dimensions.get("window").width;
const Slider = ({ item, data }) => {
  console.log(item);
  return (
    <View className="mt-[100px]">
      <Image
        source={item.image}
        resizeMode="contain"
        style={{ width: screenWidth }}
      />
      <View className="flex-row justify-center mt-7">
        <View className="flex-row justify-center w-[300px]">
          <Text className="text-gray-300 font-bold text-xl">{item.title}</Text>
        </View>
      </View>
      <Indicator item={data} />
    </View>
  );
};
export default Slider;
