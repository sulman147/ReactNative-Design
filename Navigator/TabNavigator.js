import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../Screens/HomeScreen";
import SectionScreen from "../Screens/SectionScreen";
import { NavigationContainer } from "@react-navigation/native";

const HomeStack = createBottomTabNavigator();

function MyTab() {
  return (
    <NavigationContainer>
      <HomeStack.Navigator>
        <HomeStack.Screen name="Home" componen={HomeScreen} />
        <HomeStack.Screen name="Section" component={SectionScreen} />
      </HomeStack.Navigator>
    </NavigationContainer>
  );
}
export default MyTab;
