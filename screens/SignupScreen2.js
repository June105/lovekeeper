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

import Profile from "../assets/images/profile.png";

function SignupScreen2() {
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
    <SafeAreaView style={styles.background}>
      <View style={styles.container}>
        <View style={styles.head}>
          <TouchableOpacity>
            <Image source={Profile} style={styles.profile} />
          </TouchableOpacity>
        </View>
        <View style={{ ...styles.other, marginTop: 30 }}>
          <Text style={styles.text}>이름</Text>
          <TextInput style={styles.code} />
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
          <Text style={{ ...styles.text, marginBottom: 5 }}>혈액형</Text>
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
          <View style={styles.code} />
        </View>
        <TouchableOpacity>
          <View style={{ ...styles.button, marginTop: 35 }}>
            <Text style={styles.buttonText}>연결하기</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default SignupScreen2;

const styles = StyleSheet.create({
  background: {
    backgroundColor: "white",
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  head: {
    marginTop: 150,
  },
  profile: {
    width: 100,
    height: 100,
    borderWidth: 1,
    borderStyle: "solid",
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
