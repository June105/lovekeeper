import React, { useState } from 'react';
import { View, Text, SafeAreaView, Image, TextInput, TouchableOpacity, StyleSheet, TouchableWithoutFeedback, Keyboard } from 'react-native';

function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (!email || !password) {
      if (!email) {
        alert("이메일을 입력 후 다시 눌러주세요.");
      } else {
        alert("비밀번호를 입력 후 다시 눌러주세요.");
      }
    } else {
      //로그인 로직
      alert("로그인 완료");  //임시
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
            onChangeText={text => setEmail(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="비밀번호"
            secureTextEntry={true}
            onChangeText={text => setPassword(text)}
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