import React from "react";
import {  Text, TouchableOpacity, ScrollView, ImageBackground } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const Splash = () => {
  const router = useRouter();

  const handleGetStarted = () => {
    // Direct user home pe le jao (role logic hata diya)
    router.replace("/user/home");
  };

  return (
    <ImageBackground
      source={require("../../assets/images/home.png")}
      style={{ flex: 1, width: "100%", height: 400, marginTop: 120 }}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 40,
            marginBottom: 20,
            textAlign: "center",
            color: "#d64b7d",
          }}
        >
          Emotion Tracker
        </Text>

        <TouchableOpacity
          style={{
            backgroundColor: "#d64b7d",
            borderRadius: 10,
            width: "70%",
            height: 50,
            alignSelf: "center",
            marginTop: 430,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={handleGetStarted} // 👈 ab simple navigation
        >
          <Ionicons
            name="chevron-forward"
            size={20}
            color="#fff"
            style={{ marginRight: 10 }}
          />
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 20,
              color: "#fff",
            }}
          >
            GET STARTED
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </ImageBackground>
  );
};

export default Splash;
