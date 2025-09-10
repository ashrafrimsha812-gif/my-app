import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { handleSignUp } from "../Helper/firebaseHelper";

export default function SignupScreen() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
const handleSignupPress = async () => {
    try {
      await handleSignUp(email, password, { role: "doctor" }); // ✅ role fix "doctor"
      alert("Signup successful!");
      router.replace("/doctor/dashboard");
    } catch (error:any) {
      alert(error.message);
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Signup</Text>

      <TextInput
        style={styles.input}
        placeholder="Email Address or Phone No"
        placeholderTextColor="#999"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#999"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        placeholderTextColor="#999"
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />
     <TouchableOpacity
  style={styles.button}
  onPress={handleSignupPress}  // 👈 direct function call
>
  <Text style={styles.buttonText}>Signup</Text>
</TouchableOpacity>

      <TouchableOpacity onPress={() => router.push("/doctor/login")}>
        <Text style={styles.linkText}>Already have an account? Login</Text>
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
    fontSize: 30,
    color: "#c94f7c",
    marginBottom: 40,
    fontWeight: "bold",
  },
  input: {
    width: "100%",
    backgroundColor: "#fff",
    padding: 15,
    marginBottom: 20,
    borderRadius: 10,
    color: "#000",
  },
  button: {
    backgroundColor: "#c94f7c",
    padding: 15,
    borderRadius: 10,
    width: "100%",
    alignItems: "center",
    marginBottom: 20,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
  },
  linkText: {
    color: "#c94f7c",
    marginTop: 10,
    fontSize: 16,
  },
});