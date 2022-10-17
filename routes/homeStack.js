import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Login from "../screens/login";
import Admin from "../screens/admin";
import Header from "../shared/header";
import React from "react";
const screens = {
  Login: {
    screen: Login
  },
  Admin: {
    screen: Admin,
    navigationOptions: ({ navigation }) => {
      return {
        headerLeft: () => null,
        headerShown: false
      };
    }
  }
};

const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: "#444",
    headerStyle: {
      backgroundColor: "#eee",
      height: 70
    }
  }
});
export default createAppContainer(HomeStack);
