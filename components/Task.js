import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

const Task = ({ task, onDelete, onComplete }) => {
  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <View
          style={[styles.square, task.completed && styles.completedSquare]}
        ></View>
        <View>
          <Text
            style={[styles.itemText, task.completed && styles.completedText]}
          >
            {task.title}
          </Text>
          <Text style={styles.description}>{task.description}</Text>
          <Text style={styles.details}>
            Due: {task.deadline} | Priority: {task.priority}
          </Text>
        </View>
      </View>
      <View style={styles.actions}>
        <TouchableOpacity onPress={onComplete}>
          <Text style={styles.completeText}>
            {task.completed ? "Undo" : "Complete"}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onDelete}>
          <Text style={styles.deleteText}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const Tasks = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [deadline, setDeadline] = useState("");
  const [priority, setPriority] = useState("");
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    if (title && description && deadline && priority) {
      const newTask = {
        title,
        description,
        deadline,
        priority,
        completed: false,
      };
      setTaskItems([...taskItems, newTask]);
      setTitle("");
      setDescription("");
      setDeadline("");
      setPriority("");
    }
  };

  const completeTask = (index) => {
    const updatedTasks = [...taskItems];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTaskItems(updatedTasks);
  };

  const deleteTask = (index) => {
    const updatedTasks = [...taskItems];
    updatedTasks.splice(index, 1);
    setTaskItems(updatedTasks);
  };

  return (
    <View style={styles.container}>
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Tasks</Text>
      </View>

      <FlatList
        data={taskItems}
        renderItem={({ item, index }) => (
          <Task
            task={item}
            onComplete={() => completeTask(index)}
            onDelete={() => deleteTask(index)}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
        style={styles.items}
      />

      <KeyboardAvoidingView
        behavior={Platform.OS === "android" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >
        <TextInput
          style={styles.input}
          placeholder="Title"
          value={title}
          onChangeText={(text) => setTitle(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Description"
          value={description}
          onChangeText={(text) => setDescription(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Deadline (e.g. 2025-01-30)"
          value={deadline}
          onChangeText={(text) => setDeadline(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Priority (High, Medium, Low)"
          value={priority}
          onChangeText={(text) => setPriority(text)}
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
  completedSquare: {
    backgroundColor: "#4CAF50",
  },
  itemText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  completedText: {
    textDecorationLine: "line-through",
    color: "#808080",
  },
  description: {
    fontSize: 14,
    color: "#555",
  },
  details: {
    fontSize: 12,
    color: "#999",
  },
  actions: {
    flexDirection: "row",
    alignItems: "center",
  },
  completeText: {
    marginRight: 10,
    color: "#4CAF50",
  },
  deleteText: {
    color: "#FF0000",
  },
  writeTaskWrapper: {
    position: "absolute",
    bottom: 60,
    width: "100%",
    paddingHorizontal: 15,
  },
  input: {
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#C0C0C0",
  },
  buttonWrapper: {
    backgroundColor: "#4CAF50",
    borderRadius: 50,
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default Tasks;
