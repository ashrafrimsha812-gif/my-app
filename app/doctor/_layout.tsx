import { Stack } from "expo-router";

export default function DoctorLayout() {
  return (
    <Stack>
      <Stack.Screen name="dashboard" options={{ headerShown: false }} />
      <Stack.Screen name="patientHistory" options={{ title: "Patient History" }} />
      <Stack.Screen name="settings" options={{ title: "Settings" }} />
      <Stack.Screen name="profile" options={{ title: "Doctor Profile" }} />
       <Stack.Screen name="Signup" options={{ title: "Signup" }} />
        <Stack.Screen name="requests" options={{ title: "Requests" }} />
         <Stack.Screen name="postDetails" options={{ title: "Post Details" }} />
          <Stack.Screen name="patients" options={{ title: "Patients" }} />
           <Stack.Screen name="messages" options={{ title: "Messages" }} />
            <Stack.Screen name="login" options={{ title: "Login" }} />
             <Stack.Screen name="forgotpassword" options={{ title: "Forgot Password" }} />
         <Stack.Screen name="editProfile" options={{ title: "Edit Profile" }} />
          <Stack.Screen name="changePassword" options={{ title: "Change Password" }} />
           <Stack.Screen name="appointment" options={{ title: "Appointment" }} />
           <Stack.Screen name="chat/[id]" options={{ title: "Chat Details" }} />
    </Stack>
  );
}
