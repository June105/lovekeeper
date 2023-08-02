import * as React from 'react';
import { StyleSheet, Image } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import main from '../screens/main';
import forbidden from '../screens/forbidden';
import chat from '../screens/chat';
import diary from '../screens/diary';
import mypage from '../screens/mypage';
import SignupScreen1 from '../screens/SignupScreen1';

const Tab = createMaterialBottomTabNavigator();

const ic_forbiden = require('../assets/images/ic-금칙어.png');
const ic_chat = require('../assets/images/ic-채팅.png');
const ic_diary = require('../assets/images/ic-다이어리.png');
const ic_my = require('../assets/images/ic-MY.png');

export default function MyTabs() {
  return (
    <NavigationContainer style={styles.NavContainer}>
      <Tab.Navigator 
        initialRouteName='main' 
        inactiveColor='#ffffff'
        barStyle = {{ backgroundColor: '#FF859B', paddingHorizontal: 10, }}
        screenOptions={{ headerShown: false, }}>
        <Tab.Screen name='Home' component={main}/>
        {/* <Tab.Screen name='notice' component={notice}/> */}
        <Tab.Screen name='금칙어' component={forbidden} options={{ 
          title: '금칙어', tabBarIcon: ({size, color}) => {return (<Image source={ic_forbiden} />)} }} />
        <Tab.Screen name='채팅' component={chat} options={{ 
          title: '채팅', tabBarIcon: ({size, color}) => {return (<Image source={ic_chat} />)} }}/>
        <Tab.Screen name='다이어리' component={diary} options={{ 
          title: '다이어리', tabBarIcon: ({size, color}) => {return (<Image source={ic_diary} />)} }}/>
        <Tab.Screen name='MY' component={mypage} options={{ 
          title: 'MY', tabBarIcon: ({size, color}) => {return (<Image source={ic_my} />)} }}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  NavContainer: {
    maxHeight: 84,
  },
})
