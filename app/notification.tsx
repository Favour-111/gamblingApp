import { Colors } from "@/constants/Colors";
import { Feather } from "@expo/vector-icons";
import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";

const notification = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView
          contentContainerStyle={{ paddingBottom: 70 }}
          style={{ flex: 1 }}
        >
          <View style={{}}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                paddingVertical: 15,
                paddingHorizontal: 20,
              }}
            >
              <Feather name="chevron-left" size={28} color="black" />
              <Text style={{ fontFamily: "poppinsSemiBold", fontSize: 18 }}>
                Notification
              </Text>
              <View></View>
            </View>
            <View style={{ marginTop: 15 }}>
              <View
                style={{
                  flexDirection: "row",
                  gap: 10,
                  alignItems: "center",
                  borderBottomColor: "#0000000a",
                  borderBottomWidth: 1,
                  borderTopColor: "#0000000a",
                  borderTopWidth: 1,
                  paddingVertical: 10,
                  paddingHorizontal: 20,
                }}
              >
                <View
                  style={{
                    backgroundColor: Colors.default,
                    width: 50,
                    height: 50,
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 100,
                  }}
                >
                  <Text
                    style={{
                      color: "#fff",
                      fontFamily: "poppinsSemiBold",
                      fontSize: 20,
                    }}
                  >
                    L
                  </Text>
                </View>
                <View style={{ width: "85%" }}>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <View>
                      <Text
                        style={{
                          color: "#000",
                          fontFamily: "poppinsSemiBold",
                          fontSize: 15,
                        }}
                      >
                        Latest Draw
                      </Text>
                    </View>
                    <View>
                      <Text
                        style={{
                          color: "#787878",
                          fontSize: 11,
                          fontFamily: "poppinsMedium",
                        }}
                      >
                        20 mins ago
                      </Text>
                    </View>
                  </View>
                  <View
                    style={{
                      marginTop: 4,
                      width: "100%",
                      flexWrap: "wrap",
                      flexShrink: 1,
                    }}
                  >
                    <Text
                      style={{
                        fontFamily: "poppinsMedium",
                        color: "#787878",
                        fontSize: 12,
                        width: "95%",
                      }}
                    >
                      Lorem ipsum, dolor sit amet consectetur adipisi dweuj
                      eirhue rrbi elit. Saepe, repellat!
                    </Text>
                  </View>
                </View>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  gap: 10,
                  alignItems: "center",
                  borderBottomColor: "#0000000a",
                  borderBottomWidth: 1,

                  paddingVertical: 10,
                  paddingHorizontal: 20,
                }}
              >
                <View
                  style={{
                    backgroundColor: Colors.default,
                    width: 50,
                    height: 50,
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 100,
                  }}
                >
                  <Text
                    style={{
                      color: "#fff",
                      fontFamily: "poppinsSemiBold",
                      fontSize: 20,
                    }}
                  >
                    L
                  </Text>
                </View>
                <View style={{ width: "85%" }}>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <View>
                      <Text
                        style={{
                          color: "#000",
                          fontFamily: "poppinsSemiBold",
                          fontSize: 15,
                        }}
                      >
                        Latest Draw
                      </Text>
                    </View>
                    <View>
                      <Text
                        style={{
                          color: "#787878",
                          fontSize: 11,
                          fontFamily: "poppinsMedium",
                        }}
                      >
                        20 mins ago
                      </Text>
                    </View>
                  </View>
                  <View
                    style={{
                      marginTop: 4,
                      width: "100%",
                      flexWrap: "wrap",
                      flexShrink: 1,
                    }}
                  >
                    <Text
                      style={{
                        fontFamily: "poppinsMedium",
                        color: "#787878",
                        fontSize: 12,
                        width: "95%",
                      }}
                    >
                      Lorem ipsum, dolor sit amet consectetur adipisi dweuj
                      eirhue rrbi elit. Saepe, repellat!
                    </Text>
                  </View>
                </View>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  gap: 10,
                  alignItems: "center",
                  borderBottomColor: "#0000000a",
                  borderBottomWidth: 1,

                  paddingVertical: 10,
                  paddingHorizontal: 20,
                }}
              >
                <View
                  style={{
                    backgroundColor: Colors.default,
                    width: 50,
                    height: 50,
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 100,
                  }}
                >
                  <Text
                    style={{
                      color: "#fff",
                      fontFamily: "poppinsSemiBold",
                      fontSize: 20,
                    }}
                  >
                    L
                  </Text>
                </View>
                <View style={{ width: "85%" }}>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <View>
                      <Text
                        style={{
                          color: "#000",
                          fontFamily: "poppinsSemiBold",
                          fontSize: 15,
                        }}
                      >
                        Latest Draw
                      </Text>
                    </View>
                    <View>
                      <Text
                        style={{
                          color: "#787878",
                          fontSize: 11,
                          fontFamily: "poppinsMedium",
                        }}
                      >
                        20 mins ago
                      </Text>
                    </View>
                  </View>
                  <View
                    style={{
                      marginTop: 4,
                      width: "100%",
                      flexWrap: "wrap",
                      flexShrink: 1,
                    }}
                  >
                    <Text
                      style={{
                        fontFamily: "poppinsMedium",
                        color: "#787878",
                        fontSize: 12,
                        width: "95%",
                      }}
                    >
                      Lorem ipsum, dolor sit amet consectetur adipisi dweuj
                      eirhue rrbi elit. Saepe, repellat!
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

export default notification;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
