import { useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome6 } from "@expo/vector-icons";
import SubCategoryList from "../Components/CategoryDetails/SubCategoryList";

// create a component
const CategoryDetails = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { item } = route.params;
  const [budgetCost,setBudgetCost] = useState(0);
  const [budgetPercent,setBudgetPercent] = useState(0);

  useEffect(() => {
    item&&CalculateBudgetPercent();
  },[item])


  const CalculateBudgetPercent = () => {
     let subBudget = 0;
      item?.CategoryItems?.forEach(it => {
         subBudget += it.cost;
      })
      setBudgetCost(subBudget);
      const percent = (subBudget/item.assigned_budget) * 100;
      setBudgetPercent(percent);
      // console.log(subBudget);
      // console.log(percent);
  }

  return (
    <SafeAreaView className="h-full bg-gray-900">
      <StatusBar style="light" backgroundColor="black" />
      <View className="p-4 mt-6 bg-gray-700 rounded-b-2xl">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back-circle-sharp" size={40} color="white" />
        </TouchableOpacity>
        <View className="h-20 mt-1 flex-row items-center ">
          <View
            className="h-[90%] w-[23%] rounded-2xl flex-row justify-center items-center"
            style={{ backgroundColor: item.color }}
          >
            <Text className="text-2xl">{item.icon}</Text>
          </View>
          <View className="flex-row justify-between items-center w-[75%]">
            <View className="gap-2 ml-2">
              <Text
                className="text-white text-2xl"
                style={{ fontFamily: "Outfit-Bold" }}
              >
                {item.name}
              </Text>
              <Text
                className="text-white"
                style={{ fontFamily: "Outfit-Medium" }}
              >
                {item?.CategoryItems?.length} Item 
              </Text>
            </View>
            <TouchableOpacity className="">
              <FontAwesome6 name="trash-can" size={24} color="red" />
            </TouchableOpacity>
          </View>
        </View>
        <View className="flex-row justify-between mt-2">
           <Text className="text-white text-sm" style={{fontFamily:"Outfit-Bold"}}>${budgetCost}</Text>
           <Text className="text-white text-sm" style={{fontFamily:"Outfit-Bold"}}>Total Budget : ${item.assigned_budget}</Text>
        </View>
        <View className="w-full h-6 bg-gray-300 rounded-2xl mt-1">
             <View className="bg-red-400 h-full rounded-2xl" style={{width:budgetPercent+'%'}} ></View>
        </View>
      </View>
      <View className="p-3">
      <SubCategoryList CategoryItems={item.CategoryItems}/>
      </View>
    </SafeAreaView>
  );
};

export default CategoryDetails;
