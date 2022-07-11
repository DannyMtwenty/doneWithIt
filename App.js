import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { ImageBackground } from "react-native-web";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>How cool with now wow!!!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  name: {
    color: "white",
  },
  name: {
    color: "white",
  },
});
