//import liraries
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  FlatList,
  TouchableOpacity,
  onPress,
} from "react-native";
import Slider from "../Components/WelcomeScreen/Slider";
import { SafeAreaView } from "react-native-safe-area-context";
import { WelcomeData } from "../Components/WelcomeScreenData";
import Indicator from "../Components/WelcomeScreen/Indicator";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import HomeScreen from "./Tabs/HomeScreen";
import auth from "../firebaseConfig";

const WelcomeScreen = () => {
  const navigation = useNavigation();
  const [page, setPage] = useState(1);

  return (
    <View className="flex-1">
      <LinearGradient
        colors={["#1c1c3d", "#1c1c3d", "#0a0a23", "#000000"]}
        className="flex-1"
      >
        <FlatList
          data={WelcomeData}
          horizontal
          pagingEnabled
          snaptoAlignment="center"
          // horizontalScrollIndicator="false"
          renderItem={({ item }) => <Slider item={item} data={WelcomeData} />}
        />
        <View className="flex-row justify-center absolute bottom-14 w-full ">
          <TouchableOpacity
            onPress={() => {
              if (auth && auth.currentUser) {
                navigation.navigate("Layout");
              } else navigation.navigate("SignIn");
            }}
          >
            <LinearGradient
              colors={["#2c003e", "#6a0dad"]}
              className="px-24 py-3 rounded-full"
            >
              <Text className="text-gray-300 font-bold text-xl">
                Get Started
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </View>
  );
};

export default WelcomeScreen;
