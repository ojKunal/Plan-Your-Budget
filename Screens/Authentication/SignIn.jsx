//import libraries
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Alert,
  BackHandler,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { AntDesign } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import auth from "../../firebaseConfig";

// create a component
const SignIn = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const backAction = () => {
      BackHandler.exitApp();
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const handleSignIn = () => {
    if (!validateEmail(email)) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    if (password.length < 6) {
      setErrorMessage("Password must be at least 6 characters long.");
      return;
    }

    setErrorMessage(""); // Clear any previous error messages
    console.log("Sign-In:", email, password);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("SignedIn!");
        const user = userCredential.user;
        // console.log(user);
        navigation.navigate("Layout");
      })
      .catch((error) => {
        console.log(error);
        setErrorMessage(error.message);
      });
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-900">
      <StatusBar style="light" backgroundColor="black" />
      <View className="flex-1 mt-20 px-6">
        <View className="flex-row justify-center">
          <Text className="text-3xl font-bold text-white mb-6">Sign In</Text>
        </View>

        <TextInput
          className="bg-gray-800 text-white p-4 mb-4 rounded mt-12"
          placeholder="Email"
          placeholderTextColor="#999"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={(text) => {
            setEmail(text);
          }}
        />

        <TextInput
          className="bg-gray-800 text-white p-4 rounded mb-6"
          placeholder="Password"
          placeholderTextColor="#999"
          secureTextEntry
          value={password}
          onChangeText={(text) => {
            setPassword(text);
          }}
        />
        {errorMessage && <Text className="text-red-400">{errorMessage}</Text>}

        <TouchableOpacity
          className="bg-purple-700 p-4 rounded items-center mt-6"
          onPress={handleSignIn}
        >
          <Text className="text-white text-lg font-bold">Sign In</Text>
        </TouchableOpacity>
        <View className="flex-row justify-center mt-10">
          <Text className="text-gray-400">or sign up using</Text>
        </View>
        <View className="flex-row justify-center gap-8 p-3">
          <TouchableOpacity className="flex-row justify-center rounded-full bg-gray-600 p-3">
            <AntDesign name="google" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity className="flex-row justify-center rounded-full bg-gray-600 p-3">
            <EvilIcons name="sc-facebook" size={26} color="white" />
          </TouchableOpacity>
          <TouchableOpacity className="flex-row justify-center rounded-full bg-gray-600 p-3">
            <Entypo name="twitter" size={24} color="white" />
          </TouchableOpacity>
        </View>
        <View className="flex-row justify-center mt-6">
          <Text className="text-gray-300 ">Don't have an account yet?</Text>
        </View>
        <TouchableOpacity className="flex-row justify-center mt-2">
          <Text
            className="text-purple-800 text-xl font-bold"
            onPress={() => navigation.navigate("SignUp")}
          >
            Sing Up
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SignIn;
