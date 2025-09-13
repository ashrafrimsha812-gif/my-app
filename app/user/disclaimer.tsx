import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import { useRouter, useLocalSearchParams } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Disclaimer() {
  const router = useRouter();
  const { next } = useLocalSearchParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkDisclaimer = async () => {
      const accepted = await AsyncStorage.getItem("disclaimerAccepted");
      if (accepted === "true") {
        // Agar user ne pehle hi accept kiya tha to sidha login ya signup pe bhej do
        if (next === "signup") {
          router.replace("/user/signup");
        } else {
          router.replace("/user/login");
        }
      } else {
        setLoading(false); // Disclaimer show karna ha
      }
    };
    checkDisclaimer();
  }, []);

  const handleAccept = async () => {
    await AsyncStorage.setItem("disclaimerAccepted", "true");
    if (next === "signup") {
      router.replace("/user/signup");
    } else {
      router.replace("/user/login");
    }
  };

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#c94f7c" />
      </View>
    );
  }

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
        For any serious emotional or mental health concerns, please seek advice from a qualified professional.
      </Text>

      <TouchableOpacity
        onPress={handleAccept}
        style={{
          backgroundColor: "#c94f7c",
          paddingVertical: 12,
          paddingHorizontal: 25,
          borderRadius: 8,
        }}
      >
        <Text style={{ fontSize: 16, fontWeight: "bold", color: "#fff" }}>
          I Accept
        </Text>
      </TouchableOpacity>
    </View>
  );
}
