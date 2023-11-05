import React, { useState } from 'react';
import { View, Text, Switch } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { settingsButton} from '../styles/Theme';

const SettingOptions = ({ name, icon ,isLast }) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: settingsButton,
       borderBottomWidth: isLast?0:1,
       borderBottomColor: '#69698C66',
        paddingHorizontal: 20,
        borderRadius:7,
        paddingVertical: 5,
        marginVertical:2
      }}
    >
      <Text style={{ fontSize: 20 }}>{name}</Text>
      {icon === '' ? (
        <Switch
          trackColor={{ false: '#767577', true: '#1B69DD'}}
          thumbColor={isEnabled ? '#f4f3f4' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      ) : (
        <Icon name={icon} size={15} color="white" />
      )}
    </View>
  );
};

export default SettingOptions;
