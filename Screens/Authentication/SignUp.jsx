import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  StatusBar
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import auth from "../../firebaseConfig";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
// import HomeScreen from "../HomeScreen";
// import "./firebaseConfig";

const SignUp = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const handleSignup = async () => {
    if (!validateEmail(email)) {
      setErrorMessage("Invalid email id");
      return;
    }
    if (!password || password.length < 6) {
      setErrorMessage("Password must contain atleast 6 digit");
      return;
    }
    if (password !== confirmPassword) {
      setErrorMessage("Confirm password does not match");
      return;
    }
    setErrorMessage("");
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      if (userCredential) {
        console.log(userCredential.user);
        navigation.navigate("Layout");
      }
    } catch (error) {
      setErrorMessage(error.message);
      console.log("Error creating user:", error);
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-900">
      <StatusBar style="light" backgroundColor="black" />
      <View className="flex-1 mt-20 px-6">
        <View className="flex-row justify-center">
          <Text className="text-3xl font-bold text-white mb-6">Sign Up</Text>
        </View>

        <TextInput
          className="bg-gray-800 text-white p-4 mb-4 rounded mt-12"
          placeholder="Email"
          placeholderTextColor="#999"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />

        <TextInput
          className="bg-gray-800 text-white p-4 rounded mb-6 "
          placeholder="Password"
          placeholderTextColor="#999"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <TextInput
          className="bg-gray-800 text-white p-4 rounded mb-6"
          placeholder="Confirm Password"
          placeholderTextColor="#999"
          secureTextEntry
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
        {errorMessage && <Text className="text-red-400">{errorMessage}</Text>}

        <TouchableOpacity
          className="bg-purple-700 p-4 rounded items-center mt-6"
          onPress={handleSignup}
        >
          <Text className="text-white text-lg font-bold">Sign Up</Text>
        </TouchableOpacity>
        <View className="flex-row justify-center mt-6">
          <Text className="text-gray-300 ">Already a member?</Text>
        </View>
        <TouchableOpacity className="flex-row justify-center mt-2">
          <Text
            className="text-purple-800 text-xl font-bold"
            onPress={() => navigation.navigate("SignIn")}
          >
            Sing In
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SignUp;
