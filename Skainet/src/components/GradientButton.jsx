import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import {skaiGradientTheme,buttonGradient} from '../styles/Theme'

const GradientButton = ({text,navigation}) => {

 
  return (
    
    <LinearGradient style={{padding:12,borderRadius:15}}  
      start={{ x: 1, y: 0  }} end={{ x: 0.1, y: 1 }}
    colors={[...buttonGradient]}>
      <Text style={{textAlign:'center',fontWeight:'bold' , fontSize:20}}>{text}</Text>  
    </LinearGradient>
  
  )
}

export default GradientButton