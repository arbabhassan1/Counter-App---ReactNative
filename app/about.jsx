import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Navbar from "../components/Navbar";
import About from "../components/About";
const History = () => {
  return (
    <View style={{ flex: 1 }}>
      <Navbar title={"About"} />
      <About />
    </View>
  );
};

export default History;

const styles = StyleSheet.create({});
