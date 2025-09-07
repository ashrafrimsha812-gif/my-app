import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native";

export default function ChangePassword() {
  const [password, setPassword] = useState("");

  const validatePassword = (pwd: string) => {
    const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[#@,$]).{8,20}$/;
    return regex.test(pwd);
  };

  const handleContinue = () => {
    if (!validatePassword(password)) {
      Alert.alert(
        "Invalid Password",
        "Password must be 8-20 characters with at least 1 letter, 1 number, and 1 special character (#,@,$)"
      );
      return;
    }
    Alert.alert("Success", "Password changed successfully!");
   
  };

  const RuleLine = ({ text }: { text: string }) => (
    <View style={styles.ruleLine}>
      <View style={styles.radio} />
      <Text style={styles.ruleText}>{text}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Change Password</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <RuleLine text="8 characters (max 20)" />
      <RuleLine text="1 letter, 1 number, 1 special character (#,@,$)" />
      <RuleLine text="Strong password" />

      <TouchableOpacity style={styles.button} onPress={handleContinue}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fdecee",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#c94f7c",
    marginBottom: 110,
  },
  input: {
    width: "100%",
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    fontSize: 16,
    marginBottom: 20,
  },
  ruleLine: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
    width: "100%",
  },
  radio: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "grey",
    marginRight: 8,
  },
  ruleText: {
    fontSize: 14,
    color: "#555",
  },
  button: {
    backgroundColor: "#c94f7c",
    width: "100%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 150,
    
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});
