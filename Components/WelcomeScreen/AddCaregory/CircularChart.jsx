//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
// import PieChart from "react-native-pie-chart";

const CircularChart = () => {
  const widthAndHeight = 250;
  const series = [123, 321, 123, 789, 537];
  const sliceColor = ["#fbd203", "#ffb300", "#ff9100", "#ff6c00", "#ff3c00"];
  return (
    <View>
      <Text>CircularChart</Text>
      {/* <PieChart
        widthAndHeight={widthAndHeight}
        series={series}
        sliceColor={sliceColor}
        coverRadius={0.45}
        coverFill={"#FFF"}
      /> */}
    </View>
  );
};

export default CircularChart;
