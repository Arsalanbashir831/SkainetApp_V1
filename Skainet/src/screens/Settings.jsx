import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import React from 'react';
import Header from '../components/Header';
import ProfileOptions from '../components/ProfileOption';
import SettingOptions from '../components/SettingOptions';
import { settingsButton } from '../styles/Theme';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SETTINGOPTIONS = [
  {
    name: 'SKAI',
    options: [
      {
        name: 'Skainet Plans',
        navigateTo: 'Plans',
        icon: 'right',
      },
      {
        name: 'Refer and Earn',
        navigateTo: 'Refer',
        icon: 'right',
      },
    ],
  },
  {
    name: 'GENERAL',
    options: [
      {
        name: 'Privacy',
        navigateTo: 'Privacy',
        icon: 'right',
      },
      {
        name: 'Storage and Data',
        navigateTo: 'Storage',
        icon: 'right',
      },
      {
        name: 'Notification',
        navigateTo: '',
        icon: '',
      },
      {
        name: 'Logout',
        navigateTo: '',
        icon: 'logout',
      },
    ],
  },
  {
    name: 'HELP AND SUPPORT',
    options: [
      {
        name: 'FAQ',
        navigateTo: 'FAQ',
        icon: 'right',
      },
      {
        name: 'Rate App',
        navigateTo: 'Ratings',
        icon: 'right',
      },
      {
        name: 'Customer Support',
        navigateTo: 'Support',
        icon: 'right',
      },
    ],
  },
];

const Settings = ({ navigation }) => {

  const handleLogout = async () => {
    // Clear authentication token from AsyncStorage
    try {
      await AsyncStorage.removeItem('token');
      console.log("token : "+await AsyncStorage.getItem('token'));
      navigation.navigate('Login');
    } catch (error) {
      console.error('Error clearing authToken:', error);
    }
  };

  const renderSettingOptions = ({ item }) => {
    return (
      <View style={{ marginBottom: 20 }}>
        <Text style={{ color: 'white', fontSize: 16, marginVertical: 10 }}>{item.name}</Text>
        {item.options.map((option, index) => (
          <View style={{ backgroundColor: settingsButton, borderRadius: 1 }} key={index}>
            {option.icon === '' ? (
              <SettingOptions name={option.name} icon={option.icon} isLast={true} />
            ) : (
              <TouchableOpacity onPress={() => (option.name === 'Logout' ? handleLogout() : navigation.navigate(option.navigateTo))}>
                {item.name === 'SKAI' ? (
                  <SettingOptions name={option.name} icon={option.icon} isLast={index === 1} />
                ) : (
                  <SettingOptions name={option.name} icon={option.icon} isLast={index === 2} />
                )}
              </TouchableOpacity>
            )}
          </View>
        ))}
      </View>
    );
  };

  return (
    <View style={{ backgroundColor: '#201E28', height: '100%' }}>
      <Header name={'Settings'} />
      <View style={{ marginVertical: 20, paddingHorizontal: 15 }}>
        <TouchableOpacity onPress={() => (navigation.navigate('Profile'))}>
          <ProfileOptions  />
        </TouchableOpacity>

        <FlatList
          data={SETTINGOPTIONS}
          renderItem={renderSettingOptions}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </View>
  );
};

export default Settings;
