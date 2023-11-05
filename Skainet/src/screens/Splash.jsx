import { View, Text, Image } from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import skaiGradientTheme  from '../styles/Theme';

const Splash = () => {
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
