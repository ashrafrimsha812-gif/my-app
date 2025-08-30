
import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
} from "react-native";

export default function BookAppointment() {
  const [fullName, setFullName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [reason, setReason] = useState("");

  const confirmAppointment = () => {
    alert("Appointment Confirmed!");
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <Text style={styles.header}>Book Appointment</Text>

      
        <View style={styles.doctorCard}>
          <Image
           source={require("../assets/images/profile.png")}
          style={styles.profileImage}
          />
          <View>
            <Text style={styles.docName}>Dr. Emily Davis</Text>
            <Text style={styles.docSpecial}>Dermatologist</Text>
          </View>
        </View>

     
        <TextInput
          style={styles.input}
          placeholder="Full Name"
          value={fullName}
          onChangeText={(text)=>setFullName(text)}
        />

        <View style={styles.row}>
          <TextInput
            style={[styles.input, styles.half]}
            placeholder="Age"
            value={age}
            onChangeText={(text)=>setAge(text)}
          />
          <TextInput
            style={[styles.input, styles.half]}
            placeholder="Gender"
            value={gender}
            onChangeText={(text)=>setGender(text)}
          />
        </View>

        <TextInput
          style={styles.input}
          placeholder="Contact Number"
          keyboardType="phone-pad"
          value={contact}
          onChangeText={(text)=>setContact(text)}
        />

        <TextInput
          style={styles.input}
          placeholder="Email"
          keyboardType="email-address"
          value={email}
          onChangeText={(e)=>setEmail(e)}
        />

        <View style={styles.row}>
          <TextInput
            style={[styles.input, styles.half]}
            placeholder="Appointment Date"
            value={date}
            onChangeText={(text)=>setDate(text)}
          />
          <TextInput
            style={[styles.input, styles.half]}
            placeholder="Appointment Time"
            value={time}
            onChangeText={(text)=>setTime(text)}
          />
        </View>

        <TextInput
          style={styles.input}
          placeholder="Reason for Visit"
          value={reason}
          onChangeText={(text)=>setReason(text)}
        />

        {/* Button */}
        <TouchableOpacity
          style={styles.button}
          onPress={confirmAppointment}
        >
          <Text style={styles.btnText}>Confirm Appointment</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fdeef1" },
  scroll: { padding: 20 },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#d6336c",
    textAlign: "center",
    marginBottom: 20,
  },
  doctorCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    elevation: 2,
  },
  profileImage: { width: 60, height: 60, borderRadius: 30, marginRight: 15,color:"#999" },
  docName: { fontSize: 16, fontWeight: "bold", color: "#111" },
  docSpecial: { fontSize: 14, color: "#666" },
  input: {
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#ddd",
    fontSize: 14,
  },
  row: { flexDirection: "row", justifyContent: "space-between" },
  half: { flex: 1, marginRight: 8 },
  button: {
    backgroundColor: "#d6336c",
    padding: 14,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },
  btnText: { color: "#fff", fontWeight: "bold", fontSize: 15 },
});
