import React from 'react';
import {View, Text, Image, SafeAreaView, TextInput} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {settingsButton, skaiDark} from '../styles/Theme';

const Profile = ({navigation}) => {
  return (
    <LinearGradient
      colors={skaiDark}
      start={{x: 1, y: 0}}
      end={{x: 0, y: 1}}
      style={{flex: 1}}>
      <View style={{padding: 20}}>
        {/* Header */}
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text onPress={()=>(navigation.goBack())} style={{color: '#5398ff', fontSize: 17}}>Cancel</Text>
          <Text style={{fontSize: 17, fontWeight: 'bold'}}>Edit Profile</Text>
          <Text onPress={()=>(navigation.goBack())} style={{color: '#5398ff', fontSize: 17}}>Done</Text>
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 20,
          }}>
          <Image
            style={{height: 100, width: 100, borderRadius: 50}}
            source={{uri: 'https://dummyimage.com/300'}}
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
            value="Marry"
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
            value=""
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
            <TextInput placeholder="abb@gmail.com" />
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
            <TextInput keyboardType='number-pad' placeholder="030715254345" />
          </View>
        </View>
        <TextInput
            style={{
              backgroundColor: settingsButton,
              paddingHorizontal: 20,
             marginTop:40
            }}
            placeholder="Your Bio"
            value=""
          />
<View style={{display:'flex',flexDirection:'row',alignItems:'center', gap:10, padding:10,marginTop:20}}>
<Text>You are on <Text style={{color:'#5398ff'}}>Platinum</Text> </Text>
          <Image style={{height:15 , width:15}} source={{uri:'https://s3-alpha-sig.figma.com/img/0e7b/cb0b/1997268032e012b75fbd4e2e5b8867a5?Expires=1699833600&Signature=F9toMLEWYrXLxvzQDjhd3BojZbXfSWCGerPUKQdpSaP6W-Hh7QWqjfkYPxmAV48PwkXj9xUDdDUV7iYmoTYfn0~9tD5u1coAzCgA6677fo4-bgmpz7EcrWOoplN9MtJObHJjNl5gp6A4rUybkT0iMY9VpH8Ly9zt23Uj5s-YpMWHX3bNR6~ImnJoPRSUEkhTUYM0LnOmuQBPE1OALxWi~cvR0JXga8vE4zRlHOGblCyydpT-8pGL06IVvCvQfxv5iKVER9UE2z~M5WczA14wXhTJnV~kictaSLTrldJHYWCKN47qOjk1QPqD0VBz-cN9-cFtNOGws0AnZAynHVFQtg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'}}></Image>
</View>
         
      </View>
    </LinearGradient>
  );
};

export default Profile;
