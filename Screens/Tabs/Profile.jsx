import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import auth from "../../firebaseConfig";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

const ProfileScreen = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState("");

  useEffect(() => {
    const user = auth.currentUser;
    if (user) {
      setUsername(user.email); // or user.displayName or user.email based on your setup
    }
  }, []);

  const handleLogout = () => {
    auth
      .signOut()
      .then(() => {
        // Sign-out
        navigation.navigate("SignIn");
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <SafeAreaView className = "bg-gray-900 flex-1">
    <View>
      <Text>
        Logout
      </Text>
    </View>
   </SafeAreaView>
  );
};



export default ProfileScreen;
