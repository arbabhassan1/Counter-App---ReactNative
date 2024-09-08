import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import Navbar from "../components/Navbar";
import colors from "../constants/Colors";

const Setting = () => {
  return (
    <View style={[styles.container]}>
      <Navbar title={"Setting"} />
      <View style={styles.content}></View>
    </View>
  );
};

export default Setting;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    alignItems: "center",
    backgroundColor: colors.black,
  },
});
