import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";
import Dashboard from "./dashStack";
import Account from "./editStack";
import Header from "../shared/header";
import React from "react";
const DrawerNavigatorConfig = {
  navigationOptions: {
    headerStyle: {
      backgroundColor: "#f4511e"
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      color: "white"
    }
  },
  contentOptions: {
    // add your styling here
    activeTintColor: "darkblue",
    itemsContainerStyle: {
      marginVertical: 50
    },
    iconContainerStyle: {
      opacity: 1
    }
  }
  //   drawerBackgroundColor: "#262A2C" // sets background color of drawer
};
const RootDrawerNavigator = createDrawerNavigator(
  {
    Dashboard: {
      screen: Dashboard
    },
    Account: {
      screen: Account
    }
  },
  DrawerNavigatorConfig
);

export default createAppContainer(RootDrawerNavigator);
