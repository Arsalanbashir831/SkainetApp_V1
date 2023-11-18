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
import Refer from './src/screens/Refer';
import Privacy from './src/screens/Privacy';
import Contact from './src/screens/Contact';
import ChatStorage from './src/screens/ChatStorage';
import Invite from './src/screens/Invite';
import Storage from './src/screens/Storage';
import FAQ from './src/screens/FAQ';
import RateApp from './src/screens/RateApp';
import SkaiTitle from './src/screens/SkaiTitle';
import EmailInvite from './src/screens/EmailInvite';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
   <>
   <NavigationContainer>
   <MenuProvider>
   <Stack.Navigator
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
        <Stack.Screen name="Plans" component={Plans} options={{headerShown:false}} />
        <Stack.Screen name="Refer" component={Refer} options={{headerShown:false}} />
        <Stack.Screen name="Privacy" component={Privacy} options={{headerShown:false}} />
        <Stack.Screen name="Contact" component={Contact} options={{headerShown:false}} />
        <Stack.Screen name="Storage" component={Storage} options={{headerShown:false}} />
        <Stack.Screen name="FAQ" component={FAQ} options={{headerShown:false}} />
        <Stack.Screen name="Ratings" component={RateApp} options={{headerShown:false}} />
        <Stack.Screen name="Support" component={Contact} options={{headerShown:false}} />
     
        <Stack.Screen name="ChatStorage" component={ChatStorage} options={{headerShown:false}} />
        <Stack.Screen name="Invite" component={Invite} options={{headerShown:false}} />
        <Stack.Screen name="EmailInvite" component={EmailInvite} options={{headerShown:false}} />
        <Stack.Screen name="SkaiTitle" component={SkaiTitle} options={{headerShown:false}} />
       
      </Stack.Navigator>

   </MenuProvider>
   </NavigationContainer>
   </>
  )
}

export default App