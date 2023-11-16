import { View, Text,Image } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'


const ImageMessage = ({img}) => {
  return (
   <>
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10, marginTop: 10, padding:10 }}>
       
       
       <Image style={{ height: 50, width: 50, borderRadius: 30 }} source={require('../../assets/ball.png')} />
  
       <LinearGradient
         colors={buttonGradient}
         style={{ width: '80%', padding: 10, borderTopLeftRadius: 10, borderTopRightRadius: 10, borderBottomRightRadius: 10 }}
       >
         <Image source={{uri:img}}/>
       </LinearGradient>
     </View>
   </>
  )
}

export default ImageMessage