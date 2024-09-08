import { StyleSheet, Text, View } from "react-native";
import React from "react";
const index = () => {
  return (
    <View style={styles.container}>
      <Text style={{ fontFamily: "Poppins", fontSize: 23 }}>index</Text>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
