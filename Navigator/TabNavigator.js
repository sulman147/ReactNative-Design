import React from "react";
// import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
// import { createStackNavigator } from "@react-navigation/stack";
import {
  createBottomTabNavigator,
  BottomTabBar
} from "@react-navigation/bottom-tabs";
import { NavigationContainer, TabActions } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import AppNavigator from "./AppNavigator";
import CoursesScreen from "../Screens/CoursesScreen";
import ProjectScreen from "../Screens/ProjectsScreen";
import SectionScreen from "../Screens/SectionScreen";

const Tab = createBottomTabNavigator();

export default function MyTabs() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = focused ? "ios-home" : "ios-home";
            } else if (route.name === "Section") {
            } else if (route.name === "Courses") {
              iconName = focused ? "ios-albums" : "ios-albums";
            } else if (route.name === "Projects") {
              iconName = focused ? "ios-folder" : "ios-folder";
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          }
        })}
        tabBarOptions={{
          activeTintColor: "tomato",
          inactiveTintColor: "gray"
        }}
      >
        <Tab.Screen name="Home" component={AppNavigator} />
        <Tab.Screen name="Courses" component={CoursesScreen} />
        <Tab.Screen name="Projects" component={ProjectScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
