// app/doctor/messages.tsx

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

// Patient message type
type Message = {
  id: string;
  patientName: string;
  lastMessage: string;
  profilePic: string;
};

// Dummy messages
const messagesData: Message[] = [
  {
    id: "1",
    patientName: "Ali Khan",
    lastMessage: "Doctor, I have a headache since morning...",
    profilePic: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: "2",
    patientName: "Sara Ahmed",
    lastMessage: "When should I come for my checkup?",
    profilePic: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: "3",
    patientName: "Usman Malik",
    lastMessage: "Thank you for your advice!",
    profilePic: "https://randomuser.me/api/portraits/men/50.jpg",
  },
  {
    id: "4",
    patientName: "Hamza Malik",
    lastMessage: "Thank you for your best treatment and suggestions!",
    profilePic: "https://randomuser.me/api/portraits/men/50.jpg",
  },
    {
    id: "5",
    patientName: "Ayesha Khan",
    lastMessage: "your treatment and medician works like megic...",
    profilePic: "https://randomuser.me/api/portraits/men/32.jpg",
  },
];

export default function Messages() {
  const router = useRouter();
  const [messages, setMessages] = useState(messagesData);

  // Render ek patient message
  const renderMessage = ({ item }: { item: Message }) => (
    <TouchableOpacity
      style={styles.card}
     onPress={() =>
     router.push({
    pathname: "/doctor/chat/[id]",
    params: { id: item.id },
  })
}
 // Patient ki chat pe le jayega
    >
      <Image source={{ uri: item.profilePic }} style={styles.avatar} />
      <View style={{ flex: 1 }}>
        <Text style={styles.patientName}>{item.patientName}</Text>
        <Text style={styles.lastMessage} numberOfLines={1}>
          {item.lastMessage}
        </Text>
      </View>
      <Ionicons name="chevron-forward" size={22} color="#d64b7d" />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerText}>New Messages</Text>
      </View>

      {/* Messages List */}
      <FlatList
        data={messages}
        renderItem={renderMessage}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 20 }}
         ItemSeparatorComponent={() => <View style={{ height: 15 }} />}
      />
    </View>
  );
}

// 🎨 Styles
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
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 12,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 12,
  },
  patientName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#d64b7d",
  },
  lastMessage: {
    fontSize: 14,
    color: "#555",
    marginTop: 2,
  },
});
                                                         