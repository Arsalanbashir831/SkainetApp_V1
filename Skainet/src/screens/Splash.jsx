import { View, Text, Image, DevSettings } from 'react-native';
import React,{useEffect} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import skaiGradientTheme  from '../styles/Theme';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import useUserDetails from '../CustomHooks/GetUserDetails';
import useGetUserToken from '../CustomHooks/GetUserToken';

const Splash = () => {
  const navigation = useNavigation();
  const token = useGetUserToken()
const {ServerResponse} = useUserDetails(token)
  
  useEffect(() => {
    const redirect =  setTimeout( async ()  => {
    console.log(ServerResponse);
    if (ServerResponse===200) {
      navigation.navigate('ChatListBottom')
      // DevSettings.reload()
    }
    else if (ServerResponse===500) {
      DevSettings.reload()
    }
    else{
      navigation.navigate('OnBoard')
    }
    }, 5000);

    return () => clearTimeout(redirect);
  }, [navigation,ServerResponse]);
    const svgLogo = require('../../assets/skainetAnime.gif');
  return (
    <LinearGradient
      style={{ flex: 1 }}
      start={{ x: 0.5, y: 0.2 }}
      colors={['black','black']}
    >
      <View style={{ flex:1 , justifyContent:'center' , alignItems:"center"}}>
      <Image style={{height:'30%',width:'55%'}} source={svgLogo} />       
      </View>
    </LinearGradient>
  );
};

export default Splash;
