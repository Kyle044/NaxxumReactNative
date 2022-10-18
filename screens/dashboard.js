import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { withNavigationFocus } from "react-navigation";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  TextInput,
  Button
} from "react-native";

import Card from "../shared/card";
export default withNavigationFocus(function Admin({ navigation }) {
  const [admins, setAdmins] = useState();

  useEffect(() => {
    if (navigation.isFocused()) {
      axios
        .get("http://10.0.2.2:8999/api/getAdmin")
        .then((res) => {
          setAdmins(res.data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [navigation.isFocused()]);

  return (
    <View style={styles.master}>
      <View style={styles.btnGrp}>
        <View style={styles.verticalAlign}>
          <MaterialIcons
            name="add-to-photos"
            size={60}
            color="white"
            style={styles.circle}
          />
          <Text>New</Text>
        </View>
        <View style={styles.verticalAlign}>
          <AntDesign
            name="contacts"
            size={60}
            color="white"
            style={styles.circle}
          />
          <Text>Phone Book</Text>
        </View>
        <View style={styles.verticalAlign}>
          <FontAwesome
            name="envelope-o"
            size={60}
            color="white"
            style={styles.circle}
          />
          <Text>Email</Text>
        </View>
      </View>
      <View
        style={{
          borderBottomColor: "black",
          borderBottomWidth: StyleSheet.hairlineWidth
        }}
      />
      <TextInput style={styles.input} placeholder="Search Contact" />
      <Button title="Search" />
      {admins ? (
        <FlatList
          keyExtractor={(item) => item.id}
          data={admins}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => navigation.navigate("AdminSettings", item)}
            >
              <Card>
                <Text style={styles.text}>{item.full_name}</Text>
              </Card>
            </TouchableOpacity>
          )}
        />
      ) : (
        <Text style={styles.container}>Fetching Data...</Text>
      )}
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 20,
    height: "100%",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    fontFamily: "serif",
    fontWeight: "bold",
    fontSize: 16
  },
  master: {
    marginVertical: 20,
    marginHorizontal: 30
  },
  btnGrp: {
    marginVertical: 20,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center"
  },
  circle: {
    backgroundColor: "darkblue",
    borderRadius: 70,
    padding: 15
  },
  verticalAlign: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  input: {
    borderWidth: 1,
    borderColor: "#777",
    padding: 8,
    marginVertical: 10,
    width: "100%",
    borderRadius: 4
  }
});
