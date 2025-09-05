import { View, Text } from "react-native";

export default function DoctorAppointments() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>Upcoming Appointments</Text>
      <Text style={{ marginTop: 10 }}>No appointments yet.</Text>
    </View>
  );
}
