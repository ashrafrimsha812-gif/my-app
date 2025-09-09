import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

type Doctor = {
  id: string;
  name: string;
  specialty: string;
  experience: string;
  profilePic?: string; 
};

type Appointment = {
  id: string;
  doctorId: string;
  date: string;
  time: string;
};

const doctors: Doctor[] = [
  { id: "1", name: "Dr. Sarah Ahmed", specialty: "Psychologist", experience: "5 Years", profilePic: "https://i.pravatar.cc/100?img=1" },
  { id: "2", name: "Dr. Ali Khan", specialty: "Therapist", experience: "8 Years", profilePic: "https://i.pravatar.cc/100?img=2" },
  { id: "3", name: "Dr. Ayesha Malik", specialty: "Counselor", experience: "3 Years", profilePic: "https://i.pravatar.cc/100?img=3" },
  { id: "4", name: "Dr. Hareem Fatima", specialty: "Psychiatrist", experience: "10 Years", profilePic: "https://i.pravatar.cc/100?img=4" },
];

export default function DoctorsScreen() {
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const router = useRouter();

  const renderDoctor = (doctor: Doctor) => {
    const { id, name, specialty, experience, profilePic } = doctor;

    const handleAppointment = () => {
     
      router.push(`/user/appointments?doctorId=${id}`);
    };

    const handleChat = () => {
     
      router.push(`/user/chat?doctorId=${id}&doctorName=${encodeURIComponent(name)}`);
    };

    return (
      <View style={styles.card}>
        <View style={styles.info}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            {profilePic && (
              <Image
                source={{ uri: profilePic }}
                style={{ width: 40, height: 40, borderRadius: 20, marginRight: 10 }}
              />
            )}
            <Text style={styles.name}>{name}</Text>
          </View>
          <Text style={styles.specialty}>{specialty}</Text>
          <Text style={styles.experience}>{experience} Experience</Text>
        </View>

        <View style={styles.actions}>
          <TouchableOpacity style={styles.appointmentBtn} onPress={handleAppointment}>
            <Text style={styles.btnText}>Make Appointment</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.chatIcon} onPress={handleChat}>
            <Ionicons name="chatbubbles" size={22} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Doctors</Text>

      <FlatList
        data={doctors}
        keyExtractor={(doctor) => doctor.id}
        renderItem={({ item }) => renderDoctor(item)}
        contentContainerStyle={{ paddingBottom: 20 }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffe6eb",
    padding: 15,
  },
  heading: {
    fontSize: 35,
    fontWeight: "bold",
    marginBottom: 15,
    color: "#d64b7f",
    marginTop: 50,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  info: {
    marginBottom: 12,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#222",
  },
  specialty: {
    fontSize: 15,
    color: "#666",
  },
  experience: {
    fontSize: 14,
    color: "#999",
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  appointmentBtn: {
    backgroundColor: "#d64b7f",
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 8,
  },
  btnText: {
    color: "#fff",
    fontWeight: "bold",
  },
  chatIcon: {
    backgroundColor: "#d64b7f",
    padding: 8,
    borderRadius: 50,
  },
});
