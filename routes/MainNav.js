import * as React from "react";
import { StyleSheet, Image } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Main from "../screens/Main";
import Notice from "../screens/Notice";
import Forbidden from "../screens/Forbidden";
import Chat from "../screens/Chat";
import Diary from "../screens/Diary";
import Mypage from "../screens/Mypage";
import SignupScreen1 from "../screens/SignupScreen1";
import SignupScreen2 from "../screens/SignupScreen2";
import Mypage_sent from "../screens/Mypage_sent";
import Mypage_received from "../screens/Mypage_received";
import Ask2 from "../screens/Ask2";
import MakeForbidden from "../screens/MakeForbidden";
import Setting from "../screens/Setting";

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

const ic_forbidden = require("../assets/images/ic-forbidden.png");
const ic_chat = require("../assets/images/ic-chatting.png");
const ic_diary = require("../assets/images/ic-diary.png");
const ic_my = require("../assets/images/ic-MY.png");

function Tabs() {
  return (
    <Tab.Navigator
      initialRouteName="Main"
      activeColor="#393939"
      tabBarActiveBackgroundColor="transparent"
      inactiveColor="#ffffff"
      barStyle={{ backgroundColor: "#FF859B", paddingHorizontal: 10 }}
      tabBarOptions={{ activeTintColor: "none" }}
      screenOptions={{ headerShown: false }}
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
          tabBarIcon: ({ color }) => <Image source={ic_forbidden} />,
        }}
      />
      <Tab.Screen
        name="채팅"
        component={Chat}
        options={{
          title: "채팅",
          tabBarIcon: ({ color }) => <Image source={ic_chat} />,
        }}
      />
      <Tab.Screen
        name="다이어리"
        component={Diary}
        options={{
          title: "다이어리",
          tabBarIcon: ({ color }) => <Image source={ic_diary} />,
        }}
      />
      <Tab.Screen
        name="MY"
        component={Mypage}
        options={{
          title: "MY",
          tabBarIcon: ({ color }) => <Image source={ic_my} />,
        }}
      />
      {/* <Tab.Screen
        name="회원가입"
        component={SignupScreen1}
        options={{
          title: "회원가입",
        }}
      /> */}
    </Tab.Navigator>
  );
}

function Home() {
  return (
    <Stack.Navigator
      initialRouteName="Signup1"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Main" component={Main} />
      <Stack.Screen name="Notice" component={Notice} />
      <Stack.Screen name="Signup1" component={SignupScreen1} />
      <Stack.Screen name="Signup2" component={SignupScreen2} />
      <Stack.Screen name="Mypage_sent" component={Mypage_sent} />
      <Stack.Screen name="Mypage_received" component={Mypage_received} />
      <Stack.Screen name="Ask2" component={Ask2} />
      <Stack.Screen name="Forbidden" component={Forbidden} />
      <Stack.Screen name="MakeForbidden" component={MakeForbidden} />
      <Stack.Screen name="Setting" component={Setting} />
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
