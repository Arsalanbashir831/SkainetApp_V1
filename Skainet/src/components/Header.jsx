import { View, Text ,TouchableOpacity} from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native';
const Header = ({ name}) => {
  const navigation = useNavigation();
  return (
    <View style={{backgroundColor:'#1C1C1E' , display:'flex',flexDirection:'row', justifyContent:'center' , alignItems:'center',padding:30}} >
      <TouchableOpacity style={{flex:1}} onPress={()=>(navigation.goBack())}>
      <Icon   name='left' size={20} color='white' />
      </TouchableOpacity>
      
      <Text style={{fontSize:20, fontWeight:'bold',flex:2 , color:'white'}} >{name}</Text>
    </View>
  )
}

export default Header