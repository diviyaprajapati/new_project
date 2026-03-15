import { Stack } from "expo-router";
import { View } from "react-native";
import Header from "./component/Header";

export default function Layout() {
  return (
    <View style={{ flex: 1 }}>

      <Header />

      <Stack
        screenOptions={{
          headerShown: false,
          animation: "slide_from_right",
        }}
      >
        <Stack.Screen name="Home" />
        <Stack.Screen name="post" />
      </Stack>

    </View>
  );
}