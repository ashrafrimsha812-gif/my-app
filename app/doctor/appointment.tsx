import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Alert } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";


type Appointment = {
  id: string;
  patientName: string;
  date: string;
  time: string;
  status: string;
};

const initialAppointments: Appointment[] = [
  {
    id: "1",
    patientName: "Ali Khan",
    date: "Sep 10, 2025",
    time: "10:00 AM",
    status: "Confirmed",
  },
  {
    id: "2",
    patientName: "Sara Ahmed",
    date: "Sep 11, 2025",
    time: "02:30 PM",
    status: "Confirmed",
  },
  {
    id: "3",
    patientName: "Usman Malik",
    date: "Sep 12, 2025",
    time: "11:15 AM",
    status: "Confirmed",
  },
];

export default function Appointments() {
  const router = useRouter();
  const [appointments, setAppointments] = useState(initialAppointments);

 
  const handleCancel = (id: string) => {
    Alert.alert("Cancel Appointment", "Are you sure you want to cancel this appointment?", [
      { text: "No" },
      {
        text: "Yes",
        onPress: () => {
          setAppointments((prev) =>
            prev.map((appt) =>
              appt.id === id ? { ...appt, status: "Cancelled" } : appt
            )
          );
        },
      },
    ]);
  };

  
  const renderAppointment = ({ item }: { item: Appointment }) => (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <Ionicons name="person-circle-outline" size={30} color="#d64b7d" />
        <Text style={styles.patientName}>{item.patientName}</Text>
      </View>
      <Text style={styles.detail}>📅 {item.date}</Text>
      <Text style={styles.detail}>⏰ {item.time}</Text>
      <Text
        style={[
          styles.status,
          {
            color:
              item.status === "Confirmed"
                ? "green"
                : item.status === "Pending"
                ? "orange"
                : "red",
          },
        ]}
      >
        {item.status}
      </Text>

     
      {item.status !== "Cancelled" && (
        <TouchableOpacity
          style={styles.cancelBtn}
          onPress={() => handleCancel(item.id)}
        >
          <Text style={styles.cancelText}>Cancel</Text>
        </TouchableOpacity>
      )}
    </View>
  );

  return (
    <View style={styles.container}>
      
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Upcoming Appointments</Text>
      </View>

     
      <FlatList
        data={appointments}
        renderItem={renderAppointment}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
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
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 10,
    color: "#d64b7d",
  },
  card: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  patientName: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 10,
    color: "#d64b7d",
  },
  detail: {
    fontSize: 14,
    color: "#555",
    marginBottom: 4,
  },
  status: {
    marginTop: 6,
    fontSize: 14,
    fontWeight: "600",
  },
  cancelBtn: {
    marginTop: 10,
    backgroundColor: "#d64b7d",
    paddingVertical: 8,
    borderRadius: 6,
    alignItems: "center",
  },
  cancelText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
