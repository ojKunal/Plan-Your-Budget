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
} from "react-native";

const AddNewCategory = () => {
  const [input, setInput] = useState("LI");
  const [selectColor, setSelectColor] = useState("purple");
  const [categoryName, setCategoryName] = useState();
  const [categoryAmount, setCategoryAmount] = useState();
  return (
    <View className="bg-gray-800 flex-1">
      <View className="flex-row justify-center mt-9">
        <View
          style={{ backgroundColor: selectColor }}
          className="flex-row justify-center items-center rounded-full"
        >
          <TextInput className="p-6 px-8 text-2xl " maxLength={2}>
            {input}
          </TextInput>
        </View>
      </View>
      <View className="p-10 flex-row gap-4 justify-center items-center">
        {Color.map((it) => (
          <TouchableOpacity
            style={[
              { backgroundColor: it },
              selectColor == it && { borderWidth: 4, borderColor: "gray"},
            ]}
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
