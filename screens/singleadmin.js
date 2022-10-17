import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import axios from "axios";
import AnimateLoadingButton from "react-native-animate-loading-button";
import { StyleSheet, Text, View, TextInput, Alert } from "react-native";

export default function SingleAdmin({ navigation }) {
  const [state, setState] = useState({
    id: navigation.getParam("id"),
    username: navigation.getParam("username"),
    full_name: navigation.getParam("full_name"),
    email: navigation.getParam("email"),
    contact_number: navigation.getParam("contact_number"),
    password: "",
    confirm: ""
  });

  const updateUser = () => {};
  const deleteUser = () => {
    Alert.alert("Warning", "Are you sure you want to delete this?", [
      {
        text: "Yes",
        onPress: () => {
          axios
            .post("http://192.168.31.60:8089/api/deleteAdmin", { id: state.id })
            .then((res) => {
              if (res.data.data == 1) {
                Alert.alert("Success", "Sucessfully Deleted", [
                  {
                    text: "Understood!",
                    onPress: () => console.log("done deleting")
                  }
                ]);

                navigation.goBack(null);
              } else {
              }
            })
            .catch((err) => {
              console.log(err);
            });
        }
      },
      {
        text: "No",
        onPress: () => {
          console.log("do nothing");
        }
      }
    ]);
  };

  return (
    <View style={styles.master}>
      <View style={styles.view}>
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={state.username}
        />
        <TextInput
          style={styles.input}
          placeholder="Full Name"
          value={state.full_name}
        />
      </View>
      <View style={styles.view}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={state.email}
        />
        <TextInput
          style={styles.input}
          placeholder="Contact"
          value={state.contact_number}
        />
      </View>
      <View style={styles.view}>
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={state.password}
        />
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          value={state.confirm}
        />
      </View>
      <View style={styles.btn}>
        <AnimateLoadingButton
          ref={(c) => (loadingButton = c)}
          width={150}
          height={50}
          title="Update"
          titleFontSize={16}
          titleColor="rgb(255,255,255)"
          backgroundColor="green"
          borderRadius={4}
        />
        <AnimateLoadingButton
          ref={(c) => (loadingButton = c)}
          width={150}
          height={50}
          title="Delete"
          titleFontSize={16}
          titleColor="rgb(255,255,255)"
          backgroundColor="red"
          borderRadius={4}
          marginHorizontal={30}
          onPress={() => {
            deleteUser();
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  master: {
    marginVertical: 70
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  input: {
    borderWidth: 1,
    borderColor: "#777",
    padding: 8,
    margin: 10,
    width: 170
  },
  view: {
    flexDirection: "row",
    justifyContent: "center"
  },
  btn: {
    marginVertical: 40,
    flexDirection: "row",
    justifyContent: "space-around"
  }
});
