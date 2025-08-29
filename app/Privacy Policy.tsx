

import React from "react";
import { Text, StyleSheet, ScrollView } from "react-native";

export default function Privacy() {
  return (
    <ScrollView style={styles.container}>
     
        <Text style={styles.title}>Privacy</Text>

        <Text style={styles.text}>
          This Privacy Policy describes how we collect, use, and share your
          personal information when you use our app. We collect information you provide when you register for an account,
          such as your name, email address, and other contact details.We also collect information about how you use the app, including your
          interactions, preferences and use data.We use this inforamation to improve or services,personalized your experience,and communicate with you.
          We may share your information with third-party service providers who help us operate the app.
           We are committed to protecting your privacy and ensuring the security
          of your data.
        </Text>

      
      
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fde0e0", // 
    padding: 20,
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#d64b7d", 
    marginBottom: 15,
    textAlign: "center",
  },
  text: {
    fontSize: 20,
    color: "#000",
    marginBottom: 15,
    lineHeight: 22,
  },
});
