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
  Alert,
  ScrollView,
} from "react-native";

const backArrow = require("../assets/images/ic-back.png");
const frontArrow = require("../assets/images/ic-front.png");
const headerImage = require("../assets/images/logo-setting.png");
const accountImage = require("../assets/images/ic-account.png");
const alertImage = require("../assets/images/ic-alert.png");
const announceImage = require("../assets/images/ic-announce.png");
const askImage = require("../assets/images/ic-ask.png");
const infoImage = require("../assets/images/ic-info.png");

export default function Main({ navigation }) {
  return (
    <SafeAreaProvider
      initialMetrics={initialWindowMetrics}
      style={styles.container}
    >
      <View style={styles.head}>
        <View style={{ ...styles.head, justifyContent: "flex-start" }}>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.navigate("Mypage")}
          >
            <Image source={backArrow} style={{ width: 24, height: 24 }} />
          </TouchableOpacity>
        </View>
        <View style={{ ...styles.head, justifyContent: "center" }}>
          <Image
            source={headerImage}
            style={{ width: 129.68, height: 40, marginRight: 190 }}
          />
        </View>
      </View>
      <View style={styles.body}>
        <TouchableOpacity style={styles.setting}>
          <View style={{ alignItems: "flex-start" }}>
            <Image
              source={accountImage}
              style={{ width: 24, height: 24, marginRight: 12 }}
            />
          </View>
          <View>
            <Text style={styles.text}>계정</Text>
          </View>
          <View style={{ width: 260, alignItems: "flex-end" }}>
            <Image source={frontArrow} style={{ width: 20, height: 20 }} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={{ ...styles.setting, marginTop: 64 }}>
          <View style={{ alignItems: "flex-start" }}>
            <Image
              source={alertImage}
              style={{ width: 24, height: 24, marginRight: 12 }}
            />
          </View>
          <View>
            <Text style={styles.text}>알림</Text>
          </View>
          <View style={{ width: 260, alignItems: "flex-end" }}>
            <Image source={frontArrow} style={{ width: 20, height: 20 }} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={{ ...styles.setting, marginTop: 14 }}>
          <View style={{ alignItems: "flex-start" }}>
            <Image
              source={announceImage}
              style={{ width: 24, height: 24, marginRight: 12 }}
            />
          </View>
          <View>
            <Text style={styles.text}>공지사항</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={{ ...styles.setting, marginTop: 64 }}>
          <View style={{ alignItems: "flex-start" }}>
            <Image
              source={infoImage}
              style={{ width: 24, height: 24, marginRight: 12 }}
            />
          </View>
          <View>
            <Text style={styles.text}>정보</Text>
          </View>
          <View style={{ width: 260, alignItems: "flex-end" }}>
            <Image source={frontArrow} style={{ width: 20, height: 20 }} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={{ ...styles.setting, marginTop: 14 }}>
          <View style={{ alignItems: "flex-start" }}>
            <Image
              source={askImage}
              style={{ width: 24, height: 24, marginRight: 12 }}
            />
          </View>
          <View>
            <Text style={styles.text}>문의하기</Text>
          </View>
          <View style={{ width: 230, alignItems: "flex-end" }}>
            <Image source={frontArrow} style={{ width: 20, height: 20 }} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={{ ...styles.setting, marginTop: 65 }}>
          <View>
            <Text style={styles.text}>버전</Text>
          </View>
          <View style={{ width: 295, alignItems: "flex-end" }}>
            <Image source={frontArrow} style={{ width: 20, height: 20 }} />
          </View>
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
    flex: 1,
    // width: 375,
    // height: 40,
    marginVertical: 10,
    marginHorizontal: 5,
    flexDirection: "row",
    alignItems: "center",
  },
  body:{
    flex: 6,
    justifyContent: "center",
    alignItems: "center",
  },
  setting: {
    width: 343,
    height: 36,
    flexDirection: "row",
    borderBottomWidth: 1,
    borderStyle: "solid",
    borderColor: "#F5F5F5",
  },
  text: {
    fontSize: 18,
    fontWeight: 400,
  },
});
