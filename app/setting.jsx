import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import React from "react";
import Navbar from "../components/Navbar";
import colors from "../constants/Colors";
import HistoryList from "../components/HistoryList";

const Setting = () => {
  const [dataArray, setDataArray] = useState([]);
  const [value, setValue] = useState(0);
  const currentDate = new Date();

  // Fetch stored data from AsyncStorage on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const storedData = await AsyncStorage.getItem("dataArray");
        if (storedData) {
          setDataArray(JSON.parse(storedData));
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // Fetch `countValue` from AsyncStorage
  const getCountFromStorage = async () => {
    try {
      const storedCount = await AsyncStorage.getItem("countValue");
      if (storedCount !== null) {
        const value = parseInt(storedCount);
        setValue(value);
        return value;
      }
    } catch (error) {
      // console.log("Error fetching count from AsyncStorage", error);
      return 0;
    }
  };

  // Reset function to add new data and ensure array length is <= 20
  const handleReset = async () => {
    const cVa = await getCountFromStorage();

    const newData = {
      id: Date.now().toString(), // Unique id using current timestamp
      date: currentDate.toLocaleDateString(), // Current device date
      time: currentDate.toLocaleTimeString(), // Current device time
      count: cVa, // Current count value
    };

    try {
      // Retrieve existing data from AsyncStorage
      const storedData = await AsyncStorage.getItem("dataArray");
      let dataArray = storedData ? JSON.parse(storedData) : [];

      // If array length exceeds 20, remove the first (oldest) item
      if (dataArray.length >= 20) {
        dataArray.shift(); // Remove the first (oldest) item
      }

      // Add the new object to the array
      dataArray.push(newData);

      // Save the updated array back to AsyncStorage
      await AsyncStorage.setItem("dataArray", JSON.stringify(dataArray));

      // Update the dataArray state with the new data
      setDataArray([...dataArray]); // Trigger re-render by setting new state

      // Reset the count value to 0 in both state and AsyncStorage
      setValue(0);
      await AsyncStorage.setItem("countValue", "0");

      // console.log("Data saved successfully:", newData);
    } catch (error) {
      console.error("Error saving data:", error);
    }
  };

  return (
    <View style={[styles.container]}>
      <Navbar title={"Setting"} />
      <View style={styles.content}>
        <TouchableOpacity
          style={{
            marginTop: 20,
            width: "80%",
            alignItems: "center",
            backgroundColor: colors.danger,
            paddingVertical: 10,
            paddingHorizontal: 20,
            borderRadius: 25,
          }}
          onPress={handleReset}
        >
          <Text
            style={{
              fontSize: 19,
              color: colors.white,
              fontFamily: "Poppins-SemiBold",
            }}
          >
            Reset Counter
          </Text>
        </TouchableOpacity>
        <HistoryList data={dataArray} />
      </View>
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
