import { Stack } from "expo-router";

export default function UserLayout() {
  return (
    <Stack>
      <Stack.Screen name="home" options={{ headerShown: false }} />
      <Stack.Screen name="profile" options={{ title: "User Profile" }} />
       <Stack.Screen name="about us" options={{ title: "About Us" }} />
   <Stack.Screen name="appointments" options={{ title: "Appointments" }} />
 <Stack.Screen name="change password" options={{ title: "Change Password" }} />
  <Stack.Screen name="chat" options={{ title: "Chat" }} />
   <Stack.Screen name="disclaimer" options={{ title: "Disclaimer" }} />
    <Stack.Screen name="edit profile" options={{ title: "Edit Profile" }} />
     <Stack.Screen name="ForgotPassword" options={{ title: "Forgot Password" }} />
     <Stack.Screen name="signup" options={{ title: "Signup" }} />
     <Stack.Screen name="index" options={{ title: "Index" }} />
     <Stack.Screen name="information" options={{ title: "Information" }} />
     <Stack.Screen name="login" options={{ title: "Login" }} />
     <Stack.Screen name="next" options={{ title: "Next" }} />
     <Stack.Screen name="Privacy Policy" options={{ title: "PrivacyPolicy" }} />
     <Stack.Screen name="results" options={{ title: "Results" }} />
     <Stack.Screen name="survey" options={{ title: "Survey" }} />
     <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}
