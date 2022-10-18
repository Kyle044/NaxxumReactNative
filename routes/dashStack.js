import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import Dashboard from "../screens/dashboard";
import Header from "../shared/header";
import AdminUser from "../screens/singleadmin";
import React from "react";
const screens = {
  Dashboard: {
    screen: Dashboard,

    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => (
          <Header navigation={navigation} title="Add Contacts" />
        ),
        headerLeft: () => null
      };
    }
  },
  AdminSettings: {
    screen: AdminUser
  }
};

const dashStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: "#444",
    headerStyle: {
      backgroundColor: "#eee",
      height: 70
    }
  }
});
export default createAppContainer(dashStack);
