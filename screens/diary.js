import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Pressable, Image, ScrollView, Alert, Keyboard} from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { TextInput } from 'react-native-paper';
import { SafeAreaProvider, initialWindowMetrics } from 'react-native-safe-area-context';

// images
const backArrow = require('../assets/images/ic-back.png');
const diaryLogo = require('../assets/images/logo-다이어리.png');
const alarmImage = require('../assets/images/ic-alarm.png');
const heartImage = require('../assets/images/img-하트.png');
const writeIcon = require('../assets/images/ic-write.png');
const deleteIcon = require('../assets/images/ic-delete.png');
const writeBtn = require('../assets/images/btn-write.png');

// const RegisterRule =()=> (
//   
// )

// const appearKeyboard = () => {
//   const[KeyboardStatus, setKeyboardStatus] = useState('');

//   useEffect(() => {
//     const showKeyboard = Keyboard.addListener('keyboardDidShow', () => { setKeyboardStatus('Keyboard Shown')});
//     const hideKeyboard = Keyboard.addListener('keyboardDidHide', () => { setKeyboardStatus('Keyboard Hidden')});
    
//     return ()=> {
//       showKeyboard.remove();
//       hideKeyboard.remove();
//     };
//   }, []);

//   return (
//     <View style={styles.keyboardContainer}>
//       <TextInput style={styles.keyboardInput}
//         placeholder='여기 입력하세요'
//         onSubmitEditing={Keyboard.dismiss}>
//       </TextInput>
//     </View>
//   )
// };

const createDeleteButton = () => {
  Alert.alert('삭제', '등록된 규칙을 삭제하시겠습니까?', 
    [
      { text: '삭제', onPress: () => console.log('delete'), style: 'destructive' },
      { text: '취소', onPress: () => console.log('cancel'), },
    ],
    );
  };

  
function Dairy({navigation}) {

  const showKeyboard = () =>{
    Keyboard.dismiss();
    Keyboard.show();
  }

  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics} style={styles.container}>
      <View style={styles.head}>
        <TouchableOpacity activeOpacity={0.7} onPress={() => 
            navigation.navigate('main')}>
          <Image source={backArrow} style={{width:24, height: 24, }} />
        </TouchableOpacity>
        <Image source={diaryLogo} style={{width:129.68, height: 40, }}></Image>
        <TouchableOpacity activeOpacity={0.7} onPress={() =>
            navigation.navigate('notice')}>
          <Image source={alarmImage} style={{width: 24, height: 24, }}></Image>
        </TouchableOpacity>  
      </View>

      <View style={styles.rules2diary}>
        <Pressable style={styles.pressedBtn}>
          <Text style={styles.whiteText}>규칙</Text>
        </Pressable>
        <Pressable style={styles.unpressedBtn}>
          <Text style={styles.greyText}>일기</Text>
        </Pressable>
      </View>

      <View style={styles.body}>
        <ScrollView>
          <View style={styles.section1}>
            <View style={styles.section2}>
              <Image source={heartImage} style={{width: 32, height: 32, marginRight: 10,}}/>
              <View style={styles.ruleSection}>
                <View style={styles.wordSection}>
                  <Text style={styles.rule}>거짓말하지 않기</Text>
                  <Text style={styles.datePassed}>1일 전</Text>
                </View>
              </View>
              <View style={styles.iconSection}>
                <TouchableOpacity>
                  <Image source={writeIcon} style={styles.icon}></Image>
                </TouchableOpacity>
                <TouchableOpacity onPress={createDeleteButton}>
                  <Image source={deleteIcon} style={styles.icon}></Image>
                </TouchableOpacity>
              </View>  
            </View>
            <View style={styles.line}></View>
          </View>
          <View style={styles.section1}>
            <View style={styles.section2}>
              <Image source={heartImage} style={{width: 32, height: 32, marginRight: 10,}}/>
              <View style={styles.ruleSection}>
                <View style={styles.wordSection}>
                  <Text style={styles.rule}>바보라고 부르지 않기</Text>
                  <Text style={styles.datePassed}>1일 전</Text>
                </View>
              </View>
              <View style={styles.iconSection}>
                <TouchableOpacity>
                  <Image source={writeIcon} style={styles.icon}></Image>
                </TouchableOpacity>
                <TouchableOpacity onPress={createDeleteButton}>
                  <Image source={deleteIcon} style={styles.icon}></Image>
                </TouchableOpacity>
              </View>  
            </View>
            <View style={styles.line}></View>
          </View> 
        </ScrollView>
      </View>

      <TouchableWithoutFeedback onPress={showKeyboard}>
        {/* <Image source={writeBtn} objectFit={'cover'} style={styles.registerBtn}/> */}
        <TextInput
          placeholder='여기를 터치하세요'>
        </TextInput>
      </TouchableWithoutFeedback>
    </SafeAreaProvider>    
  );
}

function deleteForbidden() {

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  head: {
    flex: 1.2,
    marginTop: 10,
    marginHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', 
  },
  body: {
    flex: 7,
  },
  rules2diary: {
    flexDirection: 'row',
    marginHorizontal: 20,

  },
  pressedBtn: {
    borderWidth: 1,
    borderColor: '#767676',
    backgroundColor: '#767676',
    marginRight: 5,
    paddingHorizontal: 10,
    paddingVertical: 2,
  },
  unpressedBtn:{
    borderWidth: 1,
    borderColor: '#767676',
    marginRight: 5,
    paddingHorizontal: 10,
    paddingVertical: 2,
  },
  whiteText: {
    color: '#fff',
  },
  greyText: {
    color: '#767676',
  },

  section1: {
    marginVertical: 5,
    marginHorizontal: 20,
  },
  section2: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  rule:{
    fontSize: 18,
    marginBottom: 5,
  },
  datePassed: {
    fontSize: 12,
    color: '#767676',
  },
  wordSection:{
    flexDirection: 'column',
    paddingHorizontal: 5,
  },
  ruleSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  iconSection: {
    flexDirection: 'row',
    position: 'absolute',
    right: 0,
    alignSelf: 'flex-end',
    marginHorizontal: 10,
    paddingVertical: 5,
  },
  icon:{
    width: 16, 
    height: 16,
    marginHorizontal: 3,
  },
 
  registerBtn: {
    zIndex: 1,
    position: 'relative',
    alignSelf: 'flex-end',
    margin: 5,
    width: 55,
    height: 55,
  },
  line:{
    height: 1,
    marginTop: 5,
    backgroundColor: '#D9D9D9',
    opacity: 0.96,
    alignSelf:'stretch',
  },

  // keyboardContainer: {
  //   marginBottom: 20,
  // },
  // keyboardInput: {
  //   height: 16,
  //   backgroundColor: '#fff',
  // }


});


export default Dairy;