import React, { useState } from 'react';
import { View, Text, SafeAreaView, Image, TextInput, TouchableOpacity, StyleSheet, TouchableWithoutFeedback, Keyboard } from 'react-native';
import axios from 'axios';

function LoginScreen() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  //수정
  const handleLogin = async () => {
    if (!email || !password) {
      if (!email) {
        alert("이메일을 입력 후 다시 눌러주세요.");
      } else {
        alert("비밀번호를 입력 후 다시 눌러주세요.");
      }
    } else {
      try {
        const response = await axios.post('https://port-0-node-express-28j232bllxd54si.sel5.cloudtype.app/login', {
          email,
          password
        });

        if (response.status == 200) {
          if (response.data.partnerId === null) {
            // 파트너 연결이 된 상태
            window.location.href = "/main";
          } else {
            // 연결이 되지 않았다면
            window.location.href = "/connect";
          } 
        } else {
          alert("로그인 실패 db에 없음"); // 로그인 실패 응답을 더 구체적으로 처리하려면 API 응답의 형식에 따라 조정이 필요합니다.
        }

      } catch (error) {
        if (error.response && error.response.status === 500) {
          alert("Server error");
        } else {
          //현재 401에러가 남
          alert(error.response.status + ' 상태입니다')
          console.log(error);
          // alert("로그인 실패 에러"); // 여기도 더 구체적인 오류 처리를 추가할 수 있습니다.
        }
      }
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.background}>
        <View style={styles.container}>
          <Image source={require('../assets/images/logo-lovekeeperHeart.png')} style={styles.logo} />
          <TextInput
  style={styles.input}
  placeholder="이메일"
  onChangeText={text => {
    console.log("이메일 입력: ", text);
    setEmail(text);
  }}
/>
<TextInput
  style={styles.input}
  placeholder="비밀번호"
  secureTextEntry={true}
  onChangeText={text => {
    console.log("비밀번호 입력: ", text);
    setPassword(text);
  }}
/>
          <TouchableOpacity onPress={handleLogin}>
            <View style={styles.loginButton}>
              <Text style={styles.loginButtonText}>시작하기</Text>
            </View>
          </TouchableOpacity>
          <Text style={styles.signUpLink}>비밀번호를 잊으셨나요?</Text>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 202,
    height: 70,
    marginBottom: 80,
  },
  input: {
    width: 300,
    height: 50,
    fontSize: 16,
    borderBottomWidth: 1,
    borderColor: '#393939',
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  loginButton: {
    marginTop: 60,
    marginBottom: 10,
    backgroundColor: '#FF859B',
    width: 300,
    height: 44,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginButtonText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 18,
  },
  signUpLink: {
    marginTop: 2,
    color: '#FF859B',
    fontSize: 15,
    fontWeight: '600',
  },
});

export default LoginScreen;