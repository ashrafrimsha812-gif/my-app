import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        {/* Screens automatically map to files inside app/ */}
        <Stack.Screen name="home" options={{ title: "Home" }} />
        <Stack.Screen name="login" options={{ title: "Login" }} />
        <Stack.Screen name="signup" options={{ title: "Signup" }} />
        <Stack.Screen name="emoji" options={{ title: "Emoji" }} />
        <Stack.Screen name="information" options={{ title: "Information" }} />
        <Stack.Screen name="survey" options={{ title: "Survey" }} />
        <Stack.Screen name="results" options={{ title: "Results" }} />
        <Stack.Screen name="profile" options={{ title: "Profile" }} />
        <Stack.Screen name="profile-edit" options={{ title: "Edit Profile" }} />
        <Stack.Screen name="privacy-policy" options={{ title: "Privacy Policy" }} />
        <Stack.Screen name="disclaimer" options={{ title: "Disclaimer" }} />
        <Stack.Screen name="chat" options={{ title: "Chat" }} />
        <Stack.Screen name="change-password" options={{ title: "Change Password" }} />
        <Stack.Screen name="appointment" options={{ title: "Appointment" }} />
        <Stack.Screen name="about-us" options={{ title: "About Us" }} />

        {/* Tabs & Not found */}
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
