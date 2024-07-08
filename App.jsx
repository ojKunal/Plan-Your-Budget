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
import CategoryDatails from "./Screens/CategoryDetails";
import AddSubCategoryList from "./Screens/AddSubCategoryList";
import Icon from 'react-native-vector-icons/Ionicons';

const stack = createStackNavigator();

export default function App() {
  const CustomHeaderTitle = () => (
    <Text style={{  color: 'white', fontSize: 20,fontStyle:"italic" }}>Add items</Text>
  );
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
        <stack.Screen
          name="Add New Category"
          component={AddNewCategory}
          options={{
            headerShown: true,
          }}
        />
        <stack.Screen name="CategoryDetails" component={CategoryDatails} />
        <stack.Screen
          name="AddSubCategoryList"
          component={AddSubCategoryList}
          options={({ navigation }) => ({
            headerShown: true,
            title: "Add items",
            headerTitle: (props) => <CustomHeaderTitle {...props} />,
            headerStyle: {
              backgroundColor: "purple",
            },
            headerLeft: () => (
              <Icon.Button
                name="arrow-back"
                size={25}
                backgroundColor="purple"
                color="white"
                onPress={() => navigation.goBack()}
              />
            ),
          })}
        />
      </stack.Navigator>
    </NavigationContainer>
  );
}
