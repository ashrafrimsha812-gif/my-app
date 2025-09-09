import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

const Password = () => {
  const router = useRouter();

  return (
    <View style={{ height: "100%", width: "100%", backgroundColor: "#fdecee",alignContent:"center" }}>
      <Text style={{ fontSize: 22, fontWeight: "700", color: "#d64b7d", marginTop: 20, marginStart: 20,alignContent:"center",justifyContent:"center" }}>
        Forgot password
      </Text>
      <Text style={{ color: "#000000ff", marginTop: 10, marginStart: 15 }}>
        Enter your registered email to reset your password.
      </Text>

      <TextInput
        placeholder="Enter your email"
        placeholderTextColor="#999"
        style={{
          backgroundColor: "#F4F4F4",
          borderRadius: 10,
          width: "80%",
          height: 40,
          justifyContent: "center",
          alignSelf: "center",
          marginTop: 20,
          borderColor: "#d1d5db",
          borderWidth: 1,
        }}
      />

      <TouchableOpacity
        style={{
          backgroundColor:"#d64b7d",
          width: "80%",
          height: 45,
          borderRadius: 12,
          justifyContent: "center",
          alignItems: "center",
          alignSelf: "center",
          marginTop: 40,
        }}
      >
        <Text style={{ color: "#fff", fontWeight: "700" }}>Send reset link</Text>
      </TouchableOpacity>

      {/* Back to Login button */}
      <TouchableOpacity style={{ marginTop: 20 }} onPress={() => router.replace("/user/login")}>
        <Text style={{ color: "#0f0f0fff", textAlign: "center" }}>Back to Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Password;
