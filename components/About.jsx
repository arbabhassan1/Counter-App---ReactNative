import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Linking,
} from "react-native";
import colors from "../constants/Colors";

const About = () => {
  const handlePress = () => {
    Linking.openURL("https://arbabhassan.bio.link/");
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.appName}>Counter App</Text>
        <Text style={styles.description}>
          A simple and intuitive app to easily keep track of counts. Tap to
          increment the counter, view your count history, and reset when needed.
        </Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Developer:</Text>
        <TouchableOpacity onPress={handlePress}>
          <Text style={styles.link}>Arbab Hassan</Text>
        </TouchableOpacity>

        <Text style={styles.label}>Version:</Text>
        <Text style={styles.text}>1.0.0</Text>
      </View>

      {/* Made in USA section */}
      <View style={styles.madeInUSAContainer}>
        <Text style={styles.madeInUSAText}>Innovated in the Pakistan 🇵🇰</Text>
      </View>

      <View style={styles.footerContainer}>
        <Text style={styles.copyright}>
          &copy; {new Date().getFullYear()} Innovisoft Technologies. All rights
          reserved.
        </Text>
        <Text style={styles.disclaimer}>
          This app is provided "as is" without any warranties.
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.black,
    paddingTop: 100,
    alignItems: "center", // Center content horizontally
  },
  headerContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  appName: {
    fontSize: 32,
    fontFamily: "Poppins-Bold",
    color: colors.white,
    textAlign: "center", // Center text horizontally
  },
  description: {
    fontSize: 16,
    fontFamily: "Poppins",
    color: colors.white,
    textAlign: "center", // Center text horizontally
    marginTop: 10,
  },
  infoContainer: {
    marginBottom: 20,
    alignItems: "center", // Center info items horizontally
  },
  label: {
    fontSize: 18,
    fontFamily: "Poppins-SemiBold",
    color: colors.primary,
    textAlign: "center", // Center text horizontally
  },
  text: {
    fontSize: 16,
    fontFamily: "Poppins",
    color: colors.white,
    marginBottom: 10,
    textAlign: "center", // Center text horizontally
  },
  footerContainer: {
    alignItems: "center",
    marginTop: 20,
  },
  copyright: {
    fontSize: 12,
    fontFamily: "Poppins",
    color: "#666",
    textAlign: "center", // Center text horizontally
  },
  disclaimer: {
    fontSize: 12,
    fontFamily: "Poppins",
    color: "#666",
    marginTop: 5,
    textAlign: "center", // Center text horizontally
  },
  link: {
    fontSize: 16,
    fontFamily: "Poppins-SemiBold",
    color: colors.white,
  },
  madeInUSAContainer: {
    marginTop: 20,
    alignItems: "center",
  },
  madeInUSAText: {
    fontSize: 16,
    fontFamily: "Poppins-SemiBold",
    color: colors.white,
  },
});

export default About;
