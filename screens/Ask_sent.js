import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Dimensions, TouchableHighlight, Alert } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

export default function Ask_sent() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <View style={styles.box}>
        <View style={styles.top}>
          <View style={styles.imgbox}>
            <Image
              source={require('../assets/images/ic-back.png')}
            />
            <Image
              style={styles.logo}
              source={require('../assets/images/logo-lovekeeper.png')}
            />
            <Image
              source={require('../assets/images/ic-alarm.png')}
            />
          </View>
        </View>

        <View style={styles.body}>
          <Image
            style={styles.send}
            source={require('../assets/images/img-send.png')}
          />
          <Text style={styles.text}><Text style={styles.red}>편지</Text>가 전달되었어요{"\n"}</Text>
          <Text style={styles.text1}>소중한 마음은은 보낸 편지함에서 확인할 수 있어요</Text>
          <View style={styles.bottonbox}>
            <TouchableHighlight
              style={[styles.botton, { borderColor: '#393939' }]}
              onPress={() => Alert.alert('편지함 연결 필요')}
              underlayColor="#FFFFFF"
            >
              <Text style={[styles.bottonText, { color: '#393939' }]}>보낸 편지함</Text>
            </TouchableHighlight>
            <TouchableHighlight
              style={[styles.botton, { borderColor: '#FF859B' }]}
              onPress={() => Alert.alert('홈 연결 필요')}
              underlayColor="#FFFFFF"
            >
              <Text style={[styles.bottonText, { color: '#FF859B' }]}>홈으로 가기</Text>
            </TouchableHighlight>
          </View>
        </View>
      </View>

      <View style={styles.navigation}>
        <Text>네비게이션바 자리</Text>
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
  box: {
    height: SCREEN_HEIGHT - 84,
  },
  top: {
    flex: 1.3,
    width: SCREEN_WIDTH,
    alignItems: 'center',
    justifyContent: 'center',
  },
  body: {
    flex: 8,
    width: SCREEN_WIDTH,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 40,
  },
  navigation: {
    width: SCREEN_WIDTH,
    backgroundColor: '#FF859B',
    height: 84,
  },
  imgbox: {
    marginTop: SCREEN_HEIGHT * 0.045,
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: SCREEN_WIDTH * 0.4,
    height: SCREEN_WIDTH * 0.1,
    marginLeft: SCREEN_WIDTH * 0.18,
    marginRight: SCREEN_WIDTH * 0.18,
  },
  text: {
    marginTop: 40,
    fontSize: 18,
    textAlign: 'center',
    color: '#393939',
  },
  red: {
    color: '#FF859B',
  },
  text1: {
    fontSize: 16,
    textAlign: 'center',
    color: '#393939',
    marginTop: -15,
  },
  bottonbox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  botton: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#000',
    margin: 10,
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottonText: {
    fontSize: 14,
  },
});