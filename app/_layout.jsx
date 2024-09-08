import React from "react";
import { View } from "react-native";
import { Tabs } from "expo-router";
import { useFonts } from "expo-font";
import TabBar from "../components/TabBar";
import Colors from "../constants/Colors";
const _layout = () => {
  const [loadFonts] = useFonts({
    Poppins: require("../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
    "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
    "Poppins-SemiBold": require("../assets/fonts/Poppins-SemiBold.ttf"),
  });
  if (!loadFonts) {
    return null;
  }
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
      tabBar={(props) => <TabBar {...props} />}
    >
      <Tabs.Screen name="index" options={{ title: "Home" }} />
      <Tabs.Screen name="setting" options={{ title: "Settings" }} />
      <Tabs.Screen name="history" options={{ title: "History" }} />
    </Tabs>
  );
};

export default _layout;
