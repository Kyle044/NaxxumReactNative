import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Navigator from "./routes/homeStack";
import React, { useState, useEffect } from "react";
export default function App() {
  return <Navigator />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
