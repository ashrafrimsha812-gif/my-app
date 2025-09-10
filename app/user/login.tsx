import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from "react-native";
import { useRouter } from "expo-router";
import { login, getDataById } from "../Helper/firebaseHelper";

interface UserData {
  id: string;
  role: string;
  email: string;
  name?: string;
}

export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState<UserData | null>(null);
  const router = useRouter();

  const handleLoginPress = async () => {
    try {
      const user = await login(email, password);

    
      const fetchedUser = (await getDataById("users", user.uid)) as UserData | null;

      if (!fetchedUser) {
        alert("User data not found");
        return;
      }

   
      setUserData(fetchedUser);

      if (fetchedUser.role === "doctor") {
        router.replace("/doctor/dashboard" );
      } else {
        router.replace("/(tabs)/emoji" );
      }
    } catch (error: any) {
      alert(error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter email or phone no"
        onChangeText={setEmail}
        value={email}
        placeholderTextColor="#999"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={setPassword}
        value={password}
        secureTextEntry={true}
        placeholderTextColor="#999"
      />

      <TouchableOpacity
        style={styles.forgotBtn}
        onPress={() => router.push("/user/ForgotPassword")}
      >
        <Text style={{ color: "#c94f7c", fontWeight: "600" }}>Forgot Password?</Text>
      </TouchableOpacity>

      <Text style={styles.orText}>──────────  or continue with  ──────────</Text>

      <TouchableOpacity style={styles.googleButton}>
        <Image
          source={require("../../assets/images/google.png")}
          style={{ width: 20, height: 20 }}
        />
        <Text style={styles.googleText}>Login with Google</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.loginButton}
        // 👇 yahan handleLoginPress lagao
        onPress={handleLoginPress}
      >
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>

      <Text style={styles.signupText}>
        Not a member?{" "}
        <Text style={styles.signupNow} onPress={() => router.push("/user/signup")}>
          Signup now
        </Text>
      </Text>

      {/* 👇 ab ye userData properly kaam karega */}
      {userData && <Text>Welcome {userData.name || userData.email}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fdecee",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#c94f7c",
  },
  input: {
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 12,
    marginBottom: 15,
    fontSize: 16,
  },
  forgotBtn: {
    color: "#c94f7c",
    alignSelf: "flex-start",
    marginBottom: 20,
  },
  orText: {
    fontSize: 12,
    color: "#555",
    marginBottom: 20,
  },
  googleButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
    width: "100%",
    justifyContent: "center",
    marginBottom: 20,
  },
  googleText: {
    fontSize: 14,
    color: "#444",
  },
  loginButton: {
    backgroundColor: "#c94f7c",
    width: "100%",
    padding: 14,
    borderRadius: 15,
    alignItems: "center",
    marginBottom: 15,
  },
  loginText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  signupText: {
    color: "#555",
  },
  signupNow: {
    color: "#c94f7c",
    fontWeight: "bold",
  },
});
