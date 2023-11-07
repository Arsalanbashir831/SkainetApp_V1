//import { View, Text } from 'react-native'
import React from 'react'
import Splash from './src/screens/Splash'
import OnBoard from './src/screens/OnBoard';
import Login from './src/screens/Login';
import Signup from './src/screens/Signup';
import { NavigationContainer } from '@react-navigation/native';
import ForgotPin from './src/screens/ForgotPin';
import NewPin from './src/screens/NewPin';
import ChatListBottom from './src/navigation/ChatListBottom';
import Profile from './src/screens/Profile';
import Otp from './src/screens/Otp';
import Chat from './src/screens/Chat';
import { MenuProvider } from 'react-native-popup-menu';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Plans from './src/screens/Plans';
const Stack = createNativeStackNavigator();
const App = () => {
  return (
   <>
   <NavigationContainer>
   <MenuProvider>
   {/* <Stack.Navigator
            initialRouteName="Splash"
            screenOptions={{
              stackAnimation: 'slide_from_right', // Slide in from the right
              stackPresentation: 'push', // Slide-out behavior
              headerShown: false, // Hide the header by default
            }}
          >
        <Stack.Screen name="Splash" component={Splash} options={{headerShown:false}} />
        <Stack.Screen name="OnBoard" component={OnBoard} options={{headerShown:false}} />
        <Stack.Screen name="Login" component={Login} options={{headerShown:false}} />
        <Stack.Screen name="ForgotPin" component={ForgotPin} options={{headerShown:false}} />
        <Stack.Screen name="NewPin" component={NewPin} options={{headerShown:false}} />
        <Stack.Screen name="Signup" component={Signup} options={{headerShown:false}} />
        <Stack.Screen name="Otp" component={Otp} options={{headerShown:false}} />
        <Stack.Screen name="ChatListBottom" component={ChatListBottom} options={{headerShown:false}} />
        <Stack.Screen name="Chat" component={Chat} options={{headerShown:false}} />
        <Stack.Screen name="Profile" component={Profile} options={{headerShown:false}} />
       
      </Stack.Navigator> */}
<Plans></Plans>
  
   </MenuProvider>
   </NavigationContainer>
   </>
  )
}

export default App