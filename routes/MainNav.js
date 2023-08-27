import React, { useState } from "react";
import { StyleSheet, Image } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer, getFocusedRouteNameFromRoute } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useTheme } from "react-native-paper";

import Main from "../screens/Main";
import Notice from "../screens/Notice";
import Request from "../screens/Request";
import Forbidden from "../screens/Forbidden";
import Chat from "../screens/Chat";
import Diary from "../screens/Diary";
import Mypage from "../screens/Mypage";
import MainScreen from "../screens/MainScreen";
import LoginScreen from "../screens/LoginScreen";
import SignupScreen1 from "../screens/SignupScreen1";
import SignupScreen2 from "../screens/SignupScreen2";
import MyPageEdit from "../screens/MyPageEdit";
import Mypage_sent from "../screens/Mypage_sent";
import Mypage_received from "../screens/Mypage_received";
import Ask_sent from "../screens/Ask_sent";
import Ask2 from "../screens/Ask2";
import MakeForbidden from "../screens/MakeForbidden";
import Setting from "../screens/Setting";
import Account from "../screens/Account";


const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

const ic_forbidden = require("../assets/images/ic-forbidden.png");
const ic_chatting = require("../assets/images/ic-chatting.png");
const ic_diary = require("../assets/images/ic-diary.png");
const ic_my = require("../assets/images/ic-MY.png");
const ic_forbidden_pressed = require("../assets/images/ic-forbidden-pressed.png");
const ic_chatting_pressed = require("../assets/images/ic-chatting-pressed.png");
const ic_diary_pressed = require("../assets/images/ic-diary-pressed.png");
const ic_my_pressed = require("../assets/images/ic-MY-pressed.png");

function Tabs() {

  const theme = useTheme();
  theme.colors.secondaryContainer = "transparent"

  return (
    <Tab.Navigator
      initialRouteName="Main"
      activeColor="#393939"
      tabBarActiveTintColor="#393939"
      inactiveColor="#ffffff"
      barStyle={{ backgroundColor: "#FF859B", paddingHorizontal: 10 }}
      tabBarOptions={{ activeBackgroundColor: "none" }}
      screenOptions={{ headerShown: false }}
      theme={{colors: {secondaryContainer: 'transparent'}}}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          title: "Home",
        }}
      />
      <Tab.Screen
        name="금칙어"
        component={Forbidden}
        options={{
          title: "금칙어",
          tabBarIcon: ({ color, focused }) => (
            <Image source={ focused? ic_forbidden_pressed :  ic_forbidden } /> ),
        }}
      />
      <Tab.Screen
        name="채팅"
        component={Chat}
        options={{
          title: "채팅",
          tabBarIcon: ({ color, focused }) => (
            <Image source={ focused? ic_chatting_pressed :  ic_chatting } /> ),
        }}
      />
      <Tab.Screen
        name="다이어리"
        component={Diary}
        options={{
          title: "다이어리",
          tabBarIcon: ({ color, focused }) => (
            <Image source={ focused? ic_diary_pressed :  ic_diary } /> ),
        }}
      />
      <Tab.Screen
        name="MY"
        component={Mypage}
        options={{
          title: "MY",
          tabBarIcon: ({ color, focused }) => (
            <Image source={ focused? ic_my_pressed :  ic_my } /> ),
        }}
      />
    </Tab.Navigator>
  );
}

function Home() {
  return (
    <Stack.Navigator
      initialRouteName="MainScreen"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Main" component={Main} />
      <Stack.Screen name="Notice" component={Notice} />
      <Stack.Screen name="Request" component={Request} />
      <Stack.Screen name="MainScreen" component={MainScreen} />
      <Stack.Screen name="Signup1" component={SignupScreen1} />
      <Stack.Screen name="Signup2" component={SignupScreen2} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="Mypage" component={Mypage} />
      <Stack.Screen name="MyPageEdit" component={MyPageEdit} />
      <Stack.Screen name="Mypage_sent" component={Mypage_sent} />
      <Stack.Screen name="Mypage_received" component={Mypage_received} />
      <Stack.Screen name="Ask_sent" component={Ask_sent} />
      <Stack.Screen name="Ask2" component={Ask2} />
      <Stack.Screen name="Forbidden" component={Forbidden} />
      <Stack.Screen name="MakeForbidden" component={MakeForbidden} />
      <Stack.Screen name="Setting" component={Setting} />
      <Stack.Screen name="Account" component={Account} />
    </Stack.Navigator>
  );
}

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
