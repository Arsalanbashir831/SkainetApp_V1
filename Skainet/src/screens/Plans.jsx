import { View, Text,Image } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { buttonGradient } from '../styles/Theme'
import Check from 'react-native-vector-icons/Entypo'
import PricePlan from '../components/PricePlan'
import FlexPlans from '../components/FlexPlans'

const Plans = () => {
  return (
  <>
 <View style={{backgroundColor:'#000000',height:'100%',position:'absolute',bottom:0 ,width:'100%',zIndex:1,opacity:0.8}}>

 </View>
    <View style={{flex:1 , justifyContent:'flex-start' , alignItems:'center' , marginTop:120 }}>
    <View style={{zIndex:2,position:'absolute' , paddingHorizontal:10}}>
    <View style={{display:'flex', flexDirection:'row',alignItems:'center'}}>
    <LinearGradient colors={buttonGradient} style={{borderRadius:8}}>
    <Text style={{color:'white',fontSize:30,padding:10,fontWeight:'bold'}}>Unlock</Text>
    </LinearGradient>
    <Text   style={{color:'white',fontSize:30,padding:10,fontWeight:'bold'}}>your access</Text> 
    </View>
    
    <View>
    
    <View>
  
  {[
    { label: 'Increase word and Image limit' },
    { label: 'More Detailed Answer' },
    { label: 'Ads Free Experience' },
  ].map((item, index) => (
    <View
      key={index}
      style={{
        display: 'flex',
        flexDirection: 'row',
        gap: 10,
        marginTop: index === 0 ? 20 : 10,
      }}
    >
      <Check name="check" size={14} color={'white'} />
      <Text style={{ fontWeight: 'bold', fontSize: 16 }}>{item.label}</Text>
    </View>
  ))}

</View>


<View style={{ marginTop: 30, flexDirection: 'row', flexWrap: 'wrap',gap:10}}>
      <PricePlan />
    </View>

    <FlexPlans></FlexPlans>
    </View>
    
    </View>
   <Image style={{height:300,width:300}} source={require('../../assets/ball_resize.png')}/>     
    </View>
 
  </>
  )
}

export default Plans