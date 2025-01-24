import React from "react";
import "react-native-gesture-handler";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Task from "./components/Task";
import { useState } from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Tasks from "./components/Task";

const Stack = createStackNavigator();
const App = () => {
  const [userData, setUserData] = useState(null); // Store registered user data

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Register">
        <Stack.Screen name="Register">
          {(props) => <Register {...props} setUserData={setUserData} />}
        </Stack.Screen>
        <Stack.Screen name="Login">
          {(props) => <Login {...props} userData={userData} />}
        </Stack.Screen>
        <Stack.Screen name="Tasks" component={Tasks}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
