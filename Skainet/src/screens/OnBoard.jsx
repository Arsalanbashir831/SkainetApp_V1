import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { skaiGradientTheme, buttonGradient } from '../styles/Theme';
import GradientButton from '../components/GradientButton';
import { SafeAreaView } from 'react-native-safe-area-context';

const OnBoard = ({navigation}) => {
  return (
    <>
    <SafeAreaView>
    <LinearGradient style={{ height: '100%', width: '100%' }} colors={[...skaiGradientTheme]}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Image source={require('../../assets/DemoChat.png')} />
      </View>
      <View style={{ backgroundColor: '#26262E', paddingVertical: 50 }}>
        <Text style={{ fontSize: 28, paddingHorizontal: 25 }}>
          AI-Powered Chat for loved ones and colleagues
        </Text>
        <TouchableOpacity onPress={()=>(navigation.navigate('Signup'))} style={{marginVertical:20 , width:'80%' , alignSelf:'center'}}>
        <GradientButton text={'Get Started'} /> 
    </TouchableOpacity>
             
        <Text onPress={()=>(navigation.navigate('Login'))} style={{textAlign:'center' , color:'gray' , fontSize:16}}>
          Already have an account? <Text style={{ color: 'lightblue' ,textDecorationLine: 'underline', }}>Login</Text>
        </Text>
      </View>
    </LinearGradient>

    </SafeAreaView>
    </>

  );
};

export default OnBoard;






