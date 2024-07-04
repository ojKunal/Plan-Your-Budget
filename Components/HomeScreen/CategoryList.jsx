import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, RefreshControl } from "react-native";
import { useNavigation } from "@react-navigation/native";

const CategoryList = ({ categoryData = [] }) => {
  const navigation = useNavigation();
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    console.log("Category data changed:", categoryData);
    // Additional logic can be added here if needed when categoryData changes
  }, [categoryData]);

  const onRefresh = () => {
    setRefreshing(true);
    // Simulate a network request
    setTimeout(() => {
      // Add your refresh logic here, such as fetching new data
      setRefreshing(false);
    }, 2000);
  };

  return (
    <View className="m-3 flex-1">
      <Text className="text-white text-xl" style={{ fontFamily: "Outfit-Bold" }}>
        Latest Budget
      </Text>
      <ScrollView
        style={{ marginTop: 10 }}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        {categoryData.length > 0 ? (
          categoryData.map((item, index) => (
            <TouchableOpacity
              key={index}
              className="bg-gray-700 mb-3 h-20 flex-row items-center rounded-2xl"
              onPress={() => navigation.navigate("YourScreenName", { item })}
            >
              <View
                className="flex-row justify-center items-center h-[80%] w-[20%] rounded-lg ml-2"
                style={{ backgroundColor: item.color }}
              >
                <Text className="text-xl">{item.icon}</Text>
              </View>
              <View className="flex-row items-center justify-between w-[65%] mx-3">
                <View className="gap-2">
                  <Text style={{ fontFamily: "Outfit-Bold" }} className="text-xl text-gray-300">
                    {item.name}
                  </Text>
                  <Text style={{ fontFamily: "Outfit-Regular" }} className="text-gray-400">
                    0 items
                  </Text>
                </View>
                <View>
                  <Text style={{ fontFamily: "Outfit-Bold" }} className="text-gray-300">
                    $ {item.assigned_budget}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          ))
        ) : (
          <Text className="text-white">No categories available</Text>
        )}
      </ScrollView>
    </View>
  );
};

export default CategoryList;
