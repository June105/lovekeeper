import React, { useState, useEffect } from "react";
import moment from "moment";
import "moment/locale/ko";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from "react-native";
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from "react-native-safe-area-context";

const headerImage = require("../assets/images/logo-sent.png");
const backArrow = require("../assets/images/ic-back.png");
const settingIcon = require("../assets/images/ic-settings.png");

const createdDate = moment().format("LL");

export default function Mypage_sent({ navigation }) {
  return (
    <SafeAreaProvider
      initialMetrics={initialWindowMetrics}
      style={styles.container}
    >
      <View style={styles.head}>
        {/* main과 연결이 아닌 뒤로가기로 변경 */}
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.navigate("Main")}
        >
          <Image source={backArrow} style={{ width: 24, height: 24 }} />
        </TouchableOpacity>
        <Image source={headerImage} style={{ width: 158, height: 49 }}></Image>
        <Image
          source={settingIcon}
          style={{ width: 24, height: 24, tintColor: "transparent" }}
        ></Image>
      </View>

      <View style={styles.body}>
        {/* 컴포넌트로 제작하기 */}
        <TouchableOpacity onPress={() => alert("Loading...")}>
          <Text style={styles.postDate}>{createdDate}</Text>
          <View style={styles.line}></View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => alert("Loading...")}>
          <Text style={styles.postDate}>{createdDate}</Text>
          <View style={styles.line}></View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => alert("Loading...")}>
          <Text style={styles.postDate}>{createdDate}</Text>
          <View style={styles.line}></View>
        </TouchableOpacity>
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  head: {
    flex: 0.9,
    marginTop: 20,
    marginHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  body: {
    flex: 7,
    marginHorizontal: 20,
    // marginVertical: 10,
  },
  postDate: {
    fontSize: 16,
    paddingHorizontal: 3,
    paddingTop: 5,
    marginVertical: 10,
  },
  line: {
    height: 1,
    marginTop: 5,
    backgroundColor: "#D9D9D9",
    opacity: 0.96,
    alignSelf: "stretch",
  },
  date: {
    fontSize: 16,
    paddingHorizontal: 5,
    marginVertical: 5,
  },
  line: {
    height: 1,
    marginTop: 5,
    backgroundColor: "#D9D9D9",
    opacity: 0.96,
    alignSelf: "stretch",
  },
});
