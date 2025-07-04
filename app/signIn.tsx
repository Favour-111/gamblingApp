import { Colors } from "@/constants/Colors";
import Feather from "@expo/vector-icons/Feather";
import Ionicons from "@expo/vector-icons/Ionicons";
import { router } from "expo-router";
import React, { useState } from "react";
import {
  Alert,
  Image,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import apple from "../assets/images/icons8-apple-100.png";
import facebook from "../assets/images/icons8-facebook-96.png";
import google from "../assets/images/icons8-google-96.png";
const signIn = () => {
  const [checked, setChecked] = useState(false);
  return (
    <View style={styles.home}>
      <SafeAreaView style={{ flex: 1 }}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={{ flex: 1 }}
        >
          <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <View>
              <View style={styles.backIcn}>
                <TouchableOpacity
                  onPress={() => {
                    router.back();
                  }}
                >
                  <Ionicons
                    name="chevron-back"
                    size={24}
                    color={Colors.default}
                  />
                </TouchableOpacity>
              </View>
              <View style={{ paddingHorizontal: 20 }}>
                <Text style={styles.header}>Welcome Back</Text>
                <Text style={styles.header2}>
                  We’re excited to have you back can’t wait to see what luck you
                  bring today!
                </Text>
              </View>
              <View style={styles.formContainer}>
                <View>
                  <Text style={styles.label}>Phone number</Text>
                  <View style={styles.TextInput}>
                    <View>
                      <Feather name="phone" size={20} color="#787878" />
                    </View>
                    <TextInput
                      placeholder="+234 500 ...."
                      placeholderTextColor="#787878"
                      keyboardType="numeric"
                      style={{ color: "#787878", width: "100%", padding: 5 }}
                    />
                  </View>
                </View>
                <View style={styles.form2}>
                  <Text style={styles.label}>Password</Text>
                  <View style={styles.TextInput}>
                    <View>
                      <Feather name="lock" size={20} color="#787878" />
                    </View>
                    <TextInput
                      placeholder="******"
                      secureTextEntry
                      placeholderTextColor="#787878"
                      style={{ color: "#787878", width: "100%", padding: 5 }}
                    />
                  </View>
                </View>
                <View>
                  <View style={styles.buttonWrapper}>
                    <TouchableOpacity
                      style={styles.button}
                      onPress={() => router.push("/home")}
                    >
                      <Text style={styles.buttonText}>Login</Text>
                    </TouchableOpacity>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      marginTop: 10,
                    }}
                  >
                    <TouchableOpacity
                      onPress={() => setChecked(!checked)}
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        padding: 10,
                      }}
                    >
                      <View
                        style={{
                          height: 20,
                          width: 20,
                          borderRadius: 4,
                          borderWidth: checked ? 0 : 2,
                          borderColor: "#787878",
                          backgroundColor: checked
                            ? Colors.default
                            : "transparent",
                          justifyContent: "center",
                          alignItems: "center",
                          marginRight: 3,
                        }}
                      >
                        {checked && (
                          <Ionicons
                            name="checkmark-sharp"
                            size={15}
                            color="#fff"
                          />
                        )}
                      </View>
                    </TouchableOpacity>
                    <Text
                      style={{
                        fontSize: 12,
                        fontFamily: "poppinsMedium",
                        color: "#787878",
                      }}
                    >
                      Remember me
                    </Text>
                  </View>
                  <TouchableOpacity
                    onPress={() => router.push("/forgotPassword")}
                  >
                    <Text
                      style={{
                        color: Colors.default,
                        fontSize: 12,
                        fontFamily: "poppinsMedium",
                      }}
                    >
                      Forgot password?
                    </Text>
                  </TouchableOpacity>
                </View>
                <View
                  style={{ alignItems: "center", justifyContent: "center" }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      gap: 5,
                      marginTop: 40,
                    }}
                  >
                    <View style={styles.line}></View>
                    <Text
                      style={{
                        color: "#787878",
                        fontFamily: "poppinsMedium",
                        fontSize: 12,
                      }}
                    >
                      Or sign in with
                    </Text>
                    <View style={styles.line}></View>
                  </View>

                  <View style={styles.icons}>
                    <TouchableOpacity style={styles.icon}>
                      <Image source={google} style={styles.iconImages} />
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.icon}
                      onPress={() =>
                        Alert.alert(
                          "this sign in Method is currently unavailable"
                        )
                      }
                    >
                      <Image source={facebook} style={styles.iconImages} />
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.icon}
                      onPress={() =>
                        Alert.alert(
                          "this sign in Method is currently unavailable"
                        )
                      }
                    >
                      <Image source={apple} style={styles.iconImages} />
                    </TouchableOpacity>
                  </View>
                  <View style={{ width: "90%", marginTop: 30 }}>
                    <Text
                      style={{
                        color: "#787878",
                        fontFamily: "poppinsMedium",
                        fontSize: 12,
                        textAlign: "center",
                      }}
                    >
                      by logging, you already agreed to our{" "}
                      <Text
                        style={{
                          color: "#000",
                          fontFamily: "poppinsSemiBold",
                          fontSize: 12,
                        }}
                      >
                        Terms & condition
                      </Text>{" "}
                      and{" "}
                      <Text
                        style={{
                          color: "#000",
                          fontFamily: "poppinsSemiBold",
                          fontSize: 12,
                        }}
                      >
                        Private policy
                      </Text>
                    </Text>
                  </View>
                </View>

                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: 30,
                    gap: 4,
                  }}
                >
                  <Text
                    style={{
                      color: "#787878",
                      fontFamily: "PoppinsMedium",
                    }}
                  >
                    i am a new user.
                  </Text>
                  <TouchableOpacity
                    onPress={() => {
                      router.push("/signUp");
                    }}
                  >
                    <Text
                      style={{
                        color: Colors.default,
                        fontFamily: "PoppinsMedium",
                      }}
                    >
                      Sign Up
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </View>
  );
};

export default signIn;

const styles = StyleSheet.create({
  backIcn: {
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 3,
    shadowOffset: { width: 0, height: 2 },
    borderRadius: 30,
    height: 42,
    width: 42,
    justifyContent: "center",
    alignItems: "center",
    margin: 20,
    elevation: 2,
  },

  home: {
    backgroundColor: "#fff",
    flex: 1,
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
  formContainer: {
    marginTop: 20,
    padding: 20,
  },
  label: {
    color: "#787878",
    fontFamily: "PoppinsMedium",
  },
  TextInput: {
    flexDirection: "row",
    alignItems: "center",
    gap: 2,
    borderColor: "#d3d3d3",
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 12,
    marginTop: 5,
    paddingVertical: 12,
  },
  line: {
    height: 1,
    backgroundColor: "#d3d3d3",
    width: "30%",
  },
  icons: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
    marginTop: 20,
  },
  icon: {
    padding: 10,
    backgroundColor: "#0000000b",
    borderRadius: 100,
  },
  iconImages: {
    width: 30,
    height: 30,
  },
  form2: {
    marginTop: 20,
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
