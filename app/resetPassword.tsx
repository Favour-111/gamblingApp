import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Colors } from "../constants/Colors";

const resetPassword = () => {
  const [isChecked, setChecked] = useState(false);

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"} // Adjust keyboard behavior based on platform
    >
      <View style={{ justifyContent: "center", position: "relative" }}>
        <View style={styles.blob}></View>
      </View>
      <View style={{ padding: 20, marginTop: 150 }}>
        <View style={styles.fingerPrint}>
          <MaterialCommunityIcons name="fingerprint" size={24} color="black" />
        </View>
        <Text style={styles.header}>Set new Password</Text>
        <Text style={styles.header2}>Must be at least 8 character long</Text>
        <View style={styles.formContainer}>
          <Text style={styles.label}>Password</Text>
          <View style={styles.TextInput}>
            <View>
              <Ionicons name="lock-closed-outline" size={24} color="black" />
            </View>
            <TextInput
              placeholder="******"
              placeholderTextColor="#787878"
              keyboardType="default"
              secureTextEntry
              style={{ color: "#787878", width: "100%", padding: 5 }}
            />
          </View>
          <View style={styles.form2}>
            <Text style={styles.label}>Confirm password</Text>
            <View style={styles.TextInput}>
              <View>
                <Ionicons name="lock-closed-outline" size={24} color="black" />
              </View>
              <TextInput
                placeholder="******"
                placeholderTextColor="#787878"
                keyboardType="default"
                secureTextEntry
                style={{ color: "#787878", width: "100%", padding: 5 }}
              />
            </View>
          </View>
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push("/codeEnter")}
        >
          <Text style={styles.buttonText}>Reset password</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.back}
          onPress={() => router.replace("/signIn")}
        >
          <Ionicons name="arrow-back-outline" size={16} color="#787878" />
          <Text style={styles.backText}> Back to log in</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default resetPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  blob: {
    width: 200,
    height: 200,
    backgroundColor: Colors.default,
    opacity: 0.1,
    borderRadius: 100,
    position: "absolute",
    top: "-50%",
    right: "-20%",
  },
  header: {
    marginTop: 20,
    fontFamily: "poppinsSemiBold",
    color: Colors.default,
    fontSize: 25,
  },
  header2: {
    marginTop: 10,
    fontFamily: "poppinsMedium",
    color: "#787878",
    fontSize: 12,
  },
  fingerPrint: {
    borderWidth: 1,
    borderColor: "#d3d3d3",
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  formContainer: {
    marginTop: 30,
  },
  form2: {
    marginTop: 20,
  },
  TextInput: {
    flexDirection: "row",
    alignItems: "center",
    gap: 2,
    borderColor: "#d3d3d3",
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 12,
    marginTop: 8,
    paddingVertical: 12,
  },
  input: {
    width: "80%",
    height: "80%",
  },
  label: {
    color: "#787878",
    fontFamily: "PoppinsMedium",
  },
  back: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 30,
    justifyContent: "center",
  },
  backText: {
    color: "#787878",
    fontSize: 12,
    fontFamily: "poppinsSemiBold",
  },
  buttonText: {
    textAlign: "center",
    fontFamily: "poppinsMedium",
    color: "#fff",
  },
  buttonWrapper: {
    alignItems: "center",
  },
  button: {
    marginTop: 22,
    backgroundColor: Colors.default,
    width: "100%",
    paddingVertical: 20,
    borderRadius: 10,
  },
});
