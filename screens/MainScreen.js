import React from 'react';
import { View, Text, ImageBackground, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;

const { width: SCREEN_Height } = Dimensions.get('window');

function MainScreen({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <ImageBackground
          style={styles.blurone}
          source={require('../assets/images/bg-circle.png')}
        >
          <Image
            style={styles.lovekeeperheart}
            source={require('../assets/images/logo-lovekeeperHeart.png')}
          />
          <Text style={styles.greeting}>
            러브키퍼를 찾아주셔서 감사해요. {"\n"}
            사랑 가득한 하루가 {"\n"}
            당신을 기다리고 있어요. {"\n"}
          </Text>
        </ImageBackground>
      </View>

      <View style={styles.bottom}>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress = {()=> navigation.navigate("LoginScreen")}>
          <View style={styles.pinkBox}>
            <Text style={styles.loginBT}>
              로그인
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity 
          activeOpacity={0.7}
          onPress = {()=> navigation.navigate("Signup1")}>
          <Text style={styles.precautions}>
            아직 회원이 아니신가요? <Text style={styles.red}>회원가입</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: SCREEN_WIDTH,
  },
  top: {
    marginTop: 70,
    flex: 1.8,
  },
  blurone: {
    flex: 1,
    width: 475,
    height: 574,
    justifyContent: 'center',
    alignItems: 'center',
    left: -55,
  },
  lovekeeperheart: {
    // bottom: 20,
  },
  greeting: {
    top: 5,
    color: '#fff',
    fontSize: 18,
    left: 25,
    fontWeight: 'bold',
  },
  bottom: {
    flex: 1,
  },
  pinkBox: {
    width: 300,
    height: 45,
    backgroundColor: '#FF859B',
    borderRadius: 50,
    padding: 13,
    paddingLeft: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginBT: {
    fontSize: 17,
    color: '#fff',
  },
  precautions: {
    top: 5,
    fontSize: 14,
    textAlign: 'center',
    lineHeight: 21,
    color: '#393939',
  },
  red: {
    color: '#FF859B',
  },
});

export default MainScreen;