//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

// create a component
const Indicator = ({ data }) => {
  console.log(data);
  return (
    <View>
      {/* {data.map((it) => (
        <Text className="text-white">{it.id}</Text>
      ))} */}
    </View>
  );
};

export default Indicator;
