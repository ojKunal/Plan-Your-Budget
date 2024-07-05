//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { useRoute } from "@react-navigation/native";

// create a component
const SubCategoryList = ({ CategoryItems = [] }) => {
  console.log(CategoryItems);
  return (
    <View>
      <Text
        className="text-white text-xl"
        style={{ fontFamily: "Outfit-Medium" }}
      >
        Item List
      </Text>
      {CategoryItems?.length > 0 ? (
        CategoryItems.map((item, index) => (
          <>
            <ScrollView>
              <View key={index} className="flex-row h-16 items-center mt-2 ">
                <View className="h-full w-20 bg-red-800 rounded-xl">
                  <Image
                    className="h-full w-full"
                    source={{ uri: item.image }}
                  />
                </View>
                <View className="flex-row justify-between items-center mx-3">
                  <View className=" w-[60%] ">
                    <Text
                      className="text-white text-xl"
                      style={{ fontFamily: "Outfit-Bold" }}
                    >
                      {item.name}
                    </Text>
                    <Text
                      className="text-gray-300 text-[13px]"
                      style={{ fontFamily: "Outfit-Regular" }}
                    >
                     {item.url}
                    </Text>
                  </View>
                  <View className="justify-end">
                    <Text
                      className="text-white text-lg"
                      style={{ fontFamily: "Outfit-Bold" }}
                    >
                      ${item.cost}
                    </Text>
                  </View>
                </View>
              </View>
              <View className="w-full h-0.5 bg-gray-500 rounded-2xl mt-2"></View>
            </ScrollView>
          </>
        ))
      ) : (
        <Text
          className="text-white text-2xl mt-3"
          style={{ fontFamily: "Outfit-Medium" }}
        >
          No data Found ...
        </Text>
      )}
    </View>
  );
};

export default SubCategoryList;
