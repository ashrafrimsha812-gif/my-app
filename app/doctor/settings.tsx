// app/doctor/settings.tsx
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Switch,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function DoctorSettings() {
  const router = useRouter();

  // toggle states
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isNotifications, setIsNotifications] = useState(true);

  return (
    <View style={styles.container}>
      <ScrollView style={{ flex: 1 }}>
        <Text style={styles.header}>Settings</Text>

        {/* Account Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Account</Text>

          <TouchableOpacity
            style={styles.item}
            onPress={() => router.push("/doctor/editProfile")}
          >
            <Ionicons name="create-outline" size={20} color="#d64b7d" />
            <Text style={styles.itemText}>Edit Profile</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.item}
            onPress={() => router.push("/doctor/changePassword")}
          >
            <Ionicons name="lock-closed-outline" size={20} color="#d64b7d" />
            <Text style={styles.itemText}>Change Password</Text>
          </TouchableOpacity>
        </View>

        {/* Preferences Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Preferences</Text>

          {/* Dark Mode Toggle */}
          <View style={styles.item}>
            <Ionicons name="moon-outline" size={20} color="#d64b7d" />
            <Text style={styles.itemText}>Dark Mode</Text>
            <Switch
              value={isDarkMode}
              onValueChange={(val) => setIsDarkMode(val)}
              style={{ marginLeft: "auto" }}
              trackColor={{ false: "#ddd", true: "#d64b7d" }}
              thumbColor={isDarkMode ? "#fff" : "#f4f3f4"}
            />
          </View>

          {/* Notifications Toggle */}
          <View style={styles.item}>
            <Ionicons name="notifications-outline" size={20} color="#d64b7d" />
            <Text style={styles.itemText}>Notifications</Text>
            <Switch
              value={isNotifications}
              onValueChange={(val) => setIsNotifications(val)}
              style={{ marginLeft: "auto" }}
              trackColor={{ false: "#ddd", true: "#d64b7d" }}
              thumbColor={isNotifications ? "#fff" : "#f4f3f4"}
            />
          </View>
        </View>

        {/* Logout Section */}
        <View style={styles.section}>
          <TouchableOpacity style={styles.item}>
            <Ionicons name="log-out-outline" size={20} color="#d64b7d" />
            <Text style={styles.itemText}>Logout</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => router.push("/doctor/dashboard" as any)}
        >
          <Ionicons name="home" size={20} color="#d64b7d" />
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navItem}
          onPress={() => router.push("/doctor/patientHistory" as any)}
        >
          <Ionicons name="document-text" size={20} color="#d64b7d" />
          <Text style={styles.navText}>PatientHistory</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navItem}
          onPress={() => router.push("/doctor/profile" as any)}
        >
          <Ionicons name="person-circle" size={20} color="#d64b7d" />
          <Text style={styles.navText}>Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navItem}
          onPress={() => router.push("/doctor/settings" as any)}
        >
          <Ionicons name="settings" size={20} color="#d64b7d" />
          <Text style={styles.navText}>Settings</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fdecee" },
  header: {
    fontSize: 22,
    fontWeight: "700",
    color: "#d64b7d",
    marginBottom: 20,
    textAlign: "center",
    marginTop: 10,
  },
  section: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 12,
    marginBottom: 16,
    marginHorizontal: 16,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 10,
    color: "#d64b7d",
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: "#ddd",
  },
  itemText: { marginLeft: 10, fontSize: 15, color: "#333" },

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
