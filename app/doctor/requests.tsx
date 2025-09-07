import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";


type Request = {
  id: string;
  patientName: string;
  reason: string;
  date: string;
  time: string;
  status: "Pending" | "Approved" | "Cancelled";
};


const initialRequests: Request[] = [
  {
    id: "1",
    patientName: "Ali Khan",
    reason: "General Checkup",
    date: "Sep 15, 2025",
    time: "09:30 AM",
    status: "Pending",
  },
  {
    id: "2",
    patientName: "Sara Ahmed",
    reason: "Headache",
    date: "Sep 16, 2025",
    time: "01:00 PM",
    status: "Pending",
  },
  {
    id: "3",
    patientName: "Usman Malik",
    reason: "Depression & Brain pain",
    date: "Sep 17, 2025",
    time: "11:15 AM",
    status: "Pending",
  },
];

export default function PendingRequests() {
  const router = useRouter();
  const [requests, setRequests] = useState(initialRequests);

 
  const handleApprove = (id: string) => {
    setRequests((prev) =>
      prev.map((req) =>
        req.id === id ? { ...req, status: "Approved" } : req
      )
    );
  };

  
const handleCancel = (id: string) => {
  Alert.alert("Cancel Request", "Are you sure you want to cancel?", [
    { text: "No", style: "cancel" },
    {
      text: "Yes",
      style: "destructive",
      onPress: () => {
        console.log("Cancelling request with id:", id); 
        setRequests((prev) =>
          prev.map((req) =>
            req.id === id ? { ...req, status: "Cancelled" } : req
          )
        );
        Alert.alert("Cancelled", "Request cancelled successfully!");
      },
    },
  ]);
};



 
  const renderRequest = ({ item }: { item: Request }) => (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <Ionicons name="person-circle-outline" size={30} color="#d64b7d" />
        <Text style={styles.patientName}>{item.patientName}</Text>
      </View>
      <Text style={styles.detail}>📌 {item.reason}</Text>
      <Text style={styles.detail}>📅 {item.date}</Text>
      <Text style={styles.detail}>⏰ {item.time}</Text>

      <Text
        style={[
          styles.status,
          {
            color:
              item.status === "Approved"
                ? "green"
                : item.status === "Cancelled"
                ? "red"
                : "orange",
          },
        ]}
      >
        {item.status}
      </Text>

    
      {item.status === "Pending" && (
        <View style={styles.btnRow}>
          <TouchableOpacity
            style={[styles.btn, { backgroundColor: "#d64b7d" }]}
            onPress={() => handleApprove(item.id)}
          >
            <Text style={styles.btnText}>Approve</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.btn, { backgroundColor: "#f58080ff" }]}
            onPress={() => handleCancel(item.id)}
          >
            <Text style={styles.btnText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );

  return (
    <View style={styles.container}>
    
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Pending Requests</Text>
      </View>

     
      <FlatList
        data={requests}
        renderItem={renderRequest}
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
  btnRow: {
    flexDirection: "row",
    marginTop: 10,
    justifyContent: "space-between",
  },
  btn: {
    flex: 1,
    paddingVertical: 8,
    marginHorizontal: 5,
    borderRadius: 6,
    alignItems: "center",
  },
  btnText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
