import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import auth from "../../firebaseConfig";
import { useNavigation } from "@react-navigation/native";

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
    <View style={styles.container}>
      <Text style={styles.title}>Profile section</Text>
      <View style={styles.profileContainer}>
        <Text style={styles.username}>Username: {username}</Text>
        <Button title="Logout" onPress={handleLogout} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  profileContainer: {
    padding: 20,
    borderRadius: 10,
    backgroundColor: "#f0f0f0",
    alignItems: "center",
  },
  username: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default ProfileScreen;
