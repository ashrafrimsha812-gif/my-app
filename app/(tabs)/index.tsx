import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { useRouter } from "expo-router";

export default function Home() {
  const router = useRouter();

  return (
    <View style={[styles.container, { backgroundColor: "#fdecee" }]}>
      <Image
        source={require("../../assets/images/home.png")}
        style={styles.image}
      />
      <Text style={styles.title}>Emotion Tracking</Text>
      <Text style={styles.subtitle}>Welcome to my app!</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/disclaimer?next=login")}
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/disclaimer?next=signup")}
      >
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
  image: { width: 120, height: 120, marginBottom: 20, borderRadius: 60 },
  title: { fontSize: 30, fontWeight: "bold", marginBottom: 10 },
  subtitle: { fontSize: 16, marginBottom: 30 },
  button: {
    padding: 15,
    backgroundColor: "#c94f7c",
    margin: 10,
    borderRadius: 8,
    width: 200,
    alignItems: "center",
  },
  buttonText: { color: "#fff", fontSize: 16 },
});
