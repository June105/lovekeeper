import React, { useState, useEffect } from "react";
import moment from 'moment';
import 'moment/locale/ko';
import { Text, ScrollView, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { SafeAreaProvider, initialWindowMetrics } from "react-native-safe-area-context";

const headerImage = require('../assets/images/logo-알림.png');
const backArrow = require('../assets/images/ic-back.png');
const alarmImage = require('../assets/images/ic-alarm.png');

const jsonData = {
  appNotice: '[Notice] 러브키퍼 최신 버전이 출시됐어요! 지금 바로 앱스토어에서 확인해보세요',
  user: '돌돌',
  partner: '미미',
}

const notiTimeAgo = moment().startOf('minute').fromNow();

function Notice({ navigation }) {

  const [mainData, setMainData] = useState(jsonData);

  return(
        <SafeAreaProvider initialMetrics={initialWindowMetrics} style={styles.container}>

          <View style={styles.head}>
            <TouchableOpacity activeOpacity={0.7} onPress={() => 
                navigation.navigate('Main')}>
                <Image source={backArrow} style={{width:24, height: 24, }} />
            </TouchableOpacity>
            <Image source={headerImage} style={{width:129.68, height: 40,}}></Image>  
            <Image source={alarmImage} style={{width: 24, height: 24, }}></Image> 
          </View>

          <View style={styles.body}>
            <View style={styles.appNotice}>
                  <Text style={styles.appNoticeText}>
                    {mainData.appNotice}
                  </Text>
            </View>
            <ScrollView style={styles.scrollArea}>
              <TouchableOpacity style={styles.newNotice} activeOpacity={0.7}>
                  <Text style={{ fontSize: 16 }}>
                    <Text style={styles.whiteColor}>{mainData.user2Name}</Text>님이 화해 요청을 보냈습니다.
                  </Text>
                  <Text style={{ color:'#393939', fontSize: 14, }}>
                    {notiTimeAgo}
                  </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.notice} activeOpacity={0.7}>
                <Text style={{ fontSize: 16 }}>
                  <Text style={styles.empColor}>{mainData.user2Name}</Text>님이 화해 요청을 보냈습니다.
                </Text>
                <Text style={{ color:'#393939', fontSize: 14, }}>
                  {notiTimeAgo}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.notice} activeOpacity={0.7}>
                <Text style={{ fontSize: 16 }}>
                  <Text style={styles.empColor}>{mainData.user2Name}</Text>님이 화해 요청을 보냈습니다.
                </Text>
                <Text style={{ color:'#393939', fontSize: 14, }}>
                  {notiTimeAgo}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.notice} activeOpacity={0.7}>
                <Text style={{ fontSize: 16 }}>
                  <Text style={styles.empColor}>{mainData.user2Name}</Text>님이 화해 요청을 보냈습니다.
                </Text>
                <Text style={{ color:'#393939', fontSize: 14, }}>
                  {notiTimeAgo}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.notice} activeOpacity={0.7}>
                <Text style={{ fontSize: 16 }}>
                  <Text style={styles.empColor}>{mainData.user2Name}</Text>님이 화해 요청을 보냈습니다.
                </Text>
                <Text style={{ color:'#393939', fontSize: 14, }}>
                  {notiTimeAgo}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.notice} activeOpacity={0.7}>
                <Text style={{ fontSize: 16 }}>
                  <Text style={styles.empColor}>{mainData.user2Name}</Text>님이 화해 요청을 보냈습니다.
                </Text>
                <Text style={{ color:'#393939', fontSize: 14, }}>
                  {notiTimeAgo}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.notice} activeOpacity={0.7}>
                <Text style={{ fontSize: 16 }}>
                  <Text style={styles.empColor}>{mainData.user2Name}</Text>님이 화해 요청을 보냈습니다.
                </Text>
                <Text style={{ color:'#393939', fontSize: 14, }}>
                  {notiTimeAgo}
                </Text>
              </TouchableOpacity>
            </ScrollView>
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
      flex: 0.9,
      marginTop: 10,
      marginHorizontal: 20,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between', 
    },
    body: {
      flex: 7,
    },
    appNotice: {
      flex:0.05,
      backgroundColor: '#767676',
      paddingHorizontal: 10,
      paddingVertical: 20,
      overflow: 'hidden',
      alignItems: 'center',
      justifyContent: 'center',
    },
    appNoticeText: {
      fontSize: 16,
      color: '#fff',
    },
    scrollArea:{
      flex:5,
    },
    newNotice: {
      backgroundColor: '#FF859B',
      marginHorizontal: 15,
      marginTop: 10,
      marginVertical: 5,
      paddingHorizontal: 15,
      paddingVertical: 15,
      borderWidth: 1,
      borderRadius: 18,
      borderColor: '#FF859B',
    },
    empColor: {
      color: '#FF859B'
    },
    whiteColor: {
      color: '#ffffff'
    },
    notice: {
      marginHorizontal: 15,
      marginVertical: 5,
      paddingHorizontal: 15,
      paddingVertical: 15,
      borderWidth: 1,
      borderRadius: 18,
      borderColor: '#FF859B',
    }
})

export default Notice;


