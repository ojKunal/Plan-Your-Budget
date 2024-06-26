//import liraries
import React, { Component, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import CircularChart from "../../Components/CircularChart";
import { FontAwesome6 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import auth from "../../firebaseConfig";
import { supabase } from "../../Utils/SupabaseConfig";

// create a component
const HomeScreen = () => {
  const navigation = useNavigation();
  const widthAndHeight = 250;
  const series = [123, 321, 123, 789, 537];
  const sliceColor = ["#fbd203", "#ffb300", "#ff9100", "#ff6c00", "#ff3c00"];
  const userEmail = auth.currentUser.email;

  useEffect(() => {
    getCategoryList();
  });
  console.log(userEmail);
  //fetching data from supabase//
  const getCategoryList = async () => {
    const { data, error } = await supabase.from("Category").select("*");
    if (error) {
      console.error("Error fetching data:", error);
      return;
    }
    console.log("Data:", data);
  };

  const getUsername = (email) => {
    return email.split("@")[0];
  };

  return (
    <SafeAreaView className="h-full bg-gray-800">
      <StatusBar style="light" backgroundColor="black" />
      <View className="h-[20%] bg-blue-500 rounded-b-3xl flex-row">
        <View className="flex-row items-center gap-3 ml-3 h-[40%] mt-2">
          <View className="rounded-full bg-[#002117] h-14 w-14 flex-row items-center justify-center">
            <Text
              style={{ fontFamily: "Outfit-Bold" }}
              className="text-white text-2xl"
            >
              {userEmail[0].toUpperCase()}
            </Text>
          </View>
          <View>
            <Text
              style={{ fontFamily: "Outfit-Bold" }}
              className="text-gray-300"
            >
              Welcome,
            </Text>
            <Text
              style={{ fontFamily: "Outfit-Medium" }}
              className="text-white text-xl"
            >
              {getUsername(userEmail)}
            </Text>
          </View>
        </View>
        {/* <View className="bg-white h-[20%]">
          <Text>hiiiiii</Text>
        </View> */}
      </View>
      {/* <View className="absolute top-28 h-[150px] w-full flex-row justify-center">
        <View className=" h-full w-[90%]  bg-gray-300 rounded-2xl">
          <CircularChart />
        </View>
      </View> */}
      <TouchableOpacity
        className="absolute bottom-5 bg-purple-500 rounded-full right-4 h-12 w-12 flex-row justify-center items-center"
        onPress={() => navigation.navigate("AddNewCategory")}
      >
        <FontAwesome6 name="add" size={24} color="white" />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

//make this component available to the app
export default HomeScreen;
