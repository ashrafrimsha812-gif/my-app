import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from "react-native";
import { getAllData } from "../Helper/firebaseHelper";
import { useRouter } from "expo-router";
type EmojiItem = {
  id: string;
  icon: string;
  label: string;
};

export default function EmojiPage() {
  const router = useRouter();
  const [data, setData] = useState<EmojiItem[]>([]);
  const [selectedId, setSelectedId] = useState<string | null>(null); 

  const getDataFromDatabase = async () => {
    try {
      const cData = await getAllData("moodlogging");
      console.log("this is c data", cData);
      setData(cData || []); 
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getDataFromDatabase();
  }, []);

  const renderEmoji = ({ item }: { item: EmojiItem }) => {
    const isSelected = item.id === selectedId; 
    return (
      <TouchableOpacity
        style={[styles.emojiButton, isSelected && styles.selectedBox]} 
        onPress={() => setSelectedId(item.id)} 
      >
        <Text style={styles.emoji}>{item.icon}</Text>
        <Text style={styles.label}>{item.label}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Quick Mood Logging With Emoji</Text>
      <Text style={styles.subtitle}>How are you feeling today?</Text>

      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={renderEmoji}
        numColumns={3}
        contentContainerStyle={styles.emojiGrid}
      />
      <TouchableOpacity style={styles.profileButton} onPress={() => router.push("/user/profile")} > 
        <Text style={styles.profileIcon}>👤</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.skipButton} onPress={() => router.push("/user/information")} >
           <Text style={styles.skipText}>Skip</Text> </TouchableOpacity>
       <TouchableOpacity
        style={styles.nextButton}
       onPress={() => router.push("/user/information")}
      >
        <Text style={styles.nextButtonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#ffe6f0",
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    marginTop: 16,
    textAlign: "center",
    color: "#d64b7f",
  },
  subtitle: {
    fontSize: 19,
    marginTop: 40,
    marginBottom: 20,
    color: "#333",
    textAlign: "center",
  },
  emojiGrid: {
    justifyContent: "center",
  },
  row: {
    justifyContent: "space-between",
  },
  emojiButton: {
    flex: 1,
    margin: 10,
    padding: 15,
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 12,
  },
  emoji: {
    fontSize: 30,
  },
  label: {
    marginTop: 5,
    fontSize: 14,
    color: "#333",
  },
  selectedBox: {
    backgroundColor: "#d64b7d", 
  },
   nextButton: {
    backgroundColor: "#d64b7d",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
  },
  nextButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  profileButton: { position: "absolute", top: 50, left: 20, },
  profileIcon: { fontSize: 22, },
  skipButton: { position: "absolute", top: 50, right: 20, },
  skipText: { fontSize: 16, color: "#555", fontWeight: "600", },
});
