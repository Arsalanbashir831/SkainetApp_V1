import { View, Text,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/AntDesign'
import { settingsButton } from '../styles/Theme'
import useGetUserToken from '../CustomHooks/GetUserToken'
import useUserDetails from '../CustomHooks/GetUserDetails'
import {useNavigation} from '@react-navigation/native'


const ProfileOption = () => {
  const navigation = useNavigation()
const token = useGetUserToken()
const user= useUserDetails(token)

  return (
    <TouchableOpacity onPress={() => (navigation.navigate('Profile',{user:user?.userDetails}))}> 
    <View  style={{display:'flex', flexDirection:'row' , alignItems:'center', justifyContent:'space-between' , backgroundColor:settingsButton , borderRadius:8,paddingHorizontal:20, paddingVertical:5}} >
    <View  style={{display:'flex', flexDirection:'row' , alignItems:'center' , gap:20 , paddingVertical:10 }}  >
    <Image style={{height:60 ,width:60 , borderRadius:50}} source={{uri:user?.userDetails?.avatar}}/>
   <View>
   <Text style={{fontSize:20, fontWeight:'bold'}}>{user?.userDetails?.first_name+" "+user?.userDetails?.last_name}</Text>
   <Text>{user?.userDetails?.account_type}</Text>
   </View>
    </View>
    <Icon  name='right' size={15} color='white'></Icon>
    </View>
    </TouchableOpacity>
  )
}

export default ProfileOption