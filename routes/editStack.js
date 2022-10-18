import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Edit from "../screens/editadmin";
import Header from "../shared/header";
import React from "react";
const screens = {
  Edit: {
    screen: Edit,

    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header navigation={navigation} title="Profile" />,
        headerLeft: () => null
      };
    }
  }
};

const editStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: "#444",
    headerStyle: {
      backgroundColor: "#eee",
      height: 70
    }
  }
});
export default createAppContainer(editStack);
