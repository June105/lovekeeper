import { SafeAreaProvider, initialWindowMetrics } from 'react-native-safe-area-context';
import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity } from 'react-native';
import moment from 'moment';
import 'moment/locale/ko';

const backArrow = require('../assets/images/ic-back.png');
const headerImage = require('../assets/images/logo-lovekeeper.png');
const alarmImage = require('../assets/images/ic-alarm.png');
const mainImage = require('../assets/images/bg-circle.png');
const letterImage = require('../assets/images/img-편지.png'); //디자인 수정(230830)으로 이미지 변경
const btnImage = require('../assets/images/btn-ask.png');

const user1 = {
  name: '돌돌',
  partner: '미미'
}

const startDate = moment("2022-08-13");
const today = moment();
const dateTimeAgo = today.diff(startDate, 'days');


function Main({navigation}) {  
  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics} style={styles.container}>

      <View style={styles.head}>
        <Image source={backArrow} style={{width:24, height: 24, tintColor: 'transparent'}} />
        <Image source={headerImage} style={{width:129.68, height: 40,}} />  
        <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.navigate('Notice')}>
          <Image source={alarmImage} style={{ width: 24, height: 24, }} />
        </TouchableOpacity>      
      </View>

      <View style={styles.body}>
        <View style={styles.bodyText}>
          <Text style={{fontSize: 16}}>우리가 사랑한 지 <Text style={{fontWeight: 500, fontSize: 20}}>{dateTimeAgo}</Text> 일 째</Text>
          <Text style={{fontSize: 16}}>{user1.name}<Text style={{color: '#FF6565'}}>♥</Text>{user1.partner}</Text>
        </View>
        <View>
          <ImageBackground source={mainImage} style={{height:375, width:375}}>
            <View style={styles.letterImg}>
              <Image source={letterImage} style={{height:375, width:375, alignItems: 'center', justifyContent: 'center'}}></Image>
            </View>
            <View style={styles.btn}>
              <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.navigate('Request')}>
                <Image source={btnImage}  />
              </TouchableOpacity>
            </View>  
          </ImageBackground> 
        </View>
        <View style={styles.btn}>
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
    marginTop: 10,
    marginHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', 
  },
  body: {
    flex: 5,
  },
  bodyText:{
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 42,
    fontSize: 18,
  },
  letterImg:{
    flex:0.9, 
    justifyContent:'flex-end', 
    alignItems: 'flex-start'
  },
  btn:{
    marginTop: -50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default Main;