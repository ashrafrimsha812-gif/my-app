import React, { useState, useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  TextInput,
} from "react-native";
import { useRouter } from "expo-router";


export default function EmojiPage() {
  const router = useRouter();
  const [selected, setSelected] = useState<string | null>(null);
  const [customEmoji, setCustomEmoji] = useState("");
  const inputRef = useRef<TextInput>(null); 
 

  const emojis = [
    { id: "1", emoji: "😔", label: "Sad" },
    { id: "2", emoji: "😁", label: "Happy" },
    { id: "3", emoji: "🥰", label: "Lovely" },
    { id: "4", emoji: "😡", label: "Angry" },
    { id: "5", emoji: "😊", label: "Calm" },
    { id: "6", emoji: "😭", label: "Crying" },
    { id: "7", emoji: "😜", label: "Joyful" },
    { id: "8", emoji: "😫", label: "Tired" },
    { id: "9", emoji: "😇", label: "Grateful" },
    { id: "10", emoji: "😵‍💫", label: "Strange" },
    { id: "11", emoji: "🤮", label: "Awful" },
    { id: "add", emoji: "➕", label: "Add Emoji" },
  ];

  const renderItem = ({
    item,
  }: {
    item: { id: string; emoji: string; label: string };
  }) => (
    <TouchableOpacity
      style={[
        styles.emojiBox,
        selected === item.id && item.id !== "add" ? styles.selectedBox : null,
      ]}
      onPress={() => {
        if (item.id === "add") {
          inputRef.current?.focus(); 
        } else {
          setSelected(item.id);
        }
      }}
    >
      <Text style={styles.emoji}>
        {item.id === "add" ? item.emoji : item.emoji}
      </Text>
      <Text style={styles.label}>
        {item.id === "add" && customEmoji ? customEmoji : item.label}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
     


      <TouchableOpacity
        style={styles.profileButton}
        onPress={() => router.push("/user/profile")}
      >
        <Text style={styles.profileIcon}>👤</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.skipButton}
        onPress={() => router.push("/user/information")}
      >
        <Text style={styles.skipText}>Skip</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Quick Mood Logging With Emoji</Text>
     

      <Text style={styles.subtitle}>How are you feeling right now?</Text>
      <FlatList
        data={emojis}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={3}
        contentContainerStyle={styles.grid}
      />
      <TextInput
        ref={inputRef}
        style={{ height: 0, width: 0 }}
        value={customEmoji}
        onChangeText={(txt) => setCustomEmoji(txt)}
        keyboardType="default"
      />
      <View style={styles.nextButtonWrapper}>
        <TouchableOpacity
          style={styles.nextButton}
          onPress={() => router.push("/user/information")}
        >
          <Text style={styles.nextButtonText}>Next</Text>
        </TouchableOpacity>
       
      </View>
      
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fdecee",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    marginTop: 70,
    color: "#d64b7d",
    textAlign: "center",
    
  },
  subtitle: {
    fontSize: 12,
    marginTop: 40,
    marginBottom: 15,
    color: "#333",
    textAlign: "center",
  },
  grid: {
    alignItems: "center",
    paddingBottom: 150,
  },
  emojiBox: {
    backgroundColor: "white",
    borderRadius: 15,
    padding: 18,
    margin: 8,
    alignItems: "center",
    width: 90,
    height: 90,
    justifyContent: "center",
    elevation: 3,
  },
  selectedBox: {
    backgroundColor: "#d64b7d",
  },
  emoji: {
    fontSize: 28,
  },
  label: {
    marginTop: 6,
    fontSize: 14,
    color: "#444",
    textAlign: "center",
  },
  nextButtonWrapper: {
    position: "absolute",
    bottom: 20,
    left: 0,
    right: 0,
    alignItems: "center",
  },
  nextButton: {
    backgroundColor: "#d64b7d",
    paddingVertical: 12,
    paddingHorizontal: 100,
    borderRadius: 20,
    marginBottom:10,
  },
  nextButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  skipButton: {
    position: "absolute",
    top: 50,
    right: 20,
   
  },
  skipText: {
    fontSize: 16,
    color: "#555",
    fontWeight: "600",
  },
  profileButton: {
    position: "absolute",
    top: 50,
    left: 20,
  },
  profileIcon: {
    fontSize: 22,
  },

});
