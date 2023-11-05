import { View, Text,Image } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/AntDesign'
import { settingsButton } from '../styles/Theme'


const ProfileOption = ({name , passion , img }) => {
  return (
    <View  style={{display:'flex', flexDirection:'row' , alignItems:'center', justifyContent:'space-between' , backgroundColor:settingsButton , borderRadius:8,paddingHorizontal:20, paddingVertical:5}} >
    
    <View  style={{display:'flex', flexDirection:'row' , alignItems:'center' , gap:20 , paddingVertical:10 }}  >
    <Image style={{height:60 ,width:60 , borderRadius:50}} source={{uri:img}}/>
   <View>
   <Text style={{fontSize:20, fontWeight:'bold'}}>{name}</Text>
   <Text>{passion}</Text>
   </View>
    </View>
    <Icon  name='right' size={15} color='white'></Icon>
    </View>
  )
}

export default ProfileOption