import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Task = (props) => {
  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <View style={styles.square}></View>
        <Text style={styles.itemText}>{props.text}</Text>
      </View>

      <View style={styles.circular}>
        <Text style={styles.text}>Del</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  square: {
    height: 24,
    width: 24,
    backgroundColor: "#00f",
    opacity: 0.4,
    borderRadius: 5,
    marginRight: 15,
  },
  itemText: {
    maxWidth: "70%",
  },
  circular: {
    width: 25,
    height: 25,
    borderColor: "#558CF6",
    borderWidth: 2,
    borderRadius: 5,
    justifyContent: "center",
    alignContent: "center",
  },
  text: {
    fontSize: 10,
    color: "#FF0000",
    marginLeft: 2,
  },
});

export default Task;
