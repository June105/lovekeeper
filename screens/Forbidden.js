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
const headerImage = require("../assets/images/logo-forbidden.png");
const alarmImage = require("../assets/images/ic-alarm.png");
const editImage = require("../assets/images/ic-write-white.png");
const deleteForbidden1 = require("../assets/images/ic-delete.png");

const NAME_1 = "돌돌";
const NAME_2 = "미미";

export default function Main({ navigation }) {
  const deleteForbidden = async () => {
    Alert.alert("삭제", "등록된 금칙어를 삭제하시겠습니까?", [
      { text: "삭제", style: "destructive" },
      { text: "취소" },
    ]);
  };
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
          onPress={() => navigation.navigate("Setting")}
        >
          <Image source={alarmImage} style={{ width: 24, height: 24 }} />
        </TouchableOpacity>
      </View>

      <View style={styles.body}>
        <ScrollView style={{ height: 400 }}>
          <View style={styles.line}>
            <Text style={styles.text}>ㄱ</Text>
          </View>
          <View style={styles.list}>
            <Text style={styles.forbiddenText}>고구마</Text>
            <TouchableOpacity onPress={() => deleteForbidden()}>
              <Image
                source={deleteForbidden1}
                style={{ width: 16, height: 16 }}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.line}>
            <Text style={styles.text}>ㄴ</Text>
          </View>
          <View style={styles.list}>
            <Text style={styles.forbiddenText}>나무늘보</Text>
            <TouchableOpacity onPress={() => deleteForbidden()}>
              <Image
                source={deleteForbidden1}
                style={{ width: 16, height: 16 }}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.line}>
            <Text style={styles.text}>ㄷ</Text>
          </View>
          <View style={styles.list}>
            <Text style={styles.forbiddenText}>당나귀</Text>
            <TouchableOpacity onPress={() => deleteForbidden()}>
              <Image
                source={deleteForbidden1}
                style={{ width: 16, height: 16 }}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.line}>
            <Text style={styles.text}>ㄹ</Text>
          </View>
          <View style={styles.list}>
            <Text style={styles.forbiddenText}>라면</Text>
            <TouchableOpacity onPress={() => deleteForbidden()}>
              <Image
                source={deleteForbidden1}
                style={{ width: 16, height: 16 }}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.line}>
            <Text style={styles.text}>ㅁ</Text>
          </View>
          <View style={styles.list}>
            <Text style={styles.forbiddenText}>마기꾼</Text>
            <TouchableOpacity onPress={() => deleteForbidden()}>
              <Image
                source={deleteForbidden1}
                style={{ width: 16, height: 16 }}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.list}>
            <Text style={styles.forbiddenText}>마귀꾼</Text>
            <TouchableOpacity onPress={() => deleteForbidden()}>
              <Image
                source={deleteForbidden1}
                style={{ width: 16, height: 16 }}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.list}>
            <Text style={styles.forbiddenText}>마귀</Text>
            <TouchableOpacity onPress={() => deleteForbidden()}>
              <Image
                source={deleteForbidden1}
                style={{ width: 16, height: 16 }}
              />
            </TouchableOpacity>
          </View>
        </ScrollView>
        <View style={{ width: 345, alignItems: "flex-end" }}>
          <TouchableOpacity onPress={() => navigation.navigate("MakeForbidden")}>
            <View style={styles.edit}>
              <Image source={editImage} />
            </View>
          </TouchableOpacity>
        </View>
      </View>
      
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // justifyContent: "center",
    // alignItems: "center",
  },
  // head: {
  //   flex: 1,
  //   width: 375,
  //   flexDirection: "row",
  //   alignItems: "center",
  //   justifyContent: "space-between",
  //   marginBottom: -30,
  // },
  head: {
    flex: 1,
    marginTop: 10,
    marginHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  body:{
    flex: 7,
    justifyContent: "center",
    alignItems: "center",
  },
  forbidden: {
    height: 640,
    backgroundColor: "red",
  },
  edit: {
    backgroundColor: "#FF859B",
    justifyContent: "center",
    alignItems: "center",
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  text: {
    fontSize: 16,
    fontWeight: 400,
    color: "#767676",
    marginBottom: 5,
  },
  line: {
    width: 335,
    borderBottomWidth: 1,
    borderStyle: "solid",
    borderColor: "#F5F5F5",
  },
  list: {
    width: 335,
    height: 44,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderStyle: "solid",
    borderColor: "#F5F5F5",
    marginBottom: 21,
  },
  forbiddenText: {
    color: "#393939",
    fontSize: 18,
    fontWeight: 400,
  },
});
