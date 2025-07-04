import { AntDesign, Feather, Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import {
  Alert,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import casino from "../../assets/images/icons8-lottery-100.png";
import { default as profile } from "../../assets/images/icons8-profile-100.png";
const home = () => {
  const route = useRouter();
  return (
    <View style={styles.container}>
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView
          contentContainerStyle={{ paddingBottom: 70 }}
          style={{ flex: 1 }}
        >
          <View style={styles.topBar}>
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 6 }}
            >
              <View>
                <Image source={profile} style={{ width: 58, height: 58 }} />
              </View>
              <View>
                <Text
                  style={{
                    color: "#787878",
                    fontFamily: "poppinsMedium",
                    fontSize: 13,
                  }}
                >
                  Hey
                </Text>
                <Text
                  style={{
                    color: "#000",
                    fontFamily: "poppinsSemiBold",
                    fontSize: 14,
                    width: 100,
                  }}
                  ellipsizeMode="tail"
                >
                  Omojola
                </Text>
              </View>
            </View>
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
            >
              <TouchableOpacity
                style={{
                  height: 40,
                  width: 40,
                  backgroundColor: "#0000000a",
                  borderRadius: 100,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <AntDesign name="customerservice" size={20} color="#0000009e" />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => route.push("/notification")}
                style={{
                  height: 40,
                  width: 40,
                  backgroundColor: "#0000000a",
                  borderRadius: 100,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Ionicons
                  name="notifications-outline"
                  size={20}
                  color="#0000009e"
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ paddingHorizontal: 23, marginTop: 10 }}>
            <Text
              style={{
                color: "#787878",
                fontFamily: "poppinsMedium",
                fontSize: 12,
              }}
            >
              Available Balance
            </Text>
            <View
              style={{
                marginTop: 5,
              }}
            >
              <Text
                style={{
                  fontSize: 30,
                  fontFamily: "poppinsMedium",
                  color: "rgb(13 13 13)",
                }}
              >
                ₦58,251.00
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: 20,
              }}
            >
              <TouchableOpacity
                style={{
                  width: "50%",
                  height: 50,
                  backgroundColor: "#1b4ed31f",
                  borderRadius: 30,
                  padding: 5,
                  flexDirection: "row",
                  gap: 10,
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    backgroundColor: "white",
                    borderRadius: 30,
                    width: 40,
                    height: 40,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Text>
                    <Feather name="eye-off" size={14} color="black" />
                  </Text>
                </View>
                <Text style={{ fontFamily: "poppinsMedium", fontSize: 13 }}>
                  Hide balance
                </Text>
              </TouchableOpacity>
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
                <Text>
                  <Feather name="upload" size={18} color="black" />
                </Text>
              </View>
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
                <Text>
                  <Feather name="download" size={18} color="black" />
                </Text>
              </View>
              <View
                style={{
                  backgroundColor: "#4caf501c",
                  borderRadius: 30,
                  width: 50,
                  height: 50,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text>
                  <Ionicons name="wallet-outline" size={18} color="black" />
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: 30,
              }}
            >
              <Text style={{ fontFamily: "poppinsMedium" }}>Stats & Bets</Text>
              <AntDesign name="arrowright" size={24} color="black" />
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: 20,
              }}
            >
              <View
                style={{
                  width: "32%",
                  height: 120,
                  backgroundColor: "#f443362b",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 30,
                }}
              >
                <Text style={{ fontSize: 26 }}>🏆</Text>
                <Text style={{ fontSize: 25, fontFamily: "poppinsSemiBold" }}>
                  60%
                </Text>
                <Text
                  style={{
                    fontSize: 11,
                    color: "#787878",
                    fontFamily: "poppinsMedium",
                  }}
                >
                  Win Ratio
                </Text>
              </View>
              <View
                style={{
                  backgroundColor: "#9c27b026",
                  width: "32%",
                  height: 120,
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 30,
                }}
              >
                <Text style={{ fontSize: 26 }}>👎</Text>
                <Text style={{ fontSize: 25, fontFamily: "poppinsSemiBold" }}>
                  40%
                </Text>
                <Text
                  style={{
                    fontSize: 11,
                    color: "#787878",
                    fontFamily: "poppinsMedium",
                  }}
                >
                  Loss Ratio
                </Text>
              </View>
              <View
                style={{
                  backgroundColor: "#4caf501c",
                  width: "32%",
                  height: 120,
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 30,
                }}
              >
                <Text style={{ fontSize: 26 }}>🎰</Text>
                <Text style={{ fontSize: 25, fontFamily: "poppinsSemiBold" }}>
                  324
                </Text>
                <Text
                  style={{
                    fontSize: 11,
                    color: "#787878",
                    fontFamily: "poppinsMedium",
                  }}
                >
                  Average Bet
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: 30,
              }}
            >
              <Text style={{ fontFamily: "poppinsMedium" }}>Top Games</Text>
              <Text
                style={{
                  fontFamily: "poppinsMedium",
                  color: "#787878",
                  fontSize: 12,
                }}
              >
                See All
              </Text>
            </View>
            <View style={{ flexDirection: "column", marginTop: 20, gap: 20 }}>
              <View
                style={{
                  backgroundColor: "#fff",
                  height: 130,
                  width: "100%",
                  borderRadius: 15,
                  elevation: 3,
                  shadowColor: "#000",
                  shadowOffset: { width: 0, height: 1 },
                  shadowOpacity: 0.07,
                  shadowRadius: 3,
                  flexDirection: "row",
                  gap: 20,
                  padding: 10,
                }}
              >
                <View
                  style={{
                    width: 120,
                    borderRadius: 15,
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                    backgroundColor: "#0000000a",
                  }}
                >
                  <Image style={{ width: 80, height: 80 }} source={casino} />
                </View>
                <View
                  style={{
                    marginTop: 10,
                    width: "50%",
                  }}
                >
                  <Text
                    style={{
                      fontFamily: "poppinsMedium",
                      color: "#000",
                      fontSize: 14,
                    }}
                  >
                    Lottery
                  </Text>

                  <Text
                    style={{
                      fontFamily: "poppinsSemiBold",
                      color: "#787878",
                      fontSize: 13,
                      marginTop: 5,
                    }}
                  >
                    Price : <Text style={{ color: "#000" }}>₦50,000.00</Text>
                  </Text>
                  <TouchableOpacity
                    style={{
                      backgroundColor: "#1b4ed31f",
                      padding: 12,
                      width: "100%",
                      marginTop: 10,
                      borderRadius: 10,
                    }}
                  >
                    <Text
                      style={{
                        textAlign: "center",
                        color: "#000",
                        fontSize: 12,
                        fontFamily: "poppinsMedium",
                      }}
                    >
                      Play now
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                marginTop: 20,
                justifyContent: "space-between",
                flexWrap: "wrap",
                rowGap: 20,
              }}
            >
              <TouchableOpacity
                onPress={() =>
                  Alert.alert("this game is currently unavailable")
                }
                style={{
                  backgroundColor: "#fff",
                  height: 130,
                  width: "48%",
                  borderRadius: 15,
                  elevation: 3,
                  shadowColor: "#000",
                  shadowOffset: { width: 0, height: 1 },
                  shadowOpacity: 0.07,
                  justifyContent: "center",
                  alignItems: "center",
                  shadowRadius: 3,
                }}
              >
                <Image
                  source={{
                    uri: "https://img.icons8.com/fluency/100/microsoft-solitaire-collection.png",
                  }}
                  style={{ width: 80, height: 80 }}
                />
                <Text style={{ fontFamily: "poppinsSemiBold", fontSize: 15 }}>
                  Poker
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  Alert.alert("this game is currently unavailable")
                }
                style={{
                  backgroundColor: "#fff",
                  height: 130,
                  width: "48%",
                  borderRadius: 15,
                  elevation: 3,
                  shadowColor: "#000",
                  shadowOffset: { width: 0, height: 1 },
                  shadowOpacity: 0.07,
                  shadowRadius: 3,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  source={{
                    uri: "https://img.icons8.com/emoji/96/bullseye.png",
                  }}
                  style={{ width: 80, height: 80 }}
                />
                <Text style={{ fontFamily: "poppinsSemiBold", fontSize: 15 }}>
                  Dart
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  Alert.alert("this game is currently unavailable")
                }
                style={{
                  backgroundColor: "#fff",
                  height: 130,
                  width: "48%",
                  borderRadius: 15,
                  elevation: 3,
                  shadowColor: "#000",
                  shadowOffset: { width: 0, height: 1 },
                  shadowOpacity: 0.07,
                  shadowRadius: 3,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  source={{
                    uri: "https://img.icons8.com/3d-fluency/94/dice.png",
                  }}
                  style={{ width: 60, height: 60 }}
                />
                <Text style={{ fontFamily: "poppinsSemiBold", fontSize: 15 }}>
                  Dice
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  Alert.alert("this game is currently unavailable")
                }
                style={{
                  backgroundColor: "#fff",
                  height: 130,
                  width: "48%",
                  borderRadius: 15,
                  elevation: 3,
                  shadowColor: "#000",
                  shadowOffset: { width: 0, height: 1 },
                  shadowOpacity: 0.07,
                  shadowRadius: 3,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  source={{
                    uri: "https://img.icons8.com/emoji/48/slot-machine-emoji--v2.png",
                  }}
                  style={{ width: 60, height: 60 }}
                />
                <Text style={{ fontFamily: "poppinsSemiBold", fontSize: 15 }}>
                  Money Slot
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  topBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
});
