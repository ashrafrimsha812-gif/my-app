import { View, Text } from "react-native";

export default function DoctorMessages() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>New Messages</Text>
      <Text style={{ marginTop: 10 }}>No new messages.</Text>
    </View>
  );
}
