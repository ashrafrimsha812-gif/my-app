
import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

const DARK_PINK = "#d64b7d";
const LIGHT_PINK = "#ffe6f0";

export default function AboutUs() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <Text style={styles.header}>About Us</Text>
        <Text style={styles.subtitle}>Empowering your emotional well-being</Text>

        <Text style={styles.body}>
          Our app is designed to help you track, understand, and improve your emotional health. 
          We believe that every individual deserves tools to better manage their feelings, 
          gain insights, and find support when needed.
        </Text>

        <Text style={styles.sectionTitle}>✨ What We Do</Text>
        <Text style={styles.body}>
          - Track emotions through simple daily check-ins and surveys. {"\n"}
          - Provide personalized recommendations to improve mood. {"\n"}
          - Offer insights and trends to help you understand your emotional journey. {"\n"}
          - Connect with doctors through secure chat for guidance and support.
        </Text>

        <Text style={styles.sectionTitle}>🌱 Our Mission</Text>
        <Text style={styles.body}>
          Our mission is to make emotional wellness accessible and supportive for everyone. 
          We aim to provide a safe and engaging platform that helps people improve their 
          mental health step by step.
        </Text>

        <Text style={styles.sectionTitle}>🤝 Connect With Us</Text>
        <Text style={styles.body}>
           We are here to listen and support you on your journey.  
           Stay connected for updates, guidance, and encouragement. {"\n"}

        </Text>

        <Text style={styles.footer}>
          Together, let’s build a healthier and happier tomorrow. 💖
        </Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: LIGHT_PINK },
  scroll: { padding: 16, paddingBottom: 32 },
  header: {
    fontSize: 26,
    fontWeight: "800",
    color: DARK_PINK,
    marginBottom: 6
  },
  subtitle: {
    fontSize: 14,
    color: DARK_PINK,
    opacity: 0.9,
    marginBottom: 16
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: DARK_PINK,
    marginTop: 14,
    marginBottom: 4
  },
  body: {
    fontSize: 14,
    lineHeight: 20,
    color: "#333"
  },
  footer: {
    textAlign: "center",
    fontSize: 13,
    fontWeight: "500",
    color: DARK_PINK,
    marginBottom: 30,
  }
});
