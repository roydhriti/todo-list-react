import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";

const Login = ({ navigation, userData }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  //   const submit = () => {
  //     if (email !== "" && password !== "") {
  //       Alert.alert(`Welcome ${name}`);
  //     } else {
  //       Alert.alert(`Your credential is not correct`);
  //     }
  //   };

  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert("Error", "Please fill in all fields");
      return;
    }

    if (
      userData &&
      email === userData.email &&
      password === userData.password
    ) {
      Alert.alert(`'Success', Welcome back, ${userData.name}!`);
      navigation.navigate("Tasks"); // Navigate to Login screen
    } else {
      Alert.alert("Error", "Invalid email or password");
    }
    // Alert.alert(`'Success', Logged in with Email: ${email}`);
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Login Here</Text>
      </View>

      <View style={styles.inputContainer}>
        <View style={styles.inputSection}>
          <Text style={styles.inputLabels}>Email</Text>
          <TextInput
            style={styles.inputText}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="email@gmail.com"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          ></TextInput>
        </View>

        <View style={styles.inputSection}>
          <Text style={styles.inputLabels}>Password</Text>
          <TextInput
            style={styles.inputText}
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry={true}
            value={password}
            onChangeText={setPassword}
          ></TextInput>
        </View>
      </View>

      <View style={styles.buttonSection}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={handleLogin}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Register")}
          >
            <Text style={styles.buttonText}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    padding: 4,
    backgroundColor: "#fff",
    height: "100%",
    width: "100%",
    justifyContent: "center",
    flexDirection: "column",
  },
  headerContainer: {
    textAlign: "left",
    marginHorizontal: 20,
  },
  headerText: {
    fontSize: 40,
    fontWeight: "bold",
  },
  inputContainer: {
    height: "20%",
    justifyContent: "center",
    marginVertical: 10,
  },
  inputSection: {
    marginHorizontal: 20,
  },
  inputLabels: {
    fontSize: 15,
    fontWeight: "500",
    paddingLeft: 8,
    paddingVertical: 5,
  },
  inputText: {
    fontSize: 20,
    backgroundColor: "#c5c6c9",
    borderRadius: 15,
    paddingLeft: 10,
  },

  buttonSection: {
    justifyContent: "space-between",
  },
  buttonContainer: {
    backgroundColor: "#4861cf",
    height: 50,
    // width: "60%",
    // alignItems: "center",
    // justifyContent: "center",
    borderRadius: 10,
    padding: 1,
    // marginHorizontal: 20,
    // marginVertical: 10,
  },
  buttonText: {
    fontSize: 25,
    color: "white",
  },
});

export default Login;
