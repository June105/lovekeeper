// import * as React from 'react';
// import { StyleSheet, Image } from 'react-native';
// import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
// import { NavigationContainer } from '@react-navigation/native';

// import Main from '../screens/Main';
// import Forbidden from '../screens/Forbidden';
// import Chat from '../screens/Chat';
// import Diary from '../screens/Diary';
// import Mypage from '../screens/Mypage';
// import SignupScreen1 from '../screens/SignupScreen1';

// const Tab = createMaterialBottomTabNavigator();

// const ic_forbiden = require('../assets/images/ic-금칙어.png');
// const ic_Chat = require('../assets/images/ic-채팅.png');
// const ic_Diary = require('../assets/images/ic-다이어리.png');
// const ic_my = require('../assets/images/ic-MY.png');

// export default function MyTabs() {
//   return (
//     <NavigationContainer style={styles.NavContainer}>
//       <Tab.Navigator 
//         initialRouteName='Main' 
//         inactiveColor='#ffffff'
//         barStyle = {{ backgroundColor: '#FF859B', paddingHorizontal: 10, }}
//         screenOptions={{ headerShown: false, }}>
//         <Tab.Screen name='Home' component={Main}/>
//         {/* <Tab.Screen name='notice' component={notice}/> */}
//         <Tab.Screen name='금칙어' component={Forbidden} options={{ 
//           title: '금칙어', tabBarIcon: ({size, color}) => {return (<Image source={ic_forbiden} />)} }} />
//         <Tab.Screen name='채팅' component={Chat} options={{ 
//           title: '채팅', tabBarIcon: ({size, color}) => {return (<Image source={ic_Chat} />)} }}/>
//         <Tab.Screen name='다이어리' component={Diary} options={{ 
//           title: '다이어리', tabBarIcon: ({size, color}) => {return (<Image source={ic_Diary} />)} }}/>
//         <Tab.Screen name='MY' component={Mypage} options={{ 
//           title: 'MY', tabBarIcon: ({size, color}) => {return (<Image source={ic_my} />)} }}/>
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }

// const styles = StyleSheet.create({
//   NavContainer: {
//     maxHeight: 84,
//   },
// })
