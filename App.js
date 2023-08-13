import React from "react";
// import MainTabNav from "./routes/MainTabNav";
import MainNav from "./routes/MainNav";

export default function App() {
  return <MainNav />
}

// import { StatusBar } from "expo-status-bar";
// import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import SignupScreen1 from "./screens/SignupScreen1";
// import SignupScreen2 from "./screens/SignupScreen2";

// const Stack = createNativeStackNavigator();

// function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator
//         initialRouteName="Signup1"
//         screenOptions={{ headerShown: false }}
//       >
//         <Stack.Screen name="Signup1" component={SignupScreen1} />
//         <Stack.Screen name="Signup2" component={SignupScreen2} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// export default App;
