import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../Screens/HomeScreen";
import React from "react";
import SectionScreen from "../Screens/SectionScreen";

const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none" mode="modal">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Section" component={SectionScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default AppNavigator;
