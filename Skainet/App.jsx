//import { View, Text } from 'react-native'
import React from 'react'
import Splash from './src/screens/Splash'

import OnBoard from './src/screens/OnBoard';
import Login from './src/screens/Login';
import { Text, TouchableOpacity } from 'react-native';
import Signup from './src/screens/Signup';
import { NavigationContainer } from '@react-navigation/native';

import ForgotPin from './src/screens/ForgotPin';
import NewPin from './src/screens/NewPin';
import ChatList from './src/screens/ChatList';
import ChatListBottom from './src/navigation/ChatListBottom';
import Profile from './src/screens/Profile';
import Otp from './src/screens/Otp';
import Chat from './src/screens/Chat';
import { MenuProvider } from 'react-native-popup-menu';
const App = () => {
  return (
   <>
   <NavigationContainer>
   <MenuProvider>
<Chat></Chat>
   </MenuProvider>
   </NavigationContainer>
   </>
  )
}

export default App