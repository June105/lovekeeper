import * as React from 'react';
import { StyleSheet, Image } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import main from '../screens/main';
import notice from '../screens/notice';
import forbidden from '../screens/forbidden';
import chat from '../screens/chat';
import diary from '../screens/diary';
import mypage from '../screens/mypage';
import SignupScreen1 from '../screens/SignupScreen1';
import SignupScreen2 from '../screens/SignupScreen2';

const Tab = createMaterialBottomTabNavigator();

const ic_forbidden = require('../assets/images/ic-금칙어.png');
const ic_chat = require('../assets/images/ic-채팅.png');
const ic_diary = require('../assets/images/ic-다이어리.png');
const ic_my = require('../assets/images/ic-MY.png');

function Tabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#393939"
      tabBarActiveBackgroundColor="transparent"
      inactiveColor="#ffffff"
      barStyle={{ backgroundColor: '#FF859B', paddingHorizontal: 10 }}
      tabBarOptions={{ activeTintColor: 'none' }}
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Home',
        }}
      />
      <Tab.Screen
        name="금칙어"
        component={forbidden}
        options={{
          title: '금칙어',
          tabBarIcon: ({ color }) => <Image source={ic_forbidden} />,
        }}
      />
      <Tab.Screen
        name="채팅"
        component={chat}
        options={{
          title: '채팅',
          tabBarIcon: ({ color }) => <Image source={ic_chat} />,
        }}
      />
      <Tab.Screen
        name="다이어리"
        component={diary}
        options={{
          title: '다이어리',
          tabBarIcon: ({ color }) => <Image source={ic_diary} />,
        }}
      />
      <Tab.Screen
        name="MY"
        component={mypage}
        options={{
          title: 'MY',
          tabBarIcon: ({ color }) => <Image source={ic_my} />,
        }}
      />
    </Tab.Navigator>
  );
}

function Home() {
  return (
    <Stack.Navigator initialRouteName="main" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="main" component={main} />
      <Stack.Screen name='notice' component={notice} />
      <Stack.Screen name="Signup1" component={SignupScreen1} />
      <Stack.Screen name="Signup2" component={SignupScreen2} />
    </Stack.Navigator>
  );
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  NavContainer: {
    maxHeight: 84,
  },
});
