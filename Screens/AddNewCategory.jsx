// components/AddCategoryForm.js
import React, { useState } from "react";
import { Color } from "../Components/WelcomeScreen/AddCaregory/ColorsPicker";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ToastAndroid,
} from "react-native";
import auth from "../firebaseConfig";
import { supabase } from "../Utils/SupabaseConfig";

const AddNewCategory = () => {
  const [input, setInput] = useState("LI");
  const [selectColor, setSelectColor] = useState("purple");
  const [categoryName, setCategoryName] = useState();
  const [categoryAmount, setCategoryAmount] = useState();

  const user = auth.currentUser;
  console.log(user.email);

  const createCategory = async () => {
    const { data, error } = await supabase
      .from("Category")
      .insert([
        {
          name: categoryName,
          assigned_budget: categoryAmount,
          icon: input,
          color: selectColor,
          created_by: user.email,
        },
      ])
      .select();
    console.log(data);
    if (data) {
      ToastAndroid.show("category created !", ToastAndroid.SHORT);
    }
  };
  return (
    <View className="bg-gray-800 flex-1">
      <View className="flex-row justify-center mt-9">
        <View
          style={{ backgroundColor: selectColor }}
          className="flex-row justify-center items-center rounded-full"
        >
          <TextInput
            className="p-6 px-8 text-2xl"
            maxLength={2}
            value={input}
            onChangeText={(val) => setInput(val)}
          />
        </View>
      </View>
      <View className="p-10 flex-row gap-4 justify-center items-center">
        {Color.map((it, index) => (
          <TouchableOpacity
            style={[
              { backgroundColor: it },
              selectColor == it && { borderWidth: 4, borderColor: "gray" },
            ]}
            key={index}
            className="h-8 w-8 rounded-full"
            onPress={() => setSelectColor(it)}
          ></TouchableOpacity>
        ))}
      </View>
      {/* <View className="flex-row justify-center bg-gray-200 mx-5">
      <TextInput className="">hiiii</TextInput>
      </View> */}
      <TextInput
        className="bg-gray-200 font-bold p-3 mb-4 rounded mt-3 mx-4"
        placeholder="Title"
        placeholderTextColor="#999"
        keyboardType="text"
        autoCapitalize="none"
        // value={email}
        onChangeText={(value) => setCategoryName(value)}
      />
      <TextInput
        className="bg-gray-200 font-bold p-3 mb-4 rounded mt-5 mx-4"
        placeholder="Enter Amount"
        placeholderTextColor="#999"
        autoCapitalize="none"
        keyboardType="numeric"
        // value={email}
        onChangeText={(value) => setCategoryAmount(value)}
      />
      <TouchableOpacity
        className="flex-row justify-center items-center bg-purple-500 mx-4 mt-6 py-3 rounded"
        disabled={!categoryAmount || !categoryName}
        onPress={() => createCategory()}
      >
        <Text
          className="text-white text-2xl"
          style={{ fontFamily: "Outfit-Medium" }}
        >
          Create
        </Text>
      </TouchableOpacity>
    </View>
  );
};
export default AddNewCategory;
