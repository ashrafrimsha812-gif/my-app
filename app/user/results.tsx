import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function ResultsPage() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.heading}>Emotion Detection Survey</Text>
        <Text style={styles.subHeading}>Detection Emotions</Text>

        <Text style={styles.text}>Joy: 99.83%</Text>
        <Text style={styles.text}>Sadness: 0.06%</Text>
        <Text style={styles.text}>Love: 0.04%</Text>
        <Text style={styles.text}>Anger: 0.03%</Text>
        <Text style={styles.text}>Surprise: 0.02%</Text>

        <Text style={styles.result}>
          Most Detected Emotion:{" "}
          <Text style={{color:"#c94f7c" , fontWeight: "bold" }}>JOY</Text>
        </Text>

        <Text style={styles.recommend}>
          Recommendation: {"\n"}Keep enjoying the moment and share your happiness!
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push("/user/survey")}
        >
          <Text style={styles.buttonText}>Restart Survey</Text>
        </TouchableOpacity>
      </View>
      
          </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fdecee",
    justifyContent: "space-between",
  },
  content: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },
  heading: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 15,
    color:"#c94f7c"
  },
  subHeading: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 10,
    textAlign: "center",
  },
  text: {
    fontSize: 16,
    marginVertical: 2,
    textAlign: "center",
  },
  result: {
    fontSize: 16,
    marginTop: 15,
    textAlign: "center",
  },
  recommend: {
    fontSize: 16,
    marginTop: 20,
    textAlign: "center",
    fontStyle: "italic",
  },
  button: {
    backgroundColor: "#c94f7c",
    padding: 12,
    borderRadius: 8,
    marginTop: 30,
    alignSelf: "center",
    width: "90%",
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
  
});