import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ChatList from '../screens/ChatList';
import Settings from '../screens/Settings';
import React from 'react';
import Icon from 'react-native-vector-icons/Feather'


const Tab = createBottomTabNavigator();

const ChatListBottom = () => {
  return (
    
    <Tab.Navigator
     screenOptions={{
        tabBarStyle: { backgroundColor: '#1C1C1E' , height:60,padding:10 }, // Set the background color of the bottom tab bar
      }}
    >
       <Tab.Screen
        name="ChatList"
        component={ChatList}
        options={{
          headerShown: false,
          tabBarLabel:'Chat',
          tabBarIcon: ({ color, size }) => (
            <Icon name="message-circle" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen name="Settings" component={Settings}  options={{ headerShown: false
       ,tabBarIcon: ({ color, size }) => (
            <Icon name="settings" size={size} color={color} />
          ),
       }} />
    </Tab.Navigator>
  );
};

export default ChatListBottom;
