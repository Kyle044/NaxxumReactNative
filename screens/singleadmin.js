import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import axios from "axios";
import AnimateLoadingButton from "react-native-animate-loading-button";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Alert,
  Keyboard,
  TouchableWithoutFeedback,
  KeyboardAvoidingView
} from "react-native";

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

  const updateUser = () => {
    if (
      state.confirm &&
      state.contact_number &&
      state.email &&
      state.full_name &&
      state.id &&
      state.password &&
      state.username
    ) {
      if (state.confirm != state.password) {
        Alert.alert("Warning", "The Password Does not Match", [
          {
            text: "Understood",
            onPress: () => {}
          }
        ]);
      } else {
        Alert.alert("Warning", "Are you sure you want to update the user?", [
          {
            text: "Yes",
            onPress: () => {
              axios
                .post("http://10.0.2.2:8999/api/updateAdmin", state)
                .then((res) => {
                  if (res.data.data == "Sucessfully Updated") {
                    Alert.alert("Success", "Sucessfully Updated", [
                      {
                        text: "Understood!",
                        onPress: () => console.log("Done Updating")
                      }
                    ]);
                    navigation.goBack(null);
                  } else {
                  }
                })
                .catch((err) => {
                  console.log(err);
                  console.log(state);
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
      }
    } else {
      Alert.alert("Warning", "Fill up the missing fields", [
        {
          text: "Understood",
          onPress: () => {
            console.log(state);
          }
        }
      ]);
    }
  };
  const deleteUser = () => {
    Alert.alert("Warning", "Are you sure you want to delete this?", [
      {
        text: "Yes",
        onPress: () => {
          axios
            .post("http://10.0.2.2:8999/api/deleteAdmin", { id: state.id })
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
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <KeyboardAvoidingView behavior="position">
        <View style={styles.master}>
          <View style={styles.view}>
            <TextInput
              style={styles.input}
              placeholder="Username"
              value={state.username}
              onChangeText={(val) => {
                setState((prev) => {
                  return { ...prev, username: val };
                });
              }}
            />
            <TextInput
              style={styles.input}
              placeholder="Full Name"
              value={state.full_name}
              onChangeText={(val) => {
                setState((prev) => {
                  return { ...prev, full_name: val };
                });
              }}
            />
          </View>
          <View style={styles.view}>
            <TextInput
              style={styles.input}
              placeholder="Email"
              value={state.email}
              onChangeText={(val) => {
                setState((prev) => {
                  return { ...prev, email: val };
                });
              }}
            />
            <TextInput
              style={styles.input}
              placeholder="Contact"
              value={state.contact_number}
              onChangeText={(val) => {
                setState((prev) => {
                  return { ...prev, contact_number: val };
                });
              }}
            />
          </View>
          <View style={styles.view}>
            <TextInput
              style={styles.input}
              secureTextEntry={true}
              placeholder="Password"
              value={state.password}
              onChangeText={(val) => {
                setState((prev) => {
                  return { ...prev, password: val };
                });
              }}
            />
            <TextInput
              style={styles.input}
              secureTextEntry={true}
              placeholder="Confirm Password"
              value={state.confirm}
              onChangeText={(val) => {
                setState((prev) => {
                  return { ...prev, confirm: val };
                });
              }}
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
              onPress={() => {
                updateUser();
              }}
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
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  master: {
    marginVertical: 30
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
