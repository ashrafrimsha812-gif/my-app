import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function DoctorDashboard() {
  const router = useRouter();

  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={styles.container}>
        <Text style={styles.title}>Doctor Dashboard</Text>

       
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Upcoming Appointments</Text>
            <TouchableOpacity onPress={() => router.push("/doctor/appointment")}>
              <Text style={styles.link}>View All</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.card}>
            <Ionicons name="calendar-outline" size={24} color="#d64b7d" />
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>Ali Khan</Text>
              <Text style={styles.cardSubtitle}>Today at 3:00 PM</Text>
            </View>
          </View>
          <View style={styles.card}>
            <Ionicons name="calendar-outline" size={24} color="#d64b7d" />
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>Sara Ahmed</Text>
              <Text style={styles.cardSubtitle}>Tomorrow at 11:00 AM</Text>
            </View>
          </View>
        </View>

      
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Pending Requests</Text>
            <TouchableOpacity onPress={() => router.push("/doctor/requests")}>
              <Text style={styles.link}>Manage</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.card}>
            <Ionicons name="time-outline" size={24} color="orange" />
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>New Appointment Request</Text>
              <Text style={styles.cardSubtitle}>From Hamza</Text>
            </View>
          </View>
        </View>

      
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>New Messages</Text>
            <TouchableOpacity onPress={() => router.push("/doctor/messages")}>
              <Text style={styles.link}>Open</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.card}>
            <Ionicons name="chatbubble-ellipses-outline" size={24} color="#4a90e2" />
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>Message from Ahmad</Text>
              <Text style={styles.cardSubtitle}>“Doctor, I need help with...”</Text>
            </View>
          </View>
        </View>
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
  container: { flex: 1, backgroundColor: "#fdecee", padding: 16 },
  title: { fontSize: 22, fontWeight: "700", textAlign: "center", marginVertical: 12, color:"#d64b7d" },
  section: { backgroundColor: "#fff", padding: 16, borderRadius: 16, marginVertical: 10, elevation: 3 },
  sectionHeader: { flexDirection: "row", justifyContent: "space-between", marginBottom: 8 },
  sectionTitle: { fontSize: 18, fontWeight: "600", color: "#d64b7d" },
  link: { color: "#d64b7d", fontWeight: "600" },
  card: { flexDirection: "row", alignItems: "center", padding: 12, backgroundColor: "#f9f9f9", borderRadius: 12, marginTop: 8 },
  cardContent: { marginLeft: 12 },
  cardTitle: { fontSize: 16, fontWeight: "600" },
  cardSubtitle: { fontSize: 14, color: "#666" },
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
