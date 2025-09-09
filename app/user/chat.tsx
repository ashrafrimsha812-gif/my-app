
import React, { useState, useRef } from "react";
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
} from "react-native";

type Msg = {
  id: string;
  sender: "doctor" | "me";
  text: string;
};

export default function ChatPage() {
 
  const [messages, setMessages] = useState<Msg[]>([
    { id: "1", sender: "doctor", text: "Chat\nDr. Aleena\nOrthopedic surgaon" },
    { id: "2", sender: "me", text: "Hello Doctor" },
    { id: "3", sender: "doctor", text: "Hi, how can i help you" },
    { id: "4", sender: "me", text: "I have a question about\nmy medicatio." },
  ]);

  const [input, setInput] = useState("");
  const listRef = useRef<FlatList<Msg>>(null);

  const send = () => {
    const text = input.trim();
    if (!text) return;
    const newMsg: Msg = {
      id: Date.now().toString(),
      sender: "me",
      text,
    };
    setMessages((prev) => [...prev, newMsg]);
    setInput("");
   
    requestAnimationFrame(() => {
      listRef.current?.scrollToEnd({ animated: true });
    });
  };

  const renderItem = ({ item }: { item: Msg }) => {
    const isMe = item.sender === "me";
    return (
      <View
        style={[
          styles.bubble,
          isMe ? styles.bubbleMe : styles.bubbleDoctor,
         
          { alignSelf: isMe ? "flex-end" : "flex-start" },
        ]}
      >
        {!isMe && <Text style={styles.sender}>Dr. Aleena</Text>}
        <Text
  style={[
    styles.msgText,
    isMe ? { color: "#fff" } : { color: "#111" }, 
  ]}
>
  {item.text}
</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.safe}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        keyboardVerticalOffset={Platform.OS === "ios" ? 10 : 0}
      >
        <View style={styles.header}>
          <View style={styles.avatar}>
            <Text style={{ color: "#fff", fontWeight: "bold" }}>A</Text>
          </View>
          <View>
            <Text style={styles.title}>Dr. Aleena</Text>
            <Text style={styles.subtitle}>Orthopedic surgaon</Text>
          </View>
        </View>

        <FlatList
          ref={listRef}
          data={messages}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          contentContainerStyle={styles.listPad}
          onContentSizeChange={() => listRef.current?.scrollToEnd({ animated: true })}
          onLayout={() => listRef.current?.scrollToEnd({ animated: true })}
        />

        <View style={styles.inputRow}>
          <TextInput
            value={input}
            onChangeText={(text)=>setInput(text)}
            placeholder="Type a message"
            multiline
            style={styles.input}
          />
          <TouchableOpacity onPress={send} style={styles.sendBtn}>
            <Text style={styles.sendText}>Send</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: "#fdecee" },
  container: { flex: 1 },
  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 19,
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: "#f3dde0ff",
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#d64b7d",
    alignItems: "center",
    justifyContent: "center",
  },
  title: { fontSize: 16, fontWeight: "700", color: "#111" },
  subtitle: { fontSize: 12, color: "#666" },

  listPad: { padding: 12, gap: 8 },

  bubble: {
    maxWidth: "80%",
    paddingHorizontal: 12,
    paddingVertical: 20,
    borderRadius: 12,
    marginVertical: 2,
  },
  bubbleMe: {
    backgroundColor: "#d64b7d",
    borderTopRightRadius: 10,
   
  },
  bubbleDoctor: {
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "#e8e8e8",
    borderTopLeftRadius: 4,
  },
  sender: { fontSize: 10, color: "#666", marginBottom: 2 },
  msgText: { fontSize: 14, color: "#111", lineHeight: 18 },

  inputRow: {
    flexDirection: "row",
    gap: 8,
    padding: 12,
    borderTopWidth: 1,
    borderTopColor: "#eee",
    backgroundColor: "#fff",
    marginBottom:20
  },
  input: {
    flex: 1,
    minHeight: 40,
    maxHeight: 120,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    backgroundColor: "#fff",
    fontSize: 14,
  },
  sendBtn: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 14,
    borderRadius: 10,
    backgroundColor: "#d64b7d",
  },
  sendText: { color: "#fff", fontWeight: "700" },
  
});
