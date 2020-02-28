import {
  createStackNavigator,
  createAppContainer
} from "react-navigation/native";
import HomeScreen from "../Screens/HomeScreen";
import SectionScreen from "../Screens/SectionScreen";

const AppNavigator = createStackNavigator({
  Home: HomeScreen,
  Section: SectionScreen
});

export default createAppContainer(AppNavigator);
