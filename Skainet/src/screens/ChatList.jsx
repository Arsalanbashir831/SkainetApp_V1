import { View, Text, Image, TouchableOpacity, TextInput, FlatList } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import ChatListHeader from '../components/ChatListHeader'
import { skaiDark } from '../styles/Theme'
import User from '../components/User'
import Icon from 'react-native-vector-icons/FontAwesome5'

const ChatList = ({navigation}) => {

  const UserData =[{
    id:1,
      img : "https://dummyimage.com/300",
      name :"Arsalan",
      msg:'Hi guys', 
      time:'12/12/21'
  },
  {
    id:2,
      img : "https://dummyimage.com/300",
      name :"Arsalan",
      msg:'Hi guys',
      time:'12/12/21' 
  },
  {
    id:3,
      img : "https://dummyimage.com/300",
      name :"Arsalan",
      msg:'Hi guys ! how u all are doing ', 
      time:'12/12/21'
  }
  ,{
    id:4,
      img : "https://dummyimage.com/300",
      name :"Arsalan",
      msg:'Hi guys', 
      time:'12/12/21'
  },
  {
    id:5,
      img : "https://dummyimage.com/300",
      name :"Arsalan",
      msg:'Hi guys', 
      time:'12/12/21'
  },
  {
    id:6,
      img : "https://dummyimage.com/300",
      name :"Arsalan",
      msg:'Hi guys', 
      time:'12/12/21'
  }
  ,{
    id:7,
      img : "https://dummyimage.com/300",
      name :"Arsalan",
      msg:'Hi guys', 
      time:'12/12/21'
  }
  ,{
    id:8,
      img : "https://dummyimage.com/300",
      name :"Arsalan",
      msg:'Hi guys', 
      time:'12/12/21'
  }

]

  return (
    <>
      <LinearGradient style={{flex:1,padding:10}} colors={[...skaiDark]}
      start={{ x: 1, y: 0 }}
        end={{ x: 0, y: 1 }}
      >
   <ChatListHeader/>
   <View style={{paddingHorizontal:10}}>
   <Icon style={{position:'absolute' , top:15,left:20}} name='search' size={20} colors='white'></Icon>
   <TextInput style={{ backgroundColor:"#3D3F4780" , borderRadius:8 , paddingHorizontal:40}} placeholder='Search'/>
   </View>
   
   
   <View  style={{paddingHorizontal:10 , marginTop:30 ,flex:1}}>
      <FlatList
        data={UserData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={(data) => (
         
         <TouchableOpacity onPress={()=>(navigation.navigate('Chat'))}  >
          <User name={data.item.name} img={data.item.img} msg={data.item.msg} time={data.item.time}/>
         </TouchableOpacity>
        )}
      />
    </View>
   </LinearGradient>
    </>
  )
}

export default ChatList