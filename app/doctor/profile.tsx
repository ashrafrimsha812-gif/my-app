
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
export default function DoctorProfile() {
  const router = useRouter();
const [experience] = useState("10+ years in Cardiology, Worked at City Hospital");
const [about] = useState("Dr. Ali Khan is a highly experienced cardiologist with expertise in heart-related diseases and patient care.");

  return (
    <View style={{ flex: 1, backgroundColor: "#fdecee" }}>
      <ScrollView style={styles.container}>
        
        <View style={styles.header}>
          <Image
            source={require("../../assets/images/profile.png")}
            style={styles.profileImage}
          />
          <Text style={styles.name}>Dr. Ali Khan</Text>
          <Text style={styles.specialization}>Psychologist</Text>
        </View>

       
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Contact Information</Text>

          <View style={styles.row}>
            <Ionicons name="mail-outline" size={20} color="#d64b7d" />
            <Text style={styles.infoText}>ali.khan@example.com</Text>
          </View>

          <View style={styles.row}>
            <Ionicons name="call-outline" size={20} color="#d64b7d" />
            <Text style={styles.infoText}>+92 300 1234567</Text>
          </View>

          <View style={styles.row}>
            <Ionicons name="location-outline" size={20} color="#d64b7d" />
            <Text style={styles.infoText}>Lahore, Pakistan</Text>
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Experience</Text>
          <Text style={styles.infoText}>{experience}</Text>
          <Text style={styles.infoText}>Worked at City Hospital</Text>
        </View>

      
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>About</Text>
            
          <Text style={styles.infoText}>
               {about}
          </Text>
        </View>

      
       <TouchableOpacity 
  style={styles.button} 
  onPress={() => router.push("/doctor/editProfile")}
>
  <Ionicons name="create-outline" size={20} color="#fff" />
  <Text style={styles.buttonText}>Edit Profile</Text>
</TouchableOpacity>

      </ScrollView>

     
      <View style={styles.bottomNav}>
        <TouchableOpacity onPress={() => router.push("/doctor/dashboard" as any)}>
          <Ionicons name="home" size={20} color="#d64b7d" />
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>

        
        <TouchableOpacity onPress={() => router.push("/doctor/patientHistory" as any)}>
          <Ionicons name="document-text" size={20} color="#d64b7d" />
          <Text style={styles.navText}>patientHistory</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push("/doctor/profile" as any)}>
          <Ionicons name="person-circle" size={20} color="#d64b7d" />
          <Text style={styles.navText}>Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push("/doctor/settings" as any)}>
          <Ionicons name="settings" size={20} color="#d64b7d" />
          <Text style={styles.navText}>Settings</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fdecee",
    padding: 16,
  },
  header: {
    alignItems: "center",
    marginBottom: 20,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 10,
  },
  name: {
    fontSize: 22,
    fontWeight: "700",
    color: "#d64b7d",
  },
  specialization: {
    fontSize: 16,
    color: "#555",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 8,
    color: "#d64b7d",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 4,
  },
  infoText: {
    marginLeft: 8,
    fontSize: 15,
    color: "#444",
  },
  button: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#d64b7d",
    padding: 12,
    borderRadius: 25,
    marginBottom: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
    marginLeft: 8,
  },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "flex-start",
    height: 80,
    borderTopWidth: 1,
    borderColor: "#ddd",
    backgroundColor: "#fff",
    paddingTop: 3,
  },
  navItem: { alignItems: "center", justifyContent: "center" },
  navText: { fontSize: 10, color: "#d64b7d", marginTop: 0 },
});
