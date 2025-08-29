import React from "react";
import { View, Text, FlatList, StyleSheet, ListRenderItem } from "react-native";
type HistoryItem = {
  id: string;
  date: string;
  time: string;
  mood: string;
};
const historyData: HistoryItem[] = [
  { id: "1", date: "Aug 28, 2025", time: "10:30 AM", mood: "😊 Happy" },
  { id: "2", date: "Aug 27, 2025", time: "09:15 PM", mood: "😔 Sad" },
  { id: "3", date: "Aug 26, 2025", time: "01:45 PM", mood: "😡 Angry" },
  { id: "4", date: "Aug 25, 2025", time: "07:20 AM", mood: "😌 Relaxed" },
  { id: "5", date: "Aug 24, 2025", time: "05:50 PM", mood: "🤩 Excited" },
];

export default function HistoryScreen() {
  const renderItem: ListRenderItem<HistoryItem> = ({ item }) => (
    <View style={styles.row}>
      <Text style={styles.date}>{item.date}</Text>
      <Text style={styles.time}>{item.time}</Text>
      <Text style={styles.mood}>{item.mood}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>History</Text>
      <FlatList
        data={historyData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fdecee",
    padding: 20,
  },
  heading: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#d64b7f",
    marginBottom: 20,
    marginTop:40,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 19,
    marginBottom: 10,
    backgroundColor: "#f3aec9ff",
    borderRadius: 10,
  },
  date: {
    fontSize: 16,
    color: "#333",
    flex: 1,
  },
  time: {
    fontSize: 16,
    color: "#555",
    flex: 1,
    textAlign: "center",
  },
  mood: {
    fontSize: 18,
    flex: 1,
    textAlign: "right",
  },
});
