import { View, Text } from "react-native";

export default function DoctorProfile() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>Doctor Profile</Text>
      <Text style={{ marginTop: 10 }}>Name: Dr. Example</Text>
      <Text>Specialization: General Physician</Text>
    </View>
  );
}
