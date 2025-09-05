import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function Survey() {
  const router = useRouter();
  const [feeling, setFeeling] = useState("");
  const [stress, setStress] = useState("");
  const [happy, setHappy] = useState("");

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        <Text style={styles.title}>Emotion Detection Survey</Text>

        <Text style={styles.question}>How are you feeling today?</Text>
        {["Very Good", "Good", "Okay", "Bad"].map((option) => (
          <TouchableOpacity
            key={option}
            style={[
              styles.option,
              feeling === option && { backgroundColor: "#c94f7c" },
            ]}
            onPress={() => setFeeling(option)}
          >
            <Text
              style={[
                styles.optionText,
                feeling === option && { color: "#fff" },
              ]}
            >
              {option}
            </Text>
          </TouchableOpacity>
        ))}

        <Text style={styles.question}>How stressed are you?</Text>
        {["Very much", "Somewhat", "Not much", "Not at all"].map((option) => (
          <TouchableOpacity
            key={option}
            style={[
              styles.option,
              stress === option && { backgroundColor: "#c94f7c" },
            ]}
            onPress={() => setStress(option)}
          >
            <Text
              style={[
                styles.optionText,
                stress === option && { color: "#fff" },
              ]}
            >
              {option}
            </Text>
          </TouchableOpacity>
        ))}

        <Text style={styles.question}>Do you feel happy now?</Text>
        {["Yes", "No"].map((option) => (
          <TouchableOpacity
            key={option}
            style={[
              styles.option,
              happy === option && { backgroundColor: "#c94f7c" },
            ]}
            onPress={() => setHappy(option)}
          >
            <Text
              style={[
                styles.optionText,
                happy === option && { color: "#fff" },
              ]}
            >
              {option}
            </Text>
          </TouchableOpacity>
        ))}
       <TouchableOpacity
  style={styles.button}
  onPress={() => router.push("/results")}
>
  <Text style={styles.buttonText}>Submit</Text>
</TouchableOpacity>

      </ScrollView>
      
           </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fdecee",
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#c94f7c",
    marginBottom: 20,
    textAlign: "center",
  },
  question: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 15,
    marginBottom: 10,
    color: "#333",
  },
  option: {
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 8,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  optionText: {
    fontSize: 16,
    color: "#333",
  },
  submitBtn: {
    backgroundColor: "#c94f7c",
    paddingVertical: 14,
    borderRadius: 8,
    marginTop: 25,
    alignItems: "center",
  },
  button: {
    backgroundColor: "#c94f7c", 
    padding: 12,
    borderRadius: 8,
    marginTop: 20,
    alignSelf: "center",
    width: "90%",
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
   
});