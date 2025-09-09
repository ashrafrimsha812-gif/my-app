import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useRouter } from "expo-router";

export default function Information() {
  const router = useRouter();
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
   const[name, setName]= useState("");
   const[nationality, setNationality]= useState("");
    const[education, setEducation]= useState("");
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Emotion Detection Survey</Text>
      <TextInput placeholder="Enter your name" style={styles.input}
       onChangeText={(text)=>setName(text)}
       value={name}
      />
      <Text style={styles.label}>Gender:</Text>
      <View style={styles.optionRow}>
        <TouchableOpacity
          style={[styles.optionBox, gender === "Male" && styles.selectedBox]}
          onPress={() => setGender("Male")}
        >
          <Text style={styles.optionText}>Male</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.optionBox, gender === "Female" && styles.selectedBox]}
          onPress={() => setGender("Female")}
        >
          <Text style={styles.optionText}>Female</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.label}>Age:</Text>
      <View style={styles.optionRow}>
        {["13-17", "18-22", "23-27"].map((range) => (
          <TouchableOpacity
            key={range}
            style={[styles.optionBox, age === range && styles.selectedBox]}
            onPress={() => setAge(range)}
          >
            <Text style={styles.optionText}>{range}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <TextInput placeholder="Nationality" style={styles.input} 
      onChangeText={(text)=>setNationality(text)}
      value={nationality}
      />
      <TextInput placeholder="Education" style={styles.input}
      onChangeText={(text)=>setEducation(text)}
      value={education}
      />
      <View style={styles.startWrapper}>
        <TouchableOpacity
          style={styles.startButton}
          onPress={() => router.push("/user/survey")}
        >
          <Text style={styles.startText}>Start Survey</Text>
        </TouchableOpacity>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fdecee", padding: 20 },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#d64b7d",
    textAlign: "center",
    marginBottom: 20,
  },
  label: { fontSize: 16, fontWeight: "bold", color: "#333", marginTop: 15 },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    marginVertical: 8,
    backgroundColor: "#fff",
  },
  optionRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
  },
  optionBox: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
    marginBottom:20,
  },
  selectedBox: { backgroundColor: "#d64b7d", borderColor: "#fff" },
  optionText: { color: "#333", fontWeight: "bold" },
  startWrapper: {
    position: "absolute",
    bottom: 100,
    left: 0,
    right: 0,
    alignItems: "center",
  },
  startButton: {
    backgroundColor: "#d64b7d",
    paddingVertical: 12,
    paddingHorizontal: 100,
    borderRadius: 20,
    marginBottom: 30,
  },
  startText: { color: "#fff", fontWeight: "bold", fontSize: 16 },

});
