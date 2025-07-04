import { Colors } from "@/constants/Colors";
import { useRouter } from "expo-router";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import dice from "../assets/images/icons8-dices-68.png";
import casinoImage from "../assets/images/pngtree-gambling-clipart-cartoon-image-of-a-group-of-people-playing-roulette-png-image_11052923.png";
const screen2 = () => {
  const route = useRouter();
  return (
    <View style={styles.screenContainer}>
      <View style={styles.headCont}>
        <Image source={dice} style={styles.smallImage} />
        <Text style={styles.welcomeText}>Casino</Text>
      </View>
      <Image source={casinoImage} style={styles.casinoImage} />
      <View>
        <View
          style={{
            padding: 20,
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            gap: 10,
          }}
        >
          <Text style={styles.header1}>Step into the Casino!</Text>
          <Text style={styles.header2}>
            Play your favorite games, win big, and enjoy secure,private fun!
          </Text>
        </View>

        <View style={styles.screenButtonContainer}>
          <TouchableOpacity
            style={styles.screenButton}
            onPress={() => route.push("/signIn")}
          >
            <Text style={styles.getStartedText}>Get started</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default screen2;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "space-around",
  },
  headCont: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: "15%",
    gap: 5,
  },
  smallImage: {
    width: 30,
    height: 30,
  },
  welcomeText: {
    textAlign: "center",
    fontFamily: "poppinsSemiBold",
    fontSize: 27,
  },
  casinoImage: {
    height: 300,
    width: 300,
    marginTop: 30,
  },
  header1: {
    fontSize: 20,
    fontFamily: "poppinsSemiBold",
    textAlign: "center",
  },
  header2: {
    fontSize: 12,
    width: "80%",
    textAlign: "center",
    color: "#787878",
    fontFamily: "poppinsMedium",
  },
  screenButtonContainer: {
    paddingHorizontal: 30,
  },
  screenButton: {
    backgroundColor: Colors.default,
    width: "100%",
    paddingVertical: 22,
    borderRadius: 10,
  },
  getStartedText: {
    textAlign: "center",
    fontFamily: "poppinsMedium",
    color: "#fff",
  },
});
