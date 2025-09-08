import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function PostDetails() {
  const router = useRouter();

  
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [reason, setReason] = useState("");
  const [history, setHistory] = useState("");

  const handleSave = () => {
    if (!name.trim() || !date.trim() || !reason.trim() || !history.trim()) {
      Alert.alert("Error", "Please fill all fields before saving.");
      return;
    }

   
    Alert.alert("Success", "Patient details saved successfully!", [
      {
        text: "OK",
        onPress: () => router.push("/doctor/patientHistory"),
      },
    ]);

   
    setName("");
    setDate("");
    setReason("");
    setHistory("");
  };

  return (
    <View style={styles.container}>
     
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Post Patient Details</Text>
      </View>

      <TextInput
        style={styles.input}
        placeholder="Patient Name"
        placeholderTextColor="#999"
        value={name}
        onChangeText={setName}
      />

      <TextInput
        style={styles.input}
        placeholder="Date (e.g. Sep 07, 2025)"
        placeholderTextColor="#999"
        value={date}
        onChangeText={setDate}
      />

      <TextInput
        style={styles.input}
        placeholder="Reason for Visit"
        placeholderTextColor="#999"
        value={reason}
        onChangeText={setReason}
      />

      <TextInput
        style={[styles.input, { height: 120 }]}
        placeholder="Write patient history here..."
        placeholderTextColor="#999"
        multiline
        value={history}
        onChangeText={setHistory}
      />

     
      <TouchableOpacity style={styles.saveBtn} onPress={handleSave}>
        <Ionicons name="save-outline" size={20} color="#fff" />
        <Text style={styles.saveBtnText}>Save</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fdecee", padding: 16 },
  header: { flexDirection: "row", alignItems: "center", marginBottom: 20 },
  headerText: { fontSize: 20, fontWeight: "bold", marginLeft: 10, color: "#d64b7d" },
  input: {
    backgroundColor: "#fff",
    padding: 14,
    borderRadius: 12,
    fontSize: 16,
    marginBottom: 12,
  },
  saveBtn: {
    flexDirection: "row",
    backgroundColor: "#d64b7d",
    padding: 14,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  saveBtnText: { color: "#fff", fontWeight: "bold", fontSize: 16, marginLeft: 6 },
});
