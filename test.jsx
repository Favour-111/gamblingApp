import { AntDesign, FontAwesome5, FontAwesome6 } from "@expo/vector-icons";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import profile from "../../assets/images/icons8-profile-100.png";
const home = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <ScrollView style={{ marginBottom: 70 }}>
          <View style={styles.topBar}>
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 6 }}
            >
              <View>
                <Image source={profile} style={{ width: 48, height: 48 }} />
              </View>
              <View>
                <Text
                  style={{
                    color: "#787878",
                    fontFamily: "poppinsMedium",
                    fontSize: 12,
                  }}
                >
                  Hey
                </Text>
                <Text
                  style={{
                    color: "#000",
                    fontFamily: "poppinsSemiBold",
                    fontSize: 13,
                  }}
                >
                  Favour
                </Text>
              </View>
            </View>
            <TouchableOpacity
              style={{
                width: 40,
                height: 40,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <AntDesign name="customerservice" size={25} color="black" />
            </TouchableOpacity>
          </View>
          <View style={{ paddingHorizontal: 20, paddingVertical: 10 }}>
            <View
              style={{
                position: "relative",
                borderWidth: 1,
                borderColor: "#d3d3d9",
                height: 140,
                borderRadius: 20,
                backgroundColor: "white",
                paddingHorizontal: 20,
                paddingVertical: 10,
              }}
            >
              <View
                style={{
                  position: "absolute",
                  top: -20,
                  left: "49%",
                  padding: 10,
                  height: 40,
                  width: 40,
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#000",
                  borderRadius: 100,
                }}
              >
                <FontAwesome5 name="coins" size={20} color="white" />
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: 20,
                }}
              >
                <View style={{ flex: 1 }}>
                  <Text
                    style={{
                      marginTop: 10,
                      fontFamily: "poppinsMedium",
                      color: "#787878",
                      textTransform: "capitalize",
                      fontSize: 12,
                      textAlign: "center",
                    }}
                  >
                    current balance
                  </Text>
                  <Text
                    style={{
                      marginTop: 10,
                      fontFamily: "poppinsSemiBold",
                      color: "#000",
                      fontWeight: "bold",
                      textTransform: "capitalize",
                      fontSize: 20,
                      textAlign: "center",
                    }}
                  >
                    <FontAwesome6 name="naira-sign" size={17} color="black" />
                    500,000.00
                  </Text>
                </View>
                <View>
                  <View
                    style={{
                      marginLeft: 10,
                      height: 90,
                      width: 1,
                      backgroundColor: "#d3d3d3",
                    }}
                  ></View>
                </View>
                <View style={{ flex: 1, marginLeft: 20 }}>
                  <Text
                    style={{
                      marginTop: 10,
                      fontFamily: "poppinsMedium",
                      color: "#787878",
                      textTransform: "capitalize",
                      fontSize: 12,
                      textAlign: "center",
                    }}
                  >
                    Bonus balance
                  </Text>
                  <Text
                    style={{
                      marginTop: 10,
                      fontFamily: "poppinsSemiBold",
                      color: "#000",
                      fontWeight: "bold",
                      textTransform: "capitalize",
                      fontSize: 20,
                      textAlign: "center",
                    }}
                  >
                    <FontAwesome6 name="naira-sign" size={17} color="black" />
                    50,000.00
                  </Text>
                </View>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: 10,
              }}
            >
              <View
                style={{
                  width: "48%",
                  backgroundColor: "#221e1f",
                  borderRadius: 19,
                  padding: 4,
                  flexDirection: "row",
                  gap: 15,
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    backgroundColor: "white",
                    height: 60,
                    width: 60,
                    borderRadius: 15,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <AntDesign name="download" size={24} color="black" />
                </View>
                <Text style={{ color: "white", fontFamily: "poppinsMedium" }}>
                  Deposit
                </Text>
              </View>
              <View
                style={{
                  width: "48%",
                  backgroundColor: "#221e1f",
                  borderRadius: 19,
                  padding: 4,
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 10,
                }}
              >
                <View
                  style={{
                    backgroundColor: "white",
                    height: 60,
                    width: 60,
                    borderRadius: 15,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <AntDesign name="upload" size={24} color="black" />
                </View>
                <Text style={{ color: "white", fontFamily: "poppinsMedium" }}>
                  Withdraw
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: 30,
              }}
            >
              <Text style={{ fontSize: 17, fontFamily: "poppinsSemiBold" }}>
                Top Games
              </Text>
              <Text style={{ fontFamily: "poppinsMedium" }}>See All</Text>
            </View>
            <View style={{ flexDirection: "column", marginTop: 20, gap: 20 }}>
              <View
                style={{
                  backgroundColor: "#fff",
                  height: 130,
                  width: "100%",
                  borderRadius: 15,
                  elevation: 5,
                  shadowColor: "#000",
                  shadowOffset: { width: 0, height: 4 },
                  shadowOpacity: 0.1,
                  shadowRadius: 5,
                  flexDirection: "row",
                  justifyContent: "space-between",
                  paddingHorizontal: 20,
                  paddingTop: 20,
                }}
              >
                <View>
                  <Text
                    style={{
                      fontFamily: "poppinsSemiBold",
                      fontSize: 18,
                    }}
                  >
                    Lottery
                  </Text>
                  <Text
                    style={{
                      fontFamily: "poppinsSemiBold",
                      fontSize: 11,
                      marginTop: 10,
                      color: "#787878",
                    }}
                  >
                    jackpot
                  </Text>
                  <Text
                    style={{
                      fontFamily: "poppinsSemiBold",
                      fontSize: 15,
                      marginTop: 7,
                      color: "#000",
                    }}
                  >
                    Price :{" "}
                    <Text>
                      <FontAwesome6 name="naira-sign" size={14} color="black" />
                      50,000
                    </Text>
                  </Text>
                </View>
                <View>
                  <Text>ddd</Text>
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
              <View
                style={{
                  backgroundColor: "#fff",
                  height: 130,
                  width: "48%",
                  borderRadius: 15,
                  elevation: 5,
                  shadowColor: "#000",
                  shadowOffset: { width: 0, height: 4 },
                  shadowOpacity: 0.1,
                  shadowRadius: 5,
                }}
              ></View>
              <View
                style={{
                  backgroundColor: "#fff",
                  height: 130,
                  width: "48%",
                  borderRadius: 15,
                  elevation: 5,
                  shadowColor: "#000",
                  shadowOffset: { width: 0, height: 4 },
                  shadowOpacity: 0.1,
                  shadowRadius: 5,
                }}
              ></View>
              <View
                style={{
                  backgroundColor: "#fff",
                  height: 130,
                  width: "48%",
                  borderRadius: 15,
                  elevation: 5,
                  shadowColor: "#000",
                  shadowOffset: { width: 0, height: 4 },
                  shadowOpacity: 0.1,
                  shadowRadius: 5,
                }}
              ></View>
              <View
                style={{
                  backgroundColor: "#fff",
                  height: 130,
                  width: "48%",
                  borderRadius: 15,
                  elevation: 5,
                  shadowColor: "#000",
                  shadowOffset: { width: 0, height: 4 },
                  shadowOpacity: 0.1,
                  shadowRadius: 5,
                }}
              ></View>
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
