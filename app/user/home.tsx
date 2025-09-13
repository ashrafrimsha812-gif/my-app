import { View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { useAuth } from '../context/AuthContext'; // 👈 Role ke liye
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect } from "react";
const Home = () => {
  const router = useRouter();
   useEffect(() => {
    const checkDisclaimer = async () => {
      const accepted = await AsyncStorage.getItem("disclaimerAccepted");
      if (!accepted) {
        router.replace("/user/disclaimer"); // user ko disclaimer page pe bhejo
      }
    };
    checkDisclaimer();
  }, []);
  const { setRole } = useAuth(); // 👈 Context se role setter le liya

  const handleRole = (role: "user" | "doctor") => {
    setRole(role); // Role save hoga
    if (role === "user") {
      router.push("/user/login"); // User stack
    } else {
      router.push("/doctor/login"); // Doctor stack
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#fdecee" }}>
      <ImageBackground
        source={require("../../assets/images/pic.jpg")}
        style={{ width: "100%", height: 400, marginBottom: 50 }}
        resizeMode="cover"
      >
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 29,
            marginTop: 80,
            textAlign: 'center',
            color: "#ec407fff",
          }}
        >
          Emotion Tracking
        </Text>
        <Text
          style={{
            fontSize: 18,
            marginTop: 10,
            color: "#ee216cff",
            textAlign: 'center',
          }}
        >
          Welcome to App!
        </Text>

        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 25,
            textAlign: 'center',
            marginTop: 300,
            color: "#ee216cff",
          }}
        >
          Sign In As
        </Text>

        {/* User Button */}
        <TouchableOpacity
          style={{
            width: "35%",
            height: 35,
            backgroundColor: "#d64b7d",
            borderRadius: 15,
            alignItems: 'center',
            justifyContent: 'center',
            marginLeft: "30%",
            marginTop: 20,
          }}
          onPress={() => handleRole("user")}
        >
          <Text
            style={{
              fontSize: 17,
              fontFamily: 'Times New Roman',
              color: 'white',
            }}
          >
            User
          </Text>
        </TouchableOpacity>

        {/* Doctor Button */}
        <TouchableOpacity
          style={{
            width: "35%",
            height: 35,
            backgroundColor: "#d64b7d",
            borderRadius: 15,
            alignItems: 'center',
            justifyContent: 'center',
            marginLeft: "30%",
            marginTop: 18,
          }}
          onPress={() => handleRole("doctor")}
        >
          <Text
            style={{
              fontSize: 17,
              fontFamily: 'Times New Roman',
              color: 'white',
            }}
          >
            Doctor
          </Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

export default Home;
