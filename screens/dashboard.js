import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { withNavigationFocus } from "react-navigation";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity
} from "react-native";

import Card from "../shared/card";
export default withNavigationFocus(function Admin({ navigation }) {
  const [admins, setAdmins] = useState();

  useEffect(() => {
    if (navigation.isFocused()) {
      axios
        .get("http://192.168.31.60:8089/api/getAdmin")
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
    marginVertical: 50,
    marginHorizontal: 30
  }
});
