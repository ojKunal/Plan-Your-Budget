import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, RefreshControl } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { FontAwesome6 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import auth from "../../firebaseConfig";
import { supabase } from "../../Utils/SupabaseConfig";
import CategoryList from "../../Components/HomeScreen/CategoryList";

// create a component
const HomeScreen = () => {
  const navigation = useNavigation();
  const userEmail = auth.currentUser.email;
  const [categoryData, setCategoryData] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    getCategoryList();
  }, []);

  const getCategoryList = async () => {
    const { data, error } = await supabase.from("Category").select("*,CategoryItems(*)").eq('created_by', userEmail);
    setCategoryData(data);
  };

  const onRefresh = () => {
    setRefreshing(true);
    getCategoryList().then(() => setRefreshing(false));
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
            <Text style={{ fontFamily: "Outfit-Bold" }} className="text-white text-2xl">
              {userEmail[0].toUpperCase()}
            </Text>
          </View>
          <View className="flex-row justify-between w-[72%] items-center">
            <View>
              <Text style={{ fontFamily: "Outfit-Bold" }} className="text-gray-300">
                Welcome,
              </Text>
              <Text style={{ fontFamily: "Outfit-Medium" }} className="text-white text-xl">
                {getUsername(userEmail)}
              </Text>
            </View>
            <View>
              <Ionicons name="notifications-sharp" size={24} color="white" />
            </View>
          </View>
        </View>
      </View>
      <TouchableOpacity
        className="absolute z-10 bottom-5 bg-purple-500 rounded-full right-4 h-14 w-14 flex-row justify-center items-center"
        onPress={() => navigation.navigate("Add New Category")}
      >
        <FontAwesome6 name="add" size={24} color="white" />
      </TouchableOpacity>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
      >
        <CategoryList categoryData={categoryData} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
