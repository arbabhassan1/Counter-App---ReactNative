import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import Navbar from "../components/Navbar";
import colors from "../constants/Colors";
import ValueComponent from "../components/ValueComponent";
import * as Haptics from "expo-haptics"; // Import Haptics
import AsyncStorage from "@react-native-async-storage/async-storage";
const Index = () => {
  const [value, setValue] = useState(0);
  // Fetch count from AsyncStorage when the app loads
  useEffect(() => {
    const getCountFromStorage = async () => {
      try {
        const storedCount = await AsyncStorage.getItem("countValue");
        if (storedCount !== null) {
          setValue(parseInt(storedCount));
        }
      } catch (error) {
        console.log("Error fetching count from AsyncStorage", error);
      }
    };

    getCountFromStorage();
  }, []);

  // Update the count and store it in AsyncStorage
  const updateCount = async (newCount) => {
    try {
      await AsyncStorage.setItem("countValue", newCount.toString());
      setValue(newCount);
    } catch (error) {
      console.log("Error saving count to AsyncStorage", error);
    }
  };

  const handlePress = async () => {
    await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Rigid); // Trigger vibration
    updateCount(value + 1);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Navbar title={"Counter App"} />
      <View style={styles.content}>
        <ValueComponent value={value} />

        <Text
          style={{
            fontFamily: "Poppins",
            color: colors.white,
            paddingVertical: 4,
            textAlign: "center",
          }}
        >
          Press the below TouchPad!
        </Text>
        <TouchableOpacity style={styles.incrementPad} onPress={handlePress}>
          <Text
            style={{
              color: colors.white,
              fontSize: 20,
              fontFamily: "Poppins-SemiBold",
              textTransform: "capitalize",
              textAlign: "center",
            }}
          >
            ADD COUNTER
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.black,
  },
  btn: {
    backgroundColor: colors.primary,
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  incrementPad: {
    backgroundColor: colors.primary,
    width: "95%",
    borderRadius: 10,
    flex: 1,
    paddingTop: 100,
  },
});
