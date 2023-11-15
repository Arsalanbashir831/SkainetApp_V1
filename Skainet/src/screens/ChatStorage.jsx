import { View, Text,Image } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { skaiDark, skaiGradientTheme } from '../styles/Theme'
import EditIcon from 'react-native-vector-icons/AntDesign' 
const ChatStorage = ({navigation}) => {
  return (
   <>
    <LinearGradient colors={skaiDark} style={{flex:1}}>
  {/* Chat Profile Main Header */}
  <LinearGradient colors={skaiGradientTheme} style={{padding:20 }} >
  <EditIcon onPress={()=>{navigation.goBack()}}  name='left' size={20} color='white'></EditIcon>
 <View style={{alignSelf:'center'}}>
 <Image style={{height:120,width:120 , borderRadius:100 ,alignSelf:'center' }} source={{uri: 'https://dummyimage.com/300'}}></Image>
 <View style={{paddingVertical:10 , alignSelf:'center'}}>
 <View style={{display:'flex',flexDirection:'row' , gap:10}}>
 <EditIcon name='edit' size={18} color='white'></EditIcon>
  <Text style={{color:'white' ,fontSize:18 ,textAlign:'center'}}>Chat with Friends</Text>
 </View>
 <Text style={{color:'white',textAlign:'center'}}>Ana, Mary</Text>
 </View>
 </View>

  </LinearGradient>  
    </LinearGradient>
   </>
  )
}

export default ChatStorage