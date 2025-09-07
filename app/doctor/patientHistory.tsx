import React from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

type PatientHistoryItem = {
  id: string;
  patientName: string;
  reason: string;
  date: string;
  notes: string;
};

const historyData: PatientHistoryItem[] = [
  {
    id: "1",
    patientName: "Ali Khan",
    reason: "General Checkup",
    date: "Sep 10, 2025",
    notes: "No issues, advised regular exercise.",
  },
  {
    id: "2",
    patientName: "Sara Ahmed",
    reason: "Flu & Fever",
    date: "Sep 11, 2025",
    notes: "Prescribed medication and rest for 5 days.",
  },
  {
    id: "3",
    patientName: "Usman Malik",
    reason: "Back Pain",
    date: "Sep 12, 2025",
    notes: "Recommended physiotherapy sessions.",
  },
];

export default function PatientHistory() {
  const router = useRouter();

  const renderHistoryItem = ({ item }: { item: PatientHistoryItem }) => (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <Ionicons name="person-circle-outline" size={30} color="#d64b7d" />
        <Text style={styles.patientName}>{item.patientName}</Text>
      </View>
      <Text style={styles.detail}>📌 Reason: {item.reason}</Text>
      <Text style={styles.detail}>📅 Date: {item.date}</Text>
      <Text style={styles.detail}>📝 Notes: {item.notes}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
     
      <ScrollView style={{ flex: 1 }}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={24} color="#333" />
          </TouchableOpacity>
          <Text style={styles.headerText}>Patient History</Text>
        </View>

        <FlatList
          data={historyData}
          renderItem={renderHistoryItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ paddingBottom: 120 }} 
        />
      </ScrollView>

     
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem} onPress={() => router.push("/doctor/dashboard" as any)}>
          <Ionicons name="home" size={20} color="#d64b7d" />
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem} onPress={() => router.push("/doctor/patientHistory" as any)}>
          <Ionicons name="document-text" size={20} color="#d64b7d" />
          <Text style={styles.navText}>PatientHistory</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem} onPress={() => router.push("/doctor/profile" as any)}>
          <Ionicons name="person-circle" size={20} color="#d64b7d" />
          <Text style={styles.navText}>Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem} onPress={() => router.push("/doctor/settings" as any)}>
          <Ionicons name="settings" size={20} color="#d64b7d" />
          <Text style={styles.navText}>Settings</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fdecee" },
  header: { flexDirection: "row", alignItems: "center", margin: 16, marginBottom: 10 },
  headerText: { fontSize: 20, fontWeight: "bold", marginLeft: 10, color: "#d64b7d" },
  card: {
    backgroundColor: "#fff",
    padding: 19,
    borderRadius: 12,
    marginHorizontal: 16,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardHeader: { flexDirection: "row", alignItems: "center", marginBottom: 8 },
  patientName: { fontSize: 18, fontWeight: "bold", marginLeft: 10, color: "#d64b7d" },
  detail: { fontSize: 14, color: "#555", marginBottom: 4 },
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
