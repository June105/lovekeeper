import {
  SafeAreaProvider,
  initialWindowMetrics,
} from "react-native-safe-area-context";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Switch,
} from "react-native";
import React, { useState } from "react";

const inquiryImage = require("../assets/images/logo-inquiry.png");
const backArrow = require("../assets/images/ic-back.png");

export default function Main({ navigation }) {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  return (
    <SafeAreaProvider
      initialMetrics={initialWindowMetrics}
      style={styles.container}
    >
      <View style={styles.head}>
        <View style={{ ...styles.head, justifyContent: "flex-start" }}>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.navigate("Setting")}
          >
            <Image source={backArrow} style={{ width: 24, height: 24 }} />
          </TouchableOpacity>
        </View>
        <View style={{ ...styles.head, justifyContent: "center" }}>
          <Image
            source={inquiryImage}
            style={{ width: 129.68, height: 40, marginRight: 180 }}
          />
        </View>
      </View>
      <View style={styles.alert}>
        <Text style={styles.text1}>앱 사용에 문제가 있나요?</Text>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.text2}>이메일(lovekeeperapp@gmail.com)으로 </Text>
          <TouchableOpacity>
            <View style={styles.link}>
              <Text style={styles.text3}>문의하기</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  head: {
    flex: 1,
    width: 375,
    height: 40,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: -10,
  },
  alert: {
    width: 343,
    borderBottomWidth: 1,
    borderStyle: "solid",
    borderColor: "#D9D9D9",
    marginBottom: 520,
  },
  text1: {
    fontSize: 14,
    fontWeight: 400,
    color: "#767676",
    marginBottom: 21,
  },
  text2: {
    fontSize: 16,
    fontWeight: 400,
    color: "#393939",
    marginBottom: 15,
  },
  text3: {
    fontSize: 16,
    fontWeight: 400,
    color: "#FF859B",
  },
  link: {
    borderBottomWidth: 1,
    borderStyle: "solid",
    borderColor: "#FF859B",
  },
});
