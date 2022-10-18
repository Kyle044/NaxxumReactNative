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

export default function EditAdmin() {
  return (
    <View>
      <Ionicons name="md-person-circle-outline" size={250} color="blue" />
      <View style={styles.btnGrp}>
        <TouchableOpacity>
          <Text>Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Social</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Links</Text>
        </TouchableOpacity>
      </View>
      <Button title="Top Badges" />
      <TextInput placeholder="Username" />
      <TextInput placeholder="Full Name" />
      <TextInput placeholder="Email" />
      <TextInput placeholder="Contact Number" />
      <TextInput placeholder="Password" />
      <TextInput placeholder="Confirm Password" />
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
