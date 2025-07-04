import { Colors } from "@/constants/Colors";
import { useRouter } from "expo-router";
import React, { useEffect } from "react";
import { Image, StyleSheet, View } from "react-native";
import logo from "../assets/images/dice-cube.png";
const index = () => {
  const route = useRouter();
  useEffect(() => {
    setTimeout(() => {
      route.replace("/screen2");
    }, 3000);
  });
  return (
    <View style={styles.splashScreenContainer}>
      <Image source={logo} style={styles.logo} />
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  logo: {
    width: 100,
    height: 100,
  },
  splashScreenContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.default,
  },
});
