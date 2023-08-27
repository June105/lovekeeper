import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Image,
  TextInput,
  Button,
  Pressable,
} from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import RNPickerSelect from "react-native-picker-select";
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from "react-native-safe-area-context";

const headerImage = require("../assets/images/logo-MY.png");
const backArrow = require("../assets/images/ic-back.png");
const settingIcon = require("../assets/images/ic-settings.png");
import Profile from "../assets/images/profile.png";

function SignupScreen2({ navigation }) {
  var today = new Date();
  var year = today.getFullYear();
  var month = ("0" + (today.getMonth() + 1)).slice(-2);
  var day = ("0" + today.getDate()).slice(-2);
  var dateString = year + "." + month + "." + day;

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [birthday, setBirthday] = useState(dateString);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    hideDatePicker();
    var year1 = date.getFullYear();
    var month1 = ("0" + (date.getMonth() + 1)).slice(-2);
    var day1 = ("0" + date.getDate()).slice(-2);
    var dateString1 = year1 + "." + month1 + "." + day1;
    setBirthday(dateString1);
  };

  const placeholder = "혈액형을 선택해주세요";

  return (
    <SafeAreaProvider 
      initialMetrics={initialWindowMetrics}
      style={styles.container}>

        <View style={styles.head}>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.navigate("Mypage")}
          >
            <Image source={backArrow} style={{ width: 24, height: 24 }} />
          </TouchableOpacity>
          <Image source={headerImage} style={{ width: 129.68, height: 40 }} />
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.navigate("Setting")}
          >
            <Image source={settingIcon} style={{ width: 24, height: 24 }} />
          </TouchableOpacity>
        </View>

        <View style={styles.body}>
          <View style={styles.picture}>
            <TouchableOpacity>
              <Image source={Profile} style={styles.profile} />
            </TouchableOpacity>
          </View>
          <View style={{ ...styles.other, marginTop: 30 }}>
            <Text style={styles.text}>이름</Text>
            <TextInput style={{ ...styles.code, marginTop: 5, fontSize: 16 }} />
          </View>
          <View style={{ ...styles.other, marginTop: 30 }}>
            <Text style={styles.text}>생년월일</Text>
            <Pressable onPress={showDatePicker} style={styles.code}>
              <Text style={styles.date}>{birthday}</Text>
            </Pressable>
            <DateTimePickerModal
              isVisible={isDatePickerVisible}
              mode="date"
              onConfirm={handleConfirm}
              onCancel={hideDatePicker}
            />
          </View>
          <View style={{ ...styles.other, marginTop: 30 }}>
            <Text style={{ ...styles.text, marginBottom: 10 }}>혈액형</Text>
            <RNPickerSelect
              style={{ height: 21, width: 260 }}
              placeholder={{ label: placeholder }}
              onValueChange={(value) => console.log(value)}
              itemStyle={{ ...styles.blood, fontSize: 30, fontWeight: 400 }}
              items={[
                { label: "A형", value: "A형" },
                { label: "B형", value: "B형" },
                { label: "O형", value: "O형" },
                { label: "AB형", value: "AB형" },
              ]}
            />
            <View style={{ ...styles.code, height: 10 }} />
          </View>
          <TouchableOpacity onPress={() => navigation.navigate("Mypage")}>
            <View style={{ ...styles.button, marginTop: 35 }}>
              <Text style={styles.buttonText}>편집하기</Text>
            </View>
          </TouchableOpacity>
        </View>


    </SafeAreaProvider>
  );
}

export default SignupScreen2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  head: {
    flex: 1,
    // width: 360,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 10,
    marginHorizontal: 20,
  },
  body: {
    flex: 6,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  picture: {
    marginTop: 90,
  },
  profile: {
    width: 100,
    height: 100,
    borderWidth: 1,
    borderColor: "#393939",
    borderRadius: 100,
  },
  text: {
    color: "#767676",
    marginBottom: -10,
  },
  code: {
    width: 282,
    height: 50,
    borderBottomWidth: 1,
    borderStyle: "solid",
    borderColor: "#393939",
  },
  button: {
    backgroundColor: "#FF859B",
    color: "white",
    width: 282,
    height: 44,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 22,
    marginBottom: 200,
  },
  buttonText: {
    color: "white",
    fontWeight: 400,
    fontSize: 18,
  },
  date: {
    marginTop: 20,
    color: "#393939",
    fontSize: 16,
    fontWeight: 400,
  },
  blood: {
    color: "#393939",
    fontSize: 16,
    fontWeight: 400,
  },
});
