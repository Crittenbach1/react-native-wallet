import { Stack } from "expo-router";
import SafeScreen from "@/components/SafeScreen";

export default function RootLayout() {
  return <SafeScreen>
    <Stack screenOptions={{ headerShown: false }} />
  </SafeScreen>
}



// return <Stack screenOptions={{ headerShown: false }} />;