import { Colors } from "@/constants/Colors";
import Feather from "@expo/vector-icons/Feather";
import Ionicons from "@expo/vector-icons/Ionicons";
import { router } from "expo-router";
import React from "react";
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
const signUp = () => {
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
                <Text style={styles.header}>Create Account</Text>
                <Text style={styles.header2}>
                  Sign up now and explore all the thrills our casino app offers.
                  Let the games begin!
                </Text>
              </View>
              <View style={styles.formContainer}>
                <View>
                  <Text style={styles.label}>Full Name</Text>
                  <View style={styles.TextInput}>
                    <View>
                      <Feather name="user" size={18} color="#787878" />
                    </View>
                    <TextInput
                      placeholder="john doe.."
                      placeholderTextColor="#787878"
                      style={{ color: "#787878", width: "100%", padding: 5 }}
                    />
                  </View>
                </View>
                <View style={styles.form2}>
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
                  <Text style={styles.label}>Email Address</Text>
                  <View style={styles.TextInput}>
                    <View>
                      <Ionicons name="mail" size={18} color="#787878" />
                    </View>
                    <TextInput
                      placeholder="example@gmail.com"
                      placeholderTextColor="#787878"
                      keyboardType="email-address"
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
                    <TouchableOpacity style={styles.button}>
                      <Text style={styles.buttonText}>Create Account</Text>
                    </TouchableOpacity>
                  </View>
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
                      Or sign Up with
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
                      by signing, you already agreed to our{" "}
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
                    Already have an account?
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

export default signUp;

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
