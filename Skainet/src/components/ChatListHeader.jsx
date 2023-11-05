import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { skaiDark, buttonGradient } from '../styles/Theme'
import LinearGradient from 'react-native-linear-gradient'

const ChatListHeader = () => {
  return (
    <>
      {/* header */}
     
      <View style={{display:'flex', flexDirection:"row" , alignItems:'center'  , paddingVertical:30 , justifyContent:'space-between'}}>
        <Image source={require('../../assets/logoHorizontal.png')}/>
       <LinearGradient
       style={{marginHorizontal:30 , borderRadius:5}}
       colors={[...buttonGradient]}
       >
        <TouchableOpacity 
       
        ><Text style={{color:'white', paddingHorizontal:10 , fontSize:20}}>+</Text></TouchableOpacity>
       </LinearGradient>
      </View>
   
    </>
  )
}

export default ChatListHeader