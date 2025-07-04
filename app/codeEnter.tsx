import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useEffect, useRef, useState } from "react";
import {
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { Colors } from "../constants/Colors";
const codeEnter = () => {
  const router = useRouter();
  const [otp, setOtp] = useState(["", "", "", ""]);
  const inputRefs = useRef([]);

  const handleInputChange = (text, index) => {
    if (text.length > 1) return; // Prevent multiple characters

    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    // Move to next input
    if (text && index < otp.length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };
  const handleKeyPress = ({ nativeEvent }, index) => {
    if (nativeEvent.key === "Backspace" && otp[index] === "" && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleSubmit = () => {
    const enteredOtp = otp.join("");
    console.log("Entered OTP:", enteredOtp);
    // Add your OTP validation logic here
  };
  useEffect(() => {
    if (otp.every((digit) => digit !== "")) {
      handleSubmit();
    }
  }, [otp]);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={{ justifyContent: "center", position: "relative" }}>
          <View style={styles.blob}></View>
        </View>
        <View style={{ padding: 20, marginTop: 150 }}>
          <View style={styles.fingerPrint}>
            <Ionicons name="mail-open-outline" size={24} color="black" />
          </View>
          <Text style={styles.header}>Enter your</Text>
          <Text style={styles.header}>verification code</Text>
          <Text style={styles.header2}>
            we've sent the verification code on
          </Text>
          <Text style={styles.header3}>omojolaobaloluwa@gmail.com</Text>
          <View style={styles.inputContainer}>
            {otp.map((value, index) => (
              <TextInput
                key={index}
                style={[
                  styles.input,
                  value ? styles.inputFilled : styles.inputEmpty,
                ]}
                value={value}
                keyboardType="number-pad"
                maxLength={1}
                onChangeText={(text) => handleInputChange(text, index)}
                onKeyPress={(e) => handleKeyPress(e, index)}
                ref={(ref) => (inputRefs.current[index] = ref)}
              />
            ))}
          </View>

          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 40,
            }}
          >
            <Text
              style={{
                color: "#787878",
                fontFamily: "poppinsMedium",
                fontSize: 12,
              }}
            >
              Didn't receive the email?
              <Text
                style={{
                  color: Colors.default,
                  textDecorationLine: "underline",
                  fontFamily: "poppinsSemiBold",
                  fontSize: 12,
                }}
              >
                Click
              </Text>
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              handleSubmit;
              router.push("/resetPassword");
            }}
          >
            <Text style={styles.buttonText}>Continues</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.back}
            onPress={() => router.replace("/signIn")}
          >
            <Ionicons name="arrow-back-outline" size={16} color="#787878" />
            <Text style={styles.backText}> Back to log in</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default codeEnter;

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
    marginBottom: 3,
    fontFamily: "poppinsSemiBold",
    color: Colors.default,
    fontSize: 25,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    gap: 20,
    marginBottom: 20,
  },
  input: {
    width: "20%",
    height: 60,
    borderWidth: 2,
    borderRadius: 8,
    textAlign: "center",
    fontSize: 18,
  },
  inputEmpty: {
    borderColor: "#ccc",
    backgroundColor: "white",
  },
  inputFilled: {
    borderColor: Colors.default, // Change border color
    borderWidth: 2,
    backgroundColor: "white", // Light blue background
    color: "black",
    fontSize: 25,
    fontFamily: "poppinsSemiBold",
  },
  fingerPrint: {
    borderWidth: 1,
    borderColor: "#d3d3d3",
    width: 50,
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
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
  button: {
    backgroundColor: Colors.default,
    paddingVertical: 20,
    paddingHorizontal: 40,
    borderRadius: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 13,
    fontWeight: "bold",
    textAlign: "center",
  },
  header2: {
    marginTop: 10,
    fontFamily: "poppinsMedium",
    color: "#787878",
    fontSize: 12,
  },
  header3: {
    marginBottom: 20,
    fontFamily: "poppinsMedium",
    color: "#000",
    fontSize: 12,
  },
});
