import { StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "../constants/Colors";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

const Navbar = ({ title }) => {
  const insets = useSafeAreaInsets(); // Use the hook properly
  const topPadding = insets.top + 10; // Get the top padding
  return (
    <View style={[styles.container, { paddingTop: topPadding }]}>
      <StatusBar style="light" />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default Navbar;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.background,
    paddingVertical: 20,
    borderBottomColor: colors.primary,
    borderBottomWidth: 3,
  },
  title: {
    color: colors.white,
    fontSize: 30,
    fontFamily: "Poppins-Bold",
  },
});
