import { Colors } from "@/constants/Colors";
import { AntDesign, Feather, Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { default as profile } from "../../assets/images/icons8-profile-100.png";
const wallet = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView
          contentContainerStyle={{ paddingBottom: 70 }}
          style={{ flex: 1 }}
        >
          <View style={styles.topBar}>
            <View>
              <Image source={profile} style={{ width: 58, height: 58 }} />
            </View>
            <Text style={{ fontSize: 18, fontFamily: "poppinsMedium" }}>
              My Wallet
            </Text>
            <TouchableOpacity style={{}}>
              <AntDesign name="customerservice" size={25} color="black" />
            </TouchableOpacity>
          </View>
          <View style={{ marginTop: 10, paddingHorizontal: 20 }}>
            <View style={styles.card}>
              <Text
                style={{
                  color: "#787878",
                  fontSize: 13,
                  fontFamily: "poppinsMedium",
                }}
              >
                Name
              </Text>
              <Text
                style={{
                  marginTop: 6,
                  fontFamily: "poppinsSemiBold",
                  fontSize: 18,
                }}
              >
                Omojola Obaloluwa
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 10,
                  marginTop: 10,
                }}
              >
                <Text style={{ fontSize: 20, color: "#787878" }}>****</Text>
                <Text style={{ fontSize: 20, color: "#787878" }}>****</Text>
                <Text style={{ fontSize: 20, color: "#787878" }}>****</Text>
                <Text
                  style={{
                    fontFamily: "poppinsMedium",
                    fontSize: 18,
                    color: "#787878",
                  }}
                >
                  2300
                </Text>
              </View>
              <Text
                style={{
                  marginTop: 10,
                  fontFamily: "poppinsMedium",
                  color: "#787878",
                  fontSize: 12,
                }}
              >
                Balance
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 4,
                  marginTop: 8,
                }}
              >
                <TouchableOpacity>
                  <Ionicons name="refresh-outline" size={20} color="black" />
                </TouchableOpacity>
                <Text
                  style={{
                    fontFamily: "poppinsMedium",
                    color: "#000",
                    fontSize: 20,
                  }}
                >
                  ₦10,000.00
                </Text>
              </View>
            </View>
            <View
              style={{
                marginTop: 20,
                justifyContent: "space-between",
                alignItems: "center",
                flexDirection: "row",
                padding: 8,
              }}
            >
              <Text
                style={{
                  color: "#787878",
                  fontSize: 12,
                  fontFamily: "poppinsMedium",
                }}
              >
                Current balance :{" "}
              </Text>
              <Text
                style={{
                  color: "#000",
                  fontSize: 18,
                  fontFamily: "poppinsMedium",
                }}
              >
                ₦8,000.00
              </Text>
            </View>
            <View
              style={{
                justifyContent: "space-between",
                alignItems: "center",
                flexDirection: "row",
                paddingHorizontal: 8,
              }}
            >
              <Text
                style={{
                  color: "#787878",
                  fontSize: 12,
                  fontFamily: "poppinsMedium",
                }}
              >
                Bonus balance :{" "}
              </Text>
              <Text
                style={{
                  color: "#000",
                  fontSize: 18,
                  fontFamily: "poppinsMedium",
                }}
              >
                ₦2,000.00
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: 20,
              }}
            >
              <TouchableOpacity
                style={{
                  backgroundColor: Colors.default,
                  padding: 15,
                  width: "48%",
                  borderRadius: 30,
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    color: "white",
                    fontFamily: "poppinsMedium",
                  }}
                >
                  <Feather name="download" size={18} color="white" /> Withdraw
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  borderColor: Colors.default,
                  borderWidth: 1,
                  backgroundColor: "transparent",
                  padding: 15,
                  width: "48%",
                  borderRadius: 30,
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    color: Colors.default,
                    fontFamily: "poppinsMedium",
                  }}
                >
                  <Feather name="upload" size={18} color={Colors.default} />{" "}
                  Deposit
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{ padding: 10, marginTop: 10 }}>
              <Text style={{ fontSize: 17, fontFamily: "poppinsMedium" }}>
                Transaction
              </Text>
              <View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginTop: 20,
                    alignItems: "center",
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      gap: 10,
                      alignItems: "center",
                    }}
                  >
                    <View
                      style={{
                        backgroundColor: "#f443362b",
                        borderRadius: 30,
                        width: 50,
                        height: 50,
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Feather name="upload" size={18} color="black" />
                    </View>
                    <View>
                      <Text
                        style={{ fontSize: 14, fontFamily: "poppinsMedium" }}
                      >
                        Withdraw
                      </Text>
                      <Text
                        style={{
                          marginTop: 3,
                          fontSize: 11,
                          color: "#787878",
                          fontFamily: "poppinsMedium",
                        }}
                      >
                        14:23 25 febuary
                      </Text>
                    </View>
                  </View>
                  <View>
                    <Text style={{ fontSize: 18, fontFamily: "poppinsMedium" }}>
                      -₦5,000.00
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginTop: 20,
                    alignItems: "center",
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      gap: 10,
                      alignItems: "center",
                    }}
                  >
                    <View
                      style={{
                        backgroundColor: "#9c27b026",
                        borderRadius: 30,
                        width: 50,
                        height: 50,
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Feather name="download" size={18} color="black" />
                    </View>
                    <View>
                      <Text
                        style={{ fontSize: 14, fontFamily: "poppinsMedium" }}
                      >
                        Deposit
                      </Text>
                      <Text
                        style={{
                          marginTop: 3,
                          fontSize: 11,
                          color: "#787878",
                          fontFamily: "poppinsMedium",
                        }}
                      >
                        14:25 25 febuary
                      </Text>
                    </View>
                  </View>
                  <View>
                    <Text style={{ fontSize: 18, fontFamily: "poppinsMedium" }}>
                      +₦4,000.00
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginTop: 20,
                    alignItems: "center",
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      gap: 10,
                      alignItems: "center",
                    }}
                  >
                    <View
                      style={{
                        backgroundColor: "#9c27b026",
                        borderRadius: 30,
                        width: 50,
                        height: 50,
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Feather name="download" size={18} color="black" />
                    </View>
                    <View>
                      <Text
                        style={{ fontSize: 14, fontFamily: "poppinsMedium" }}
                      >
                        Deposit
                      </Text>
                      <Text
                        style={{
                          marginTop: 3,
                          fontSize: 11,
                          color: "#787878",
                          fontFamily: "poppinsMedium",
                        }}
                      >
                        12:25 26 febuary
                      </Text>
                    </View>
                  </View>
                  <View>
                    <Text style={{ fontSize: 18, fontFamily: "poppinsMedium" }}>
                      +₦2,000.00
                    </Text>
                  </View>
                </View>

                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginTop: 20,
                    alignItems: "center",
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      gap: 10,
                      alignItems: "center",
                    }}
                  >
                    <View
                      style={{
                        backgroundColor: "#f443362b",
                        borderRadius: 30,
                        width: 50,
                        height: 50,
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Feather name="upload" size={18} color="black" />
                    </View>
                    <View>
                      <Text
                        style={{ fontSize: 14, fontFamily: "poppinsMedium" }}
                      >
                        Withdraw
                      </Text>
                      <Text
                        style={{
                          marginTop: 3,
                          fontSize: 11,
                          color: "#787878",
                          fontFamily: "poppinsMedium",
                        }}
                      >
                        14:23 25 febuary
                      </Text>
                    </View>
                  </View>
                  <View>
                    <Text style={{ fontSize: 18, fontFamily: "poppinsMedium" }}>
                      -₦5,000.00
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginTop: 20,
                    alignItems: "center",
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      gap: 10,
                      alignItems: "center",
                    }}
                  >
                    <View
                      style={{
                        backgroundColor: "#f443362b",
                        borderRadius: 30,
                        width: 50,
                        height: 50,
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Feather name="upload" size={18} color="black" />
                    </View>
                    <View>
                      <Text
                        style={{ fontSize: 14, fontFamily: "poppinsMedium" }}
                      >
                        Withdraw
                      </Text>
                      <Text
                        style={{
                          marginTop: 3,
                          fontSize: 11,
                          color: "#787878",
                          fontFamily: "poppinsMedium",
                        }}
                      >
                        14:23 25 febuary
                      </Text>
                    </View>
                  </View>
                  <View>
                    <Text style={{ fontSize: 18, fontFamily: "poppinsMedium" }}>
                      -₦5,000.00
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default wallet;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  topBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  card: {
    width: "100%",
    height: 200,
    backgroundColor: "#1b4ed31f",
    borderRadius: 30,
    paddingVertical: 30,
    paddingHorizontal: 25,
  },
});
