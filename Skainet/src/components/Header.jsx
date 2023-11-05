import { View, Text } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/AntDesign'

const Header = ({navigateTo , name}) => {
  return (
    <View style={{backgroundColor:'#1C1C1E' , display:'flex',flexDirection:'row', justifyContent:'center' , alignItems:'center',padding:30}} >
      <Icon  style={{flex:1}} name='left' size={20} color='white' />
      <Text style={{fontSize:20, fontWeight:'bold',flex:2}} >{name}</Text>
    </View>
  )
}

export default Header