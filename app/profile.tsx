import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { router } from "expo-router";

export default function ProfilePage() {
  return (
    <View style={styles.container}>
          <Text style={styles.title}>Profile</Text>
      <Image
        source={require("../assets/images/profile.png")}
        style={styles.profileImage}
      />
     
      <Text style={styles.name}>Rimsha Ashraf</Text>
      <Text style={styles.email}>Username</Text>

     
      <TouchableOpacity style={styles.button}
       onPress={() => router.push("/edit profile")}
      >
        <Text style={styles.buttonText}>Edit Profile</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}
       onPress={() => router.push("/settings")}
      >
        <Text style={styles.buttonText}>Settings</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}
       onPress={() => router.push("/Privacy Policy")}
      >
        <Text style={styles.buttonText}>Privacy Policy</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fdecee", 
    alignItems: "center",
    justifyContent: "center",
    paddingBottom:50
   
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 10,
    color: "#d64b7d",
    textAlign: "center",
   marginBottom:30
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
    borderWidth: 3,
    borderColor: "#E75480", 
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 5,
  },
  email: {
    fontSize: 16,
    color: "#555",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#d64b7d", 
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 25,
    marginVertical: 8,
    width: "70%",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
