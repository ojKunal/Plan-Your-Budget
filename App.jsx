import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import WelcomeScreen from "./Screens/WelcomeScreen";
import SignIn from "./Screens/Authentication/SignIn";
import SignUp from "./Screens/Authentication/SignUp";
import Layout from "./Screens/Tabs/Layout";
import { initializeApp } from "firebase/app";
import AddNewCategory from "./Screens/AddNewCategory";

const stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="WelcomeScreen"
      >
        {/* <stack.Screen name="welcome" component={layout} /> */}
        <stack.Screen
          name="Layout"
          component={Layout}
          options={(headerShown = "false")}
        />
        <stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
        <stack.Screen name="SignIn" component={SignIn} />
        <stack.Screen name="SignUp" component={SignUp} />
        <stack.Screen name="AddNewCategory" component={AddNewCategory} />
      </stack.Navigator>
    </NavigationContainer>
  );
}
