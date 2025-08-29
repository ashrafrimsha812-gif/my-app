
import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from "react-native";

export default function JournalingScreen() {
  const [thoughts, setThoughts] = useState("");

  return (
    <View style={styles.container}>
     
      <Text style={styles.title}>Journaling</Text>
      <View style={styles.card}>
        <Image
          source={require("../../assets/images/profile.png")} 
          style={styles.profileImage}
        />
        <Text style={styles.name}>Ayesha</Text>
        <Text style={styles.date}>April 24, 2024</Text>
        <View style={styles.thoughtBox}>
          <Text style={styles.label}>Your Thoughts</Text>
          <TextInput
            style={styles.input}
            placeholder="How are you feeling today? Write your thoughts here..."
            value={thoughts}
            onChangeText={setThoughts}
            multiline
          />
          <TouchableOpacity style={styles.saveBtn}>
            <Text style={styles.saveText}>Save</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffe6f0",
    alignItems: "center",
    paddingTop: 40,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#d64b7f",
    marginBottom: 20,
  },
  card: {
    backgroundColor: "white",
    borderRadius: 15,
    padding: 20,
    width: "90%",
    height: "90%",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 10,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  date: {
    fontSize: 14,
    color: "#777",
    marginBottom: 15,
  },
  thoughtBox: {
    backgroundColor: "#fff0f5",
    borderRadius: 12,
    padding: 15,
    width: "100%",
      height: "70%",
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 8,
    color: "#333",
  },
  input: {
    backgroundColor: "white",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    height: 80,
    textAlignVertical: "top",
    marginBottom: 12,
  },
  saveBtn: {
    backgroundColor: "#d64b7f",
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: "center",
    marginTop:150,
  },
  saveText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});
