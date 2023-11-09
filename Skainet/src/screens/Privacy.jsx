import { View, Text } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { skaiGradientTheme } from '../styles/Theme'
import Header from '../components/Header'
import SettingOptions from '../components/SettingOptions'

const Privacy = () => {
  return (
   <>
   <Header name={'Privacy'}></Header>
   <LinearGradient colors={skaiGradientTheme} style={{flex:1}}>
<Text style={{color:'white' , textAlign:'center', marginVertical:20 , width:'70%' , alignSelf:'center' ,fontSize:16}}>Manage your privacy and choose the right settings for you</Text>

<View style={{padding:10}}>
<SettingOptions name={'Online & Offline Status'} icon={""}></SettingOptions>
<SettingOptions name={'Profile'} icon={""}></SettingOptions>
<Text style={{color:'white' , marginVertical:10}}>Your Photo and personal information</Text>
</View>
   </LinearGradient>
   </>
  )
}

export default Privacy