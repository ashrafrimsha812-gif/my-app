import React, { useState } from "react";
import { View, Text, Switch, StyleSheet, ScrollView, TouchableOpacity, Image } from "react-native";
import { useRouter } from "expo-router";

export default function SettingsScreen() {
  const [darkMode, setDarkMode] = useState(false);
  const [pushEnabled, setPushEnabled] = useState(true);
  const router = useRouter();

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>Settings</Text>
      
     <View style={styles.userRow}>
        <Image
          source={require("../../assets/images/profile.png")} 
          style={styles.profileImage}
        />
        <Text style={styles.username}>Haider</Text>
      </View>

      <Text style={styles.sectionTitle}>Account Settings</Text>

      <TouchableOpacity onPress={() => router.push("/profile")}>
        <View style={styles.item}>
          <Text style={styles.itemText}>Edit Profile</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push("/change password")}>
        <View style={styles.item}>
          <Text style={styles.itemText}>Change Password</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.itemRow}>
        <Text style={styles.itemText}>Push Notifications</Text>
        <Switch
          value={pushEnabled}
          onValueChange={setPushEnabled}
          trackColor={{ false: "#ccc", true: "#d64b7f" }}
          thumbColor={pushEnabled ? "#d64b7f" : "#f4f3f4"}
        />
      </View>
      <View style={styles.itemRow}>
        <Text style={styles.itemText}>Dark Mode</Text>
        <Switch
          value={darkMode}
          onValueChange={setDarkMode}
          trackColor={{ false: "#ccc", true: "#d64b7f" }}
          thumbColor={darkMode ? "#d64b7f" : "#f4f3f4"}
        />
      </View>

      <Text style={styles.sectionTitle}>More</Text>

      <TouchableOpacity onPress={() => router.push("/about us")}>
        <View style={styles.item}>
          <Text style={styles.itemText}>About Us</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push("/Privacy Policy")}>
        <View style={styles.item}>
          <Text style={styles.itemText}>Privacy Policy</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity >
        <View style={styles.item}>
          <Text style={styles.itemText}>Logout</Text>
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffe6eb", 
    padding: 20,
  },
  heading: {
    marginTop: 40,
    fontSize: 30,
    fontWeight: "bold",
    color: "#d64b7f",
    marginBottom: 20,
  },
  userRow: {
    flexDirection: "row", 
    alignItems: "center",
    marginBottom: 0,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25, 
    marginRight: 15,
  },
  username: {
    fontSize: 20,
    color: "#d64b7f",
    marginBottom: 20,
    marginTop:30,
  },
  sectionTitle: {
    fontSize: 18,
    color: "#d64b7f",
    marginTop: 10,
    marginBottom: 20,
    fontWeight: "600",
  },
  item: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    marginBottom:10
  },
  itemRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  itemText: {
    fontSize: 16,
    color: "#000",
  },
});
