// run app with: npx expo


import { Text, View, StyleSheet } from "react-native";
import { Link } from "expo-router";
import { Image } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Edit app/index.tsx to edit this screen.1234</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "purple",
  },
})