import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TextInput,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";

// Message type
type ChatMessage = {
  id: string;
  sender: "doctor" | "patient";
  text: string;
};

// Dummy profile data (sirf demo ke liye)
const patientProfiles: Record<string, { name: string; profilePic: string }> = {
  "1": { name: "Ali Khan", profilePic: "https://randomuser.me/api/portraits/men/32.jpg" },
  "2": { name: "Sara Ahmed", profilePic: "https://randomuser.me/api/portraits/women/44.jpg" },
  "3": { name: "Usman Malik", profilePic: "https://randomuser.me/api/portraits/men/50.jpg" },
   "4": { name: "Hamza Malik", profilePic: "https://randomuser.me/api/portraits/men/50.jpg" },
   "5": { name: "Ayesha Khan", profilePic: "https://randomuser.me/api/portraits/men/50.jpg" },
};

export default function ChatScreen() {
  const router = useRouter();
  const { id } = useLocalSearchParams<{ id: string }>();

  // Patient info find from dummy list
  const patient = patientProfiles[id] || {
    name: "Unknown",
    profilePic: "https://via.placeholder.com/150",
  };

  // Dummy messages state
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: "1", sender: "patient", text: "Hello doctor 👋" },
    { id: "2", sender: "doctor", text: "Hi, how can I help you?" },
    { id: "3", sender: "patient", text: "I have a headache since morning." },
  ]);

  const [newMessage, setNewMessage] = useState("");

  // Send message
  const handleSend = () => {
    if (newMessage.trim() === "") return;
    const newMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: "doctor",
      text: newMessage,
    };
    setMessages((prev) => [...prev, newMsg]);
    setNewMessage("");
  };

  // Render ek message
  const renderMessage = ({ item }: { item: ChatMessage }) => (
    <View
      style={[
        styles.message,
        item.sender === "doctor" ? styles.doctorMessage : styles.patientMessage,
      ]}
    >
      {item.sender === "patient" && (
        <Image source={{ uri: patient.profilePic }} style={styles.avatarSmall} />
      )}
      <Text style={styles.messageText}>{item.text}</Text>
    </View>
  );

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>
        <Image source={{ uri: patient.profilePic }} style={styles.avatar} />
        <Text style={styles.headerText}>{patient.name}</Text>
      </View>

      {/* Messages */}
      <FlatList
        data={messages}
        renderItem={renderMessage}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ padding: 16 }}
      />

      {/* Input box */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type your message..."
          value={newMessage}
          onChangeText={setNewMessage}
        />
        <TouchableOpacity style={styles.sendBtn} onPress={handleSend}>
          <Ionicons name="send" size={22} color="#fff" />
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

// 🎨 Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fdecee",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    backgroundColor: "#fff",
    elevation: 3,
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 10,
    color: "#d64b7d",
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginLeft: 10,
  },
  avatarSmall: {
    width: 28,
    height: 28,
    borderRadius: 14,
    marginRight: 6,
  },
  message: {
    flexDirection: "row",
    padding: 10,
    borderRadius: 10,
    marginBottom: 8,
    maxWidth: "90%",
  },
  doctorMessage: {
    alignSelf: "flex-end",
    backgroundColor: "#d64b7d",
  },
  patientMessage: {
    alignSelf: "flex-start",
    backgroundColor: "#fff",
  },
  messageText: {
    color: "#333",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#fff",
    borderTopWidth: 20,
    borderColor: "#fff",
  },
  input: {
    flex: 1,
    padding: 10,
    borderRadius: 20,
    backgroundColor: "#f1f1f1",
    marginRight: 10,
    marginBottom:30
  },
  sendBtn: {
    backgroundColor: "#d64b7d",
    padding: 10,
    borderRadius: 20,
     marginBottom:30
  },
});
