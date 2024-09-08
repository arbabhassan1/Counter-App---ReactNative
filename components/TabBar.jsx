import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Colors from "../constants/Colors";
import AntDesign from "@expo/vector-icons/AntDesign";

const TabBar = ({ state, descriptors, navigation }) => {
  const icons = {
    index: (props) => (
      <AntDesign name="home" size={26} color={Colors.lightGray} {...props} />
    ),
    setting: (props) => (
      <AntDesign name="setting" size={26} color={Colors.lightGray} {...props} />
    ),
  };

  return (
    <View style={styles.tabBar}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        if (["_sitemap", "+not-found"].includes(route.name)) return null;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={route.name}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.tabItem}
          >
            {icons[route.name]({
              color: isFocused ? Colors.white : "#001219",
            })}
            <Text
              style={{
                color: isFocused ? Colors.white : Colors.lightGray,
                fontFamily: "Poppins-SemiBold",
                lineHeight: 20,
                fontSize: 11,
                display: isFocused ? "flex" : "none",
              }}
            >
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default TabBar;

const styles = StyleSheet.create({
  tabBar: {
    position: "absolute",
    bottom: 0,
    paddingBottom: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: Colors.primary,
    paddingVertical: 15,
    borderTopColor: Colors.primary,
    borderTopWidth: 1,
    // borderCurve is removed since it's not supported
    // shadowColor: "black",
    // shadowOffset: { width: 0, height: 10 },
    // shadowRadius: 10, // Adjusted for better visual effect
    // shadowOpacity: 0.1,
    // elevation: 10, // Add this for Android shadow
  },

  tabItem: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
