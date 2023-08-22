import React, { useState } from 'react';
import { SafeAreaProvider, initialWindowMetrics } from 'react-native-safe-area-context';
import { StyleSheet, Text, TextInput, View, Image, TouchableOpacity, ScrollView, Pressable } from 'react-native';

const backArrow = require('../assets/images/ic-back.png');
const headerImage = require('../assets/images/logo-lovekeeper.png');
const alarmImage = require('../assets/images/ic-alarm.png');
const unlockIcon = require('../assets/images/ic-unlock.png');
const lockIcon = require('../assets/images/ic-lock.png');
const writeBtn = require('../assets/images/btn-write-word.png');

const text = {
  input1 : '편지를 작성하게 된 계기가 무엇인가요?',
  input2 : '왜 그런 일이 일어났나요?',
  input3 : '현재 본인의 감정은 어떠한가요?',
  input4 : '관계 유지를 위한 개선 방안은 무엇인가요?',
  input5 : '사랑이 담긴 사과의 말을 전해 주세요.',
}

function Request({navigation}) {  
  
  const [lock, setLock] = useState(false);

  let lockImg = unlockIcon;
  if (lock === false){
    lockImg = lockIcon;
  }
  else {
    lockImg = unlockIcon;
  }

  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics} style={styles.container}>

      <View style={styles.head}>
        <TouchableOpacity activeOpacity={0.7} onPress={() => 
            navigation.navigate('Main')}>
          <Image source={backArrow} style={{width:24, height: 24, }} />
        </TouchableOpacity>
        <Image source={headerImage} style={{width:129.68, height: 40,}} />  
        <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.navigate('Notice')}>
          <Image source={alarmImage} style={{ width: 24, height: 24, }} />
        </TouchableOpacity>      
      </View>

      <View style={styles.body}>
        <ScrollView>
          <View style={styles.section}>
            <View>
              <View style={styles.inputArea}>
                <Text style={styles.question}>{text.input1}</Text>
                <Pressable activeOpacity={0.7} onPress={()=> setLock(!false)}>
                  <Image source={lockIcon} />
                </Pressable>
              </View>
              <View style={styles.line} />
            </View>
            <View>
              <View style={styles.inputArea}>
                <Text style={styles.question}>{text.input2}</Text>
                <TouchableOpacity>
                  <Image source={unlockIcon} />
                </TouchableOpacity>
              </View>
              <View style={styles.line} />
            </View>
            <View>
              <View style={styles.inputArea}>
                <Text style={styles.question}>{text.input3}</Text>
                <TouchableOpacity>
                  <Image source={unlockIcon} />
                </TouchableOpacity>
              </View>
              <View style={styles.line} />
            </View>
            <View>
              <View style={styles.inputArea}>
                <Text style={styles.question}>{text.input4}</Text>
                <TouchableOpacity>
                  <Image source={unlockIcon} />
                </TouchableOpacity>
              </View>
              <View style={styles.line} />
            </View>
            <View>
              <View style={styles.inputArea}>
                <Text style={styles.question}>{text.input5}</Text>
                <TouchableOpacity>
                  <Image source={unlockIcon} />
                </TouchableOpacity>
              </View>
              <View style={styles.line} />
            </View>
          </View>
        </ScrollView>

          <View style={{...styles.section, marginVertical: 20, alignItems: 'center'}}>
            <TouchableOpacity onPress={() => alert('작성 완료하시겠습니까?')}>
              <Image source={writeBtn} />
            </TouchableOpacity>
            <Pressable 
              onPress={() => alert('화면 이동')}>
              <Text style={styles.link}>
                내 맘대로 쓸래요
              </Text>
            </Pressable>
          </View>
      </View>

    </SafeAreaProvider>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  head: {
    flex: 1,
    marginHorizontal: 20,
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', 
  },
  body: {
    flex: 7,
  },
  section:{
    flexDirection: 'column',
    marginTop: 0,  
    marginHorizontal: 20,
  },
  inputArea: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 30,
  },
  'inputArea:first-child':{
    marginTop: 0,
  },
  question:{
    fontSize: 18,
  },
  link: {
    paddingTop: 5,
    fontSize: 14,
    color: '#393939',
    textDecorationLine: 'underline',
  },
  line:{
    height: 1,
    marginTop: 5,
    backgroundColor: '#D9D9D9',
    opacity: 0.96,
    alignSelf:'stretch',
  },

});


export default Request;