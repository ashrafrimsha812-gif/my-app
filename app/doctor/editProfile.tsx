// app/doctor/editProfile.tsx

import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function EditProfile() {
  const router = useRouter();
  const [name, setName] = useState("Dr. Ali Khan");
  const [specialization, setSpecialization] = useState("Cardiologist");
  const [email, setEmail] = useState("ali.khan@example.com");
  const [phone, setPhone] = useState("+92 300 1234567");
  const [location, setLocation] = useState("Lahore, Pakistan");
  const [experience, setExperience] = useState("10+ years in Cardiology");
  const [about, setAbout] = useState(
    "Dr. Ali Khan is a highly experienced cardiologist with expertise in heart-related diseases and patient care."
  );

  const handleSave = () => {
   
    alert("Profile Updated Successfully!");
    router.push("/doctor/profile" as any);
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#fdecee" }}>
      <ScrollView style={styles.container}>
        <Text style={styles.title}>Edit Profile</Text>

       
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={setName}
          placeholder="Enter full name"
        />

    
        <TextInput
          style={styles.input}
          value={specialization}
          onChangeText={setSpecialization}
          placeholder="Enter specialization"
        />

       
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          placeholder="Enter email"
          keyboardType="email-address"
        />

   
        <TextInput
          style={styles.input}
          value={phone}
          onChangeText={setPhone}
          placeholder="Enter phone number"
          keyboardType="phone-pad"
        />

        
        <TextInput
          style={styles.input}
          value={location}
          onChangeText={setLocation}
          placeholder="Enter location"
        />

        
        <TextInput
          style={styles.input}
          value={experience}
          onChangeText={setExperience}
          placeholder="Enter your experience"
        />

        
        <TextInput
          style={[styles.input, { height: 100, textAlignVertical: "top" }]}
          value={about}
          onChangeText={setAbout}
          placeholder="Write about yourself"
          multiline
        />

       
        <TouchableOpacity style={styles.button} onPress={handleSave}>
          <Ionicons name="save-outline" size={20} color="#fff" />
          <Text style={styles.buttonText}>Save Changes</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    color: "#d64b7d",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
    fontSize: 15,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  button: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#d64b7d",
    padding: 14,
    borderRadius: 25,
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
    marginLeft: 8,
  },
});
