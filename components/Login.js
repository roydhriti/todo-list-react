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
    flex: 1, // Takes full height of the screen
    backgroundColor: "#fff",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  headerContainer: {
    marginBottom: 40,
  },
  headerText: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#2C3E50",
    textAlign: "center",
  },
  inputContainer: {
    marginBottom: 30,
  },
  inputSection: {
    marginBottom: 20,
  },
  inputLabels: {
    fontSize: 16,
    fontWeight: "500",
    color: "#34495E",
    paddingBottom: 8,
  },
  inputText: {
    fontSize: 16,
    backgroundColor: "#ECF0F1",
    borderRadius: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: "#BDC3C7",
    color: "#2C3E50",
  },
  buttonSection: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  buttonContainer: {
    flex: 1, // Buttons take equal space
    backgroundColor: "#4861cf",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginHorizontal: 5,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
});

export default Login;
