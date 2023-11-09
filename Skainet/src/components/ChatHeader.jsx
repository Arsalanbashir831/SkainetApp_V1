import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import Option from 'react-native-vector-icons/SimpleLineIcons';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';

import { useNavigation } from '@react-navigation/native';

const ChatHeader = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        backgroundColor: '#26262E',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingHorizontal: 0,
      }}
    >
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: 20,
          paddingVertical: 15,
        }}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrowleft" size={22} color="white" />
        </TouchableOpacity>
        <Image
          style={{ height: 60, width: 60, borderRadius: 40 }}
          source={{ uri: 'https://dummyimage.com/300' }}
        />
      </View>
      <View>
        <Text style={{ fontWeight: 'bold', fontSize: 17 }}>My Friend Chat</Text>
        <Text>Ana,John,Mary</Text>
      </View>
      <Menu>
        <MenuTrigger>
          <Option name='options-vertical' size={20} color='white' />
        </MenuTrigger>
        <MenuOptions style={{ backgroundColor: '#26262E', padding: 10 }}>
          <MenuOption>
            <Text style={{ color: 'white', fontSize: 16 }}>Invite</Text>
          </MenuOption>
         
          <MenuOption>
            <Text style={{ color: 'red', fontSize: 16 }}>Delete</Text>
          </MenuOption>
        </MenuOptions>
      </Menu>
    </View>
  );
};

export default ChatHeader;
