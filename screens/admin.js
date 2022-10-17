import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import Drawer from "../routes/drawer";
import { StyleSheet, Text, View, LogBox } from "react-native";
import {} from "react-native";

LogBox.ignoreLogs(["EventEmitter.removeListener"]);
export default function Admin() {
  return <Drawer />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
