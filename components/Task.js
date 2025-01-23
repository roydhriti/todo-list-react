import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

const Task = ({ text, onDelete }) => {
  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <View style={styles.square}></View>
        <Text style={styles.itemText}>{text}</Text>
      </View>
      <TouchableOpacity style={styles.circular} onPress={onDelete}>
        <Text style={styles.text}>Del</Text>
      </TouchableOpacity>
    </View>
  );
};

const Tasks = () => {
  const [task, setTask] = useState("");
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    if (task) {
      setTaskItems([...taskItems, task]);
      setTask("");
      Keyboard.dismiss();
    }
  };

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  };

  return (
    <View style={styles.container}>
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Today's Tasks</Text>
      </View>

      <View style={styles.items}>
        {taskItems.map((item, index) => {
          return (
            <Task
              key={index}
              text={item}
              onDelete={() => completeTask(index)}
            />
          );
        })}
      </View>

      {/* Write a task */}
      <KeyboardAvoidingView
        behavior={Platform.OS === "android" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >
        <TextInput
          style={styles.input}
          placeholder="Write your task"
          value={task}
          onChangeText={(text) => setTask(text)}
        />

        <TouchableOpacity onPress={handleAddTask}>
          <View style={styles.buttonWrapper}>
            <Text style={styles.buttonText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3f3f3",
  },
  tasksWrapper: {
    paddingTop: 60,
    paddingHorizontal: 15,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  items: {
    marginTop: 30,
  },
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
  writeTaskWrapper: {
    position: "absolute",
    bottom: 60,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: "#fff",
    borderRadius: 60,
    borderColor: "#C0C0C0",
    borderWidth: 1,
    width: 250,
  },
  buttonWrapper: {
    width: 60,
    height: 60,
    backgroundColor: "#fff",
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#C0C0C0",
    borderWidth: 1,
  },
  buttonText: {
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default Tasks;
