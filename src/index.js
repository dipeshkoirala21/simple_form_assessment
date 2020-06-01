import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import MainScreen from "./screens/main";
import FormScreen from "./screens/form";

const Main = createStackNavigator({
  MainScreen: {
    screen: MainScreen,
    navigationOptions: () => {
      return {
        headerShown: false,
      };
    },
  },
  FormScreen: {
    screen: FormScreen,
    navigationOptions: () => {
      return {
        headerTitle: "Form",
      };
    },
  },
});
export const AppContainer = createAppContainer(Main);
