import {
  SafeAreaProvider,
  initialWindowMetrics,
} from "react-native-safe-area-context";
import { useEffect, useState } from "react";
import {
  StyleSheet,
  TextInput,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Alert,
  ScrollView,
} from "react-native";

const backArrow = require("../assets/images/ic-back.png");
const headerImage = require("../assets/images/logo-forbidden.png");
const alarmImage = require("../assets/images/ic-alarm.png");

export default function Main({ navigation }) {
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const [text3, setText3] = useState("");
  var num1 = text1.length;
  var num2 = text2.length;
  var num3 = text3.length;
  const onChangeText1 = (payload) => setText1(payload);
  const onChangeText2 = (payload) => setText2(payload);
  const onChangeText3 = (payload) => setText3(payload);
  return (
    <SafeAreaProvider
      initialMetrics={initialWindowMetrics}
      style={styles.container}
    >
      <View style={styles.head}>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.navigate("Forbidden")}
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

      {/* 스크롤뷰로 바꾸는 건 어떨까요? -비모 */}
      <View style={{ ...styles.layout, height: 80 }}>
        <Text style={styles.text}>금칙어</Text>
        <View style={{ ...styles.input, height: 32 }}>
          <TextInput
            style={{ width: 283 }}
            maxLength={12}
            onChangeText={onChangeText1}
          ></TextInput>
        </View>
        <Text style={styles.length}>{num1}/12</Text>
      </View>
      <View style={styles.layout}>
        <Text style={styles.text}>등록 이유</Text>
        <View style={{ ...styles.input, height: 153 }}>
          <TextInput
            style={styles.inText}
            onChangeText={onChangeText2}
            maxLength={100}
            multiline
            placeholder="이 단어를 싫어하는 이유는요."
          ></TextInput>
        </View>
        <Text style={styles.length} maxLength={100} multiline>
          {num2}/100
        </Text>
      </View>
      <View style={{ ...styles.layout, marginBottom: 100 }}>
        <Text style={styles.text}>해결 방안</Text>
        <View style={{ ...styles.input, height: 162 }}>
          <TextInput
            style={styles.inText}
            onChangeText={onChangeText3}
            multiline
            returnKeyType="done"
            placeholder="  이렇게 말해 주길 바라요."
          ></TextInput>
        </View>
        <Text style={styles.length}>{num3}/100</Text>
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
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: -30,
  },
  layout: {
    width: 343,
    height: 210,
    backgroundColor: "#F5F5F5",
    borderRadius: 12,
    marginBottom: 28,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    width: 303,
    height: 24,
    fontSize: 18,
    fontWeight: 400,
    color: "#393939",
  },
  length: {
    width: 303,
    textAlign: "right",
    color: "#767676",
    fontSize: 12,
    fontWeight: 400,
  },
  input: {
    backgroundColor: "white",
    width: 303,
    borderRadius: 18,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#393939",
    alignItems: "center",
    justifyContent: "center",
  },
  inText: {
    width: 263,
    height: 122,
  },
});
