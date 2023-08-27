import { StatusBar, Alert } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

export default function Account() {
  
  const handleLogout = () => {
    Alert.alert(
      '로그아웃',
      '로그아웃 하시겠습니까?',
      [
        {
          text: '아니오',
          style: 'cancel',
        },
        {
          text: '예',
          onPress: () => {
          },
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.top}>
        <View style={styles.imgbox}>
          <Image
            style={styles.back}
            source={require('../assets/images/ic-back.png')}
          />
          <Image
            style={styles.logo}
            source={require('../assets/images/logo-account.png')}
          />
        </View>
      </View>
      
      <View style={styles.part1}>
        <View style={styles.me}>
          <Text style={styles.t1}>내 계정</Text>
          <View style={styles.horizontalLine} />
          <Text style={styles.t2}>내 이메일</Text>
          <View style={styles.horizontalLine} />
        </View>
        <View style={styles.you}>
          <Text style={styles.t1}>상대방 계정</Text>
          <View style={styles.horizontalLine} />
          <Text style={styles.t2}>상대방 이메일</Text>
          <View style={styles.horizontalLine} />
        </View>
      </View>
      
      <View style={styles.part2}> 
        <TouchableOpacity onPress={handleLogout}>
          <Text style={styles.t3}>
            로그아웃
          </Text>
        </TouchableOpacity>
        <View style={styles.horizontalLine} />
        <Text style={styles.t3}>
          비밀번호 변경하기
        </Text>
        <View style={styles.horizontalLine} />
      </View>

      <View style={styles.part3}>
        <Text style={styles.t3}>
          상대방과 연결 끊기
        </Text>
        <View style={styles.horizontalLine} />
        <Text style={styles.t3}>
          회원 탈퇴
        </Text>
        <View style={styles.horizontalLine} />
      </View>

      <View style={styles.nav}>
        <Text>네비</Text>
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
  },
  imgbox: {
    marginTop: SCREEN_HEIGHT * 0.045,
    flexDirection: 'row',
    alignItems: 'center',
  },
  back: {
    marginLeft: -40,
  },
  logo: {
    width: SCREEN_WIDTH * 0.4,
    height: SCREEN_WIDTH * 0.1,
    marginLeft: SCREEN_WIDTH * 0.18,
    marginRight: SCREEN_WIDTH * 0.18,
  },
  top: {
    marginTop: SCREEN_HEIGHT * 0.01
  },
  line: {
    borderBottomWidth: 1,
    width: '80%',
    borderColor: 'black',
    marginTop: SCREEN_HEIGHT * 0.02, 
  },
  part1: {
    marginTop: SCREEN_HEIGHT * 0.03,
  },
  part2: {
    marginTop: SCREEN_HEIGHT * 0.07,
  },
  part3: {
    marginTop: SCREEN_HEIGHT * 0.07,
  },
  me: {

  },
  you: {
    marginTop: SCREEN_WIDTH * 0.03,
  },
  horizontalLine: {
    borderBottomWidth: 1,
    width: SCREEN_WIDTH * 0.9,
    borderColor: '#D9D9D9',
    marginTop: 10, // 선 위 여백 조절
  },
  t1: {
    fontSize: 14,
    color: '#767676',
    fontWeight: "500",
    marginTop: SCREEN_WIDTH * 0.03,
    marginBottom: -5,
  }, 
  t2: {
    fontSize: 16, 
    color: '#FF859B',
    fontWeight: "500",
    marginTop: SCREEN_WIDTH * 0.03,
  },
  t3: {
    fontSize: 16,
    color: '#393939',
    fontWeight: "500",
    marginTop: SCREEN_WIDTH * 0.03,
    marginBottom: -2,
  },
  nav: {
    marginTop: SCREEN_HEIGHT * 0.35,
  },
});