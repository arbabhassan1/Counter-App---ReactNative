import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import colors from "../constants/Colors";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ListComponent = ({ data }) => {
  console.log(data);

  // Render each item in the list
  const renderItem = React.useCallback(
    ({ item }) => (
      <View style={styles.itemContainer}>
        {/* Counter View */}
        <View>
          <Text style={styles.itemText}>{item.count}</Text>
        </View>
        {/* Meta Data */}
        <View>
          <Text style={styles.stamp}>{item.date}</Text>
          <Text style={styles.stamp}>{item.time}</Text>
        </View>
      </View>
    ),
    []
  );

  if (!data || data.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>No History available.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={data} // Pass the array as data to the FlatList
        renderItem={renderItem} // Render each item using renderItem
        keyExtractor={(item) => item.id} // Use id as a unique key for each item
        ListFooterComponent={() => (
          <ActivityIndicator size="small" color={colors.primary} />
        )}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    paddingTop: 10,
    paddingBottom: 40, // Add some padding to the bottom to avoid overlap with footer components
  },
  list: {
    paddingBottom: 20, // Add some padding to the bottom to avoid overlap with footer components
  },
  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 8,
    paddingHorizontal: 15,
    paddingVertical: 12,
    borderBottomColor: colors.primary,
    borderBottomWidth: 1,
  },
  itemText: {
    fontFamily: "Poppins-SemiBold",
    color: colors.white,
    fontSize: 18,
  },
  stamp: {
    fontFamily: "Poppins",
    fontSize: 12,
    color: "#666",
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyText: {
    fontFamily: "Poppins",
    fontSize: 18,
    color: colors.white,
  },
});

export default ListComponent;
