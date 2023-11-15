import React,{useState} from 'react';
import {View, Text, Image, SafeAreaView, TextInput} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {settingsButton, skaiDark} from '../styles/Theme';

const Profile = ({navigation, route}) => {
  const {user} = route.params;
  const [userData , setUserData] = useState({

    user_id: user?.id,
    first_name: user?.first_name,
    last_name: user?.last_name,
    email: user?.email,
    phone: user?.phone,
    avatar: user?.avatar,
    plan: user?.plan,
    account_type: user?.account_type,
  total_credits: user?.total_credits,

  })

  const handlcChange = (text, fieldName) => {
    setUserData({
      ...userData,
      [fieldName]: text,
    });
  };
 
  return (
    <LinearGradient
      colors={skaiDark}
      start={{x: 1, y: 0}}
      end={{x: 0, y: 1}}
      style={{flex: 1}}>
      <View style={{padding: 20}}>
        {/* Header */}
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text
            onPress={() => navigation.goBack()}
            style={{color: '#5398ff', fontSize: 17}}>
            Cancel
          </Text>
          <Text style={{fontSize: 17, fontWeight: 'bold'}}>Edit Profile</Text>
          <Text
            onPress={() => navigation.goBack()}
            style={{color: '#5398ff', fontSize: 17}}>
            Done
          </Text>
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 20,
          }}>
          <Image
            style={{height: 100, width: 100, borderRadius: 50}}
            source={{uri: `${userData?.avatar}`}}
          />
          <Text style={{color: '#5398ff', fontSize: 17, marginTop: 10}}>
            Edit
          </Text>
        </View>
        <View>
          <TextInput
            style={{
              backgroundColor: settingsButton,
              paddingHorizontal: 20,
              marginTop: 20,
              borderTopRightRadius: 10,
              borderTopLeftRadius: 10,
            }}
            placeholder="First Name"
            value={userData?.first_name}
            onChangeText={(text) => handlcChange(text, 'first_name')}
          />
          <TextInput
            style={{
              backgroundColor: settingsButton,
              paddingHorizontal: 20,
              borderTopWidth: 1,
              borderTopColor: '#FFFFFF70',
              borderBottomRightRadius: 10,
              borderBottomLeftRadius: 10,
            }}
            placeholder="Last Name"
            value={userData?.last_name}
            onChangeText={(text) => handlcChange(text, 'last_name')}
          />
        </View>
        <View>
          <View
            style={{
              backgroundColor: settingsButton,
              marginTop: 40,
              marginBottom: 10,
              padding: 5,
              paddingHorizontal: 20,
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              gap: 25,
              borderRadius: 10,
            }}>
            <Text>Email Address</Text>
            <TextInput value={userData?.email} placeholder="abb@gmail.com"
             onChangeText={(text) => handlcChange(text, 'email')}
             />
          </View>
          <View
            style={{
              backgroundColor: settingsButton,
              padding: 5,
              paddingHorizontal: 20,
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              gap: 25,
              borderRadius: 10,
            }}>
            <Text>Mobile Number</Text>
            <TextInput
              value={userData?.phone}
              keyboardType="number-pad"
              placeholder="030715254345"
              onChangeText={(text) => handlcChange(text, 'phone')}
            />
          </View>
        </View>
       
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: 10,
            padding: 10,
            marginTop: 20,
          }}>
          <Text>
            You are on <Text style={{color: '#5398ff'}}>{userData?.plan}</Text> Plan
          </Text>
        </View>
      </View>
    </LinearGradient>
  );
};

export default Profile;
