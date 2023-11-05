import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import PhoneNumberSignUp from '../components/PhoneNumberSignUp';
import EmailSignup from '../components/EmailSignup';

const Tab = createMaterialTopTabNavigator();

const SignUpNavigation = () => {
  return (
    <View style={{height:'50%'}}>


    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: { fontSize: 16, textTransform: 'capitalize', color: 'white' }, // Set text color to white
        tabBarStyle: { backgroundColor: 'transparent', elevation: 0, shadowOpacity: 0, borderBottomWidth: 0 }, // Set background to transparent and remove borders
      }}
    >
      <Tab.Screen 
        name="PhoneNumberSignup"
        component={PhoneNumberSignUp}
        options={{ tabBarLabel: 'Phone Number' }}
      />
      <Tab.Screen
        name="EmailSignup"
        component={EmailSignup}
        options={{ tabBarLabel: 'Email' }}
      />
    </Tab.Navigator>
    </View>
  );
};

export default SignUpNavigation;
