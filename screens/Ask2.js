import { useEffect, useState } from "react";
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from "react-native-safe-area-context";
import {
  StyleSheet,
  TextInput,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";

const backArrow = require("../assets/images/ic-back.png");
const headerImage = require("../assets/images/logo-lovekeeper.png");
const alarmImage = require("../assets/images/ic-alarm.png");

const NAME_1 = "돌돌";
const NAME_2 = "미미";

export default function Main({ navigation }) {
  const children = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map(
    () => (
      <View
        style={{
          width: 308,
          height: 1,
          backgroundColor: "#FF859B",
          marginTop: -24,
        }}
      ></View>
    )
  );
  return (
    <SafeAreaProvider
      initialMetrics={initialWindowMetrics}
      style={styles.container}
    >
      <View style={styles.head}>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.navigate("Main")}
        >
          <Image source={backArrow} style={{ width: 24, height: 24 }} />
        </TouchableOpacity>
        <Image source={headerImage} style={{ width: 129.68, height: 40 }} />
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.navigate("Notice")}
        >
          <Image source={alarmImage} style={{ width: 24, height: 24 }} />
        </TouchableOpacity>
      </View>
      <View style={styles.letter}>
        <Text
          style={{
            ...styles.letterText,
            marginTop: 25,
            marginRight: 240,
          }}
        >
          To. {NAME_2}
        </Text>
        <TextInput style={styles.text} multiline />
        <View style={{ marginTop: 12 }}>{children}</View>
        <Text style={{ ...styles.letterText, marginLeft: 210 }}>
          From. {NAME_1}
        </Text>
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  head: {
    flex: 1,
    marginHorizontal: 20,
    width: 375,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: -30,
  },
  letter: {
    width: 343,
    height: 500,
    marginBottom: 200,
    alignItems: "center",
    justifyContent: "space-betwee",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#FF859B",
    borderRadius: 22,
  },
  text: {
    width: 308,
    height: 400,
    fontSize: 19,
    marginBottom: -15,
  },
  letterText: {
    fontSize: 20,
    fontWeight: 600,
  },
});
