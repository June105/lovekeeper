import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Image,
  TextInput,
  Alert,
} from "react-native";
import Logo from "../assets/images/logo.png";
import * as Clipboard from "expo-clipboard";

const CODE = "A5SGHGDSB";

function SignupScreen1({ navigation }) {
  const copyToClipboard = async () => {
    Alert.alert("내 코드가 복사되었습니다");
    await Clipboard.setStringAsync(CODE);
  };
  return (
    <SafeAreaView style={styles.background}>
      <View style={styles.container}>
        <View style={styles.logo}>
          <Image source={Logo} />
        </View>
        <View style={styles.my}>
          <Text style={styles.text}>내 초대 코드</Text>
          <View style={styles.code}>
            <Text style={styles.codeText}>{CODE}</Text>
            <TouchableOpacity onPress={copyToClipboard} style={styles.paste}>
              <Text style={styles.pasteText}>복사</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.other}>
          <Text style={styles.text}>상대방 초대 코드</Text>
          <TextInput style={styles.code} />
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("Signup2")}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>연결하기</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default SignupScreen1;

const styles = StyleSheet.create({
  background: {
    backgroundColor: "white",
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 202,
    height: 62,
    marginTop: 190,
  },
  my: {
    marginTop: 73,
    marginBottom: 20,
  },
  paste: {
    width: 45,
    height: 23,
    marginLeft: 235,
    marginTop: -18,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#393939",
    borderRadius: 12,
  },
  pasteText: {
    marginTop: 2,
    marginLeft: 9,
    fontSize: 14,
    fontWeight: 400,
  },
  other: {
    marginBottom: 82,
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
  codeText: {
    color: "#393939",
    fontSize: 16,
    fontWeight: 400,
    marginTop: 20,
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
});
