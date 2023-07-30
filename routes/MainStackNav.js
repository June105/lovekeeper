// import * as React from 'react';
// import { StyleSheet, Image } from 'react-native';
// import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// // import { useTheme } from 'react-native-paper';

// import main from '../screens/main';
// import notice from '../screens/notice';
// import forbidden from '../screens/forbidden';
// import chat from '../screens/chat';
// import diary from '../screens/diary';
// import mypage from '../screens/mypage';


// const Tab = createMaterialBottomTabNavigator();
// const Stack = createStackNavigator();
// // const theme = useTheme();
// // theme.colors.secondaryContainer = "transperent"

// const ic_forbiden = require('../assets/images/ic-금칙어.png');
// const ic_chat = require('../assets/images/ic-채팅.png');
// const ic_diary = require('../assets/images/ic-다이어리.png');
// const ic_my = require('../assets/images/ic-MY.png');

// export default function Home() {
//   return(
//     <NavigationContainer style={styles.NavContainer}>
//       <Stack.Navigator initialRouteName='main' screenOptions={{headerShown: false}}>
//         <Stack.Screen name='main' component={Tabs} />
//         <Stack.Screen name='notice' component={notice} />
//       </Stack.Navigator>  
//     </NavigationContainer>
//   )
// }

// function Tabs() {
//   return (
//       <Tab.Navigator 
//         initialRouteName='main' 
//         activeColor='#393939'
//         tabBarActiveBackgroundColor='transparent'
//         inactiveColor='#ffffff'
//         barStyle = {{ backgroundColor: '#FF859B', paddingHorizontal: 10, }}
//         tabBarOptions={{ activeTintColor: 'none' }}
//         screenOptions={{ headerShown: false, }}>
//         <Tab.Screen name='Home' component={main}/>
//         <Tab.Screen name='금칙어' component={forbidden} options={{ 
//           title: '금칙어', tabBarIcon: ({color}) => {return (<Image source={ic_forbiden} />)} }} />
//         <Tab.Screen name='채팅' component={chat} options={{ 
//           title: '채팅', tabBarIcon: ({color}) => {return (<Image source={ic_chat} />)} }}/>
//         <Tab.Screen name='다이어리' component={diary} options={{ 
//           title: '다이어리', tabBarIcon: ({color}) => {return (<Image source={ic_diary} />)} }}/>
//         <Tab.Screen name='MY' component={mypage} options={{ 
//           title: 'MY', tabBarIcon: ({color}) => {return (<Image source={ic_my} />)} }}/>
//       </Tab.Navigator>
//   );
// }


// const styles = StyleSheet.create({
//   NavContainer: {
//     maxHeight: 84,
//   },

// })