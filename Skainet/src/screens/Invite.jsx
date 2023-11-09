import {View, Text, Touchable, TouchableOpacity} from 'react-native';
import React from 'react';
import Header from '../components/Header';

import Icon from 'react-native-vector-icons/AntDesign';
import LinearGradient from 'react-native-linear-gradient';
import {skaiDark} from '../styles/Theme';

const Invite = () => {
  return (
    <>
      <LinearGradient colors={skaiDark} style={{flex: 1}}>
        <Header name={'Invite Friend'}></Header>
        <View
          style={{
            marginVertical: 50,
            padding: 10,
            paddingHorizontal: 30,
            display: 'flex',
            gap: 30,
          }}>
          <TouchableOpacity style={{backgroundColor: '#2F2C3B'}}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                gap: 10,
                padding: 10,
                justifyContent: 'space-between',
              }}>
              <Text>Invite via Email</Text>
              <Icon name="mail" size={20} color="white"></Icon>
            </View>
          </TouchableOpacity>
        <View>
            
        </View>
        </View>
      </LinearGradient>
    </>
  );
};

export default Invite;
