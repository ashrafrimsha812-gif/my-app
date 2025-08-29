import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";


export default function EditProfilePage() {
  const [name, setName] = useState("Rimsha Ashraf");
  const [username, setUsername] = useState("rimsha123");
  const [email, setEmail] = useState("rimsha@example.com");
  const [phone, setPhone] = useState("+92 300 1234567");
  const [dob, setDob] = useState("2000-01-01");
  const [bio, setBio] = useState("Hello! I am using Emotion Tracker App.");

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Edit Profile</Text>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/images/profile.png")}
          style={styles.profileImage}
        />
        <TouchableOpacity style={styles.changePicButton}>
          <Text style={styles.changePicText}>Change</Text>
        </TouchableOpacity>
      </View>

      <TextInput 
        style={styles.input}
        placeholder="Full Name"
        value={name}
        onChangeText={(text)=>setName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={(text)=>setUsername(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        keyboardType="email-address"
        onChangeText={(e)=>setEmail(e)}
      />
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        value={phone}
        keyboardType="phone-pad"
        onChangeText={(numeric)=>setPhone(numeric)}
      />
      <TextInput
        style={styles.input}
        placeholder="Date of Birth"
        value={dob}
        onChangeText={(text)=>setDob(text)}
      />
      <TextInput
        style={[styles.input, { height: 100 }]}
        placeholder="Bio"
        value={bio}
        multiline
        onChangeText={(text)=>setBio(text)}
      />
      
       <TouchableOpacity style={styles.button} >
        <Text style={styles.buttonText}>Save Changes</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#fdecee", 
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#d64b7d",
  },
  imageContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: "#d64b7d",
  },
  changePicButton: {
    marginTop: 8,
    paddingVertical: 6,
    paddingHorizontal: 15,
    borderRadius: 20,
    backgroundColor: "#d64b7d",
  },
  changePicText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
  },
  input: {
    width: "90%",
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#d64b7d",
    marginBottom: 15,
  },
  button: {
    backgroundColor: "#d64b7d",
    paddingVertical: 14,
    borderRadius: 25,
    width: "90%",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 40,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});