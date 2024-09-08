import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import colors from "../constants/Colors";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const ValueComponent = ({ value }) => {
  const insets = useSafeAreaInsets(); // Use the hook properly
  const topPadding = insets.top + 50; // Get the top padding
  return (
    <View
      style={{
        width: "100%",
        alignItems: "center",
        marginTop: topPadding + 40,
        marginBottom: topPadding,
      }}
    >
      <Text
        style={{
          fontSize: 60,
          color: colors.white,
          fontFamily: "Poppins-SemiBold",
        }}
      >
        {value}
      </Text>
    </View>
  );
};

export default ValueComponent;

const styles = StyleSheet.create({});
