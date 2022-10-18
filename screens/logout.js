import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity
} from "react-native";

export default function Logout() {
  return (
    <View style={styles.container}>
      <Text>Proceed Sign-out?</Text>
      <View style={styles.btnGrp}>
        <Button title="Yes" />
        <Button title="Cancel" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  btnGrp: {
    flexDirection: "row"
  }
});
