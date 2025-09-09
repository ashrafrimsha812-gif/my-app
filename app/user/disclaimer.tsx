import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useRouter, useLocalSearchParams } from "expo-router";

export default function Disclaimer() {
  const router = useRouter();
  const { next } = useLocalSearchParams();

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fdecee",
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
      }}
    >
      <Text
        style={{
          fontSize: 24,
          fontWeight: "bold",
          marginBottom: 20,
          color: "#c94f7c",
        }}
      >
        Disclaimer:
      </Text>

      <Text
        style={{
          fontSize: 18,
          textAlign: "center",
          marginBottom: 30,
          color: "#333",
        }}
      >
        This app helps you understand your emotions but it is not a medical tool.{"\n\n"}
        For any serious emotional or mental health concerns,
        please seek advice from a qualified professional.
      </Text>

      <TouchableOpacity
        onPress={() => {
          if (next === "login") {
            router.push("/user/login");
          } else if (next === "signup") {
            router.push("/user/signup");
          } else {
            router.push("/user/login"); 
          }
        }}
        style={{
          backgroundColor: "#c94f7c",
          paddingVertical: 12,
          paddingHorizontal: 25,
          borderRadius: 8,
        }}
      >
        <Text style={{ fontSize: 16, fontWeight: "bold", color: "#fff" }}>
          "I Accept"
        </Text>
      </TouchableOpacity>
    </View>
  );
}
