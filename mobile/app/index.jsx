// run app with: npx expo 

import { Text, View, StyleSheet } from "react-native";
import { Link } from "expo-router";
import { Image } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Edit app/index.tsx to edit this screen.1234</Text>
      <Link href={"/about"}>About</Link>

      {/*<Image source={{uri:"https://images.unsplash.com/photo-1529236183275-4fdcf2bc987e?q=80&w=2067&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",}}
      style={{width:100,height:100}}
      />*/}

      <Image 
        source={require("@/assets/images/react-logo.png")}
        style={{width:100,height:100}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "purple",
  },
  heading: {
    fontSize:40,
    color: "blue",
  }
})