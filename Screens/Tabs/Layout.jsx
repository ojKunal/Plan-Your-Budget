import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./HomeScreen";
import HistoryScreen from "./History";
import ProfileScreen from "./Profile";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { useFonts } from "expo-font";

const stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function Layout() {
  const [fontsLoaded, fontError] = useFonts({
    "Outfit-Bold": require("../../assets/Fonts/Outfit-Bold.ttf"),
    "Outfit-Medium": require("../../assets/Fonts/Outfit-Medium.ttf"),
    "Outfit-Regular": require("../../assets/Fonts/Outfit-Regular.ttf"),
  });
  return (
    // <NavigationContainer>
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "purple",
        tabBarShowLabel: true,
        tabBarStyle: {
          backgroundColor: "#002117", // Tab bar background color
        },
      }}
    >
      <Tab.Screen
        name="welcome"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <AntDesign name="home" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="History"
        component={HistoryScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="history" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Feather name="user" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
    // </NavigationContainer>
  );
}
