import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Switch, ScrollView } from "react-native";
import { useRouter } from "expo-router";

export default function SettingsScreen() {
  const router = useRouter();
  const [darkMode, setDarkMode] = useState(false);
  const [pushEnabled, setPushEnabled] = useState(true);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Settings</Text>
      <Text style={styles.username}>Haider</Text>

      <Text style={styles.sectionTitle}>Account Settings</Text>

      <TouchableOpacity
        style={styles.option}
        onPress={() => router.push("/edit profile")}
      >
        <Text style={styles.optionText}>Edit Profile</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.option}
        onPress={() => router.push("/change password")}
      >
        <Text style={styles.optionText}>Change Password</Text>
      </TouchableOpacity>

      
      <View style={styles.optionRow}>
        <Text style={styles.optionText}>Push Notifications</Text>
        <Switch value={pushEnabled} onValueChange={setPushEnabled}
        trackColor={{ false: "#ccc", true: "#d64b7d" }}
        thumbColor={pushEnabled ? "#d81b60" : "#f4f3f4"} 
        />
      </View>

     
      <View style={styles.optionRow}>
        <Text style={styles.optionText}>Dark Mode</Text>
        <Switch value={darkMode} onValueChange={setDarkMode}
         trackColor={{ false: "#ccc", true: "#d64b7d" }}
        thumbColor={darkMode  ? "#d81b60" : "#f4f3f4"} 
        />
      </View>

   
      <Text style={styles.sectionTitle}>More</Text>

      <TouchableOpacity
        style={styles.option}
        onPress={() => router.push("/about us")}
      >
        <Text style={styles.optionText}>About Us</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.option}
        onPress={() => router.push("/Privacy Policy")}
      >
        <Text style={styles.optionText}>Privacy Policy</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#fdecee",
  },
  header: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#d64b7d",
  },
  username: {
    fontSize: 18,
    marginBottom: 20,
    color: "#d64b7d",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginTop: 20,
    marginBottom: 10,
    color: "#d64b7d",
  },
  option: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  optionText: {
    fontSize: 16,
    color: "#333",
  },
  optionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
});
