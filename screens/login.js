import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import axios from "axios";
import AnimateLoadingButton from "react-native-animate-loading-button";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
  LogBox
} from "react-native";

export default function Login({ navigation }) {
  const [state, setState] = useState({ username: "", password: "" });
  useEffect(() => {
    LogBox.ignoreLogs(["Animated: `useNativeDriver`"]);
  }, []);
  const login = () => {
    axios
      .post(
        "http://10.0.2.2:8999/api/login",
        {
          username: state.username,
          password: state.password
        },
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          }
        }
      )
      .then((res) => {
        loadingButton.showLoading(true);
        if (res.data.data == "Kindly Fill up all the missing fields") {
          setTimeout(() => {
            Alert.alert("LOGIN", "Invalid Credentials", [
              {
                text: "Understood!",
                onPress: () => loadingButton.showLoading(false)
              }
            ]);
          }, 2000);
        } else if (res.data.data == "Invalid Credentials") {
          Alert.alert("LOGIN", "Invalid Credentials", [
            {
              text: "Understood!",
              onPress: () => loadingButton.showLoading(false)
            }
          ]);
        } else {
          loadingButton.showLoading(false);
          navigation.navigate("Admin");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.container}>
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
          placeholder="Password"
          secureTextEntry={true}
          value={state.password}
          onChangeText={(val) => {
            setState((prev) => {
              return { ...prev, password: val };
            });
          }}
        />

        <AnimateLoadingButton
          ref={(c) => (loadingButton = c)}
          width={300}
          height={50}
          title="LOGIN"
          titleFontSize={16}
          titleColor="rgb(255,255,255)"
          backgroundColor="rgb(29,18,121)"
          borderRadius={4}
          onPress={login}
        />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
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
    width: 200
  }
});
