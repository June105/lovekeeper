import React from "react";
import moment from "moment";
import "moment/locale/ko";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Button,
} from "react-native";
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from "react-native-safe-area-context";

const headerImage = require("../assets/images/logo-MY.png");
const backArrow = require("../assets/images/ic-back.png");
const settingIcon = require("../assets/images/ic-settings.png");
const profile = require("../assets/images/profile.png");

const user = {
  name: "미미",
  birthday: "2003년 12월 10일",
  bloodtype: "O형",
};

const dates = {
  date1: moment().format("ll"),
  date2: moment().format("ll"),
};

export default function Mypage({ navigation }) {
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
        <Image
          source={headerImage}
          style={{ width: 129.68, height: 40 }}
        ></Image>
        <Image source={settingIcon} style={{ width: 24, height: 24 }}></Image>
      </View>

      <View style={styles.body}>
        <View style={styles.profileArea}>
          <TouchableOpacity activeOpacity={0.7}>
            <Image source={profile} style={styles.profile} />
          </TouchableOpacity>
          <View style={styles.profileText}>
            <Text style={{ fontWeight: 500, fontSize: 18, marginBottom: 5 }}>
              {user.name}
            </Text>
            <Text style={{ color: "#FF859B", fontSize: 16 }}>
              {user.birthday}
            </Text>
            <Text style={{ color: "#FF859B", fontSize: 16 }}>
              {user.bloodtype}
            </Text>
          </View>
          {/* 편집 페이지로 이동 */}
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => alert("페이지 이동")}
            style={styles.editButton}
          >
            <Text>편집</Text>
          </TouchableOpacity>
        </View>

        {/* table 형식으로 전환하기 */}
        <View style={styles.postArea}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text style={styles.postAreaTitle}>보낸 편지함</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("Mypage_sent")}
            >
              <Text style={styles.seeAll}>전체 보기</Text>
            </TouchableOpacity>
          </View>
          {/* 컴포넌트 제작 및 Mypage_sent와 연결하기 */}
          <View style={styles.postTable}>
            <Text stlye={styles.postDate}>{dates.date2}</Text>
          </View>
        </View>

        <View style={styles.postArea}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text style={styles.postAreaTitle}>받은 편지함</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("Mypage_received")}
            >
              <Text style={styles.seeAll}>전체 보기</Text>
            </TouchableOpacity>
          </View>
          {/* 컴포넌트 제작 및 Mypage_received와 연결하기 */}
          <View style={styles.postTable}>
            <Text stlye={styles.postDate}>{dates.date1}</Text>
            <Text stlye={styles.postDate}>{dates.date1}</Text>
          </View>
        </View>
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
    marginTop: 10,
    marginHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  body: {
    flex: 7,
    marginHorizontal: 20,
    marginVertical: 10,
  },
  profileArea: {
    flexDirection: "row",
    marginHorizontal: 10,
    alignItems: "center",
    justifyContent: "space-between",
  },
  profile: {
    width: 100,
    height: 100,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#393939",
    borderRadius: 100,
  },
  profileText: {
    flexDirection: "column",
    marginRight: 20,
    alignItems: "flex-start",
    justifyContent: "center",
    fontSize: 16,
  },
  editButton: {
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#393939",
    borderRadius: 100,
    alignSelf: "flex-end",
    justifyContent: "flex-end",
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  seeAll: {
    fontSize: 14,
    textDecorationLine: "underline",
  },
  postArea: {
    marginHorizontal: 10,
    marginVertical: 30,
  },
  postAreaTitle: {
    fontSize: 18,
    marginBottom: 5,
  },
  postDate: {
    fontSize: 16,
    paddingHorizontal: 3,
    marginVertical: 10,
  },
  postTable: {
    borderWidth: 1,
    borderColor: "#393939",
    borderRadius: 15,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
});
