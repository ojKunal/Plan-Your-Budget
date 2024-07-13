import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

const AddSubCategoryList = () => {
  const [previewImage,setPreviewImage] = useState();
  const [image, setImage] = useState(null); 
  const [itemName, setItemName] = useState();
  const [price, setPrice] = useState();
  const [link, setLink] = useState();
  const [note, setNote] = useState();

  const handleImagePicker = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      // aspect: [4, 3],
      quality: 1,
      base64:true
    });

    console.log(result);

    if (!result.canceled) {
      setPreviewImage(result.assets[0].uri)
      setImage(result.assets[0].base64);
    }
  };

  const handleDeleteImage = () => {
    setImage(null);
  };

  const handlePress = () => {
    if (!itemName || !price || !link || !note) {
      ToastAndroid.show("Missing Fields", ToastAndroid.SHORT);
    }
    // else {
    //   // Handle the submit action here
    // }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
      >
        <View className="p-4 bg-gray-900 flex-1">
          <TouchableOpacity
            className="h-[150px] w-[150px] bg-gray-600 justify-center items-center rounded-2xl ml-3 relative"
            onPress={handleImagePicker}
          >
            {image ? (
              <Image
                className="h-full w-full rounded-xl"
                source={{ uri: image }}
              />
            ) : (
              <View className="rounded-2xl h-full w-full justify-center items-center ">
                <Image
                  source={require("../assets/blankImage.png")}
                  className="h-full w-full rounded-2xl opacity-60"
                />
                  <View className="absolute">
                    {/* <FontAwesome name="plus" size={24} color="white"/> */}
                    <Text className="text-4xl text-white font-bold">+</Text>
                  </View>
              </View>
            )}
          </TouchableOpacity>
          {image && (
            <TouchableOpacity
              className="absolute top-[152px] left-[165px] bg-red-600 rounded-full"
              onPress={() => handleDeleteImage()}
            >
              <Text className="text-white px-1">X</Text>
            </TouchableOpacity>
          )}

          <View className="bg-gray-700 flex-row items-center p-2 mt-8 rounded">
            <Ionicons name="pricetag" size={22} color="gray" />
            <TextInput
              className=" text-white rounded p-1  w-[90%] ml-2"
              placeholder="Item Name"
              placeholderTextColor="#999"
              autoCapitalize="words"
              value={itemName}
              onChangeText={(text) => setItemName(text)}
            />
          </View>
          <View className="bg-gray-700 flex-row items-center p-2 mt-4 rounded">
            <FontAwesome name="dollar" size={24} color="gray" />
            <TextInput
              className=" text-white rounded p-1  w-[90%] ml-2"
              placeholder="Cost"
              placeholderTextColor="#999"
              autoCapitalize="none"
              keyboardType="numeric"
              value={price}
              onChangeText={(num) => setPrice(num)}
            />
          </View>
          <View className="bg-gray-700 flex-row items-center p-2 mt-4 rounded">
            <Feather name="link-2" size={24} color="gray" />
            <TextInput
              className=" text-white rounded p-1  w-[90%] ml-2"
              placeholder="Url"
              placeholderTextColor="#999"
              autoCapitalize="none"
              value={link}
              onChangeText={(text) => setLink(text)}
            />
          </View>
          <View className="bg-gray-700 flex-row items-center pl-2 mt-4 rounded">
            <Ionicons name="pencil-outline" size={24} color="gray" />
            <TextInput
              className=" text-white rounded  w-[90%] ml-2"
              placeholder="Note"
              placeholderTextColor="#999"
              autoCapitalize="words"
              multiline={true}
              numberOfLines={4}
              value={note}
              onChangeText={(text) => setNote(text)}
            />
          </View>
          <TouchableOpacity
            className="bg-purple-600 mt-10 rounded-full flex-row justify-center items-center"
            disabled={!itemName || !price || !link || !note}
            onPress={handlePress}
          >
            <Text
              className="text-gray-300 py-3 text-xl"
              style={{ fontFamily: "Outfit-Medium" }}
            >
              Add
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default AddSubCategoryList;
