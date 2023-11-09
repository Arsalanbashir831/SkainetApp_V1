import { View, Text, TouchableOpacity,TextInput } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import Share from 'react-native-share';
import ClickIcon from 'react-native-vector-icons/MaterialIcons'
import UsersIcon from 'react-native-vector-icons/FontAwesome5'
import LinearGradient from 'react-native-linear-gradient';
import { buttonGradient, skaiGradientTheme } from '../styles/Theme';
import GradientButton from '../components/GradientButton';

const Refer =  () => {
    const customShare = async()=>{
        const shareOptions={
            message : 'https://skai-chat-maryslessor '
        }
        try {
            const ShareResponse= await Share.open(shareOptions)
        } catch (error) {
            console.log(error);
        }
    }
  return (
   <>
    <Header name={'Refer and Share'}></Header>
   <LinearGradient colors={skaiGradientTheme} style={{flex:1}}>

  
   <LinearGradient style={{ borderWidth:1,borderColor:'#69698C66' , marginHorizontal:15 , borderRadius:10 ,marginVertical:20}}  colors={['#4461F2','#8E2ADD']}>   
      
        <Text style={{color:'white', fontSize:30,fontWeight:'bold',textAlign:'center' , paddingVertical:10}}>$ 10.49</Text>
        <View style={{display:'flex', flexDirection:'row', alignItems:'center' , justifyContent:'space-between', padding:10}}>
        <View style={{display:'flex', flexDirection:'row', alignItems:'center' , gap:10}}>
        <ClickIcon name='touch-app' size={19} color='white'></ClickIcon>
            <Text style={{color:'white' , fontSize:18}}>Clicks</Text>
        </View>
        <Text style={{color:'white' , fontSize:18}}>89</Text>
        </View>
        <View style={{display:'flex', flexDirection:'row', alignItems:'center' , justifyContent:'space-between' , padding:10}}>
        <View style={{display:'flex', flexDirection:'row', alignItems:'center',gap:10}}>
        <UsersIcon name='users' size={19} color='white'></UsersIcon>
            <Text style={{color:'white' , fontSize:18}}>Invites</Text>
        </View>
        <Text style={{color:'white' , fontSize:18}}>89</Text>
        </View>
        </LinearGradient>
        <TouchableOpacity style={{padding:15}}>
            <GradientButton text={'Upgrade'}></GradientButton>
        </TouchableOpacity>
        <View style={{marginVertical:60 , padding:10}}>
        <Text style={{color:'white',fontWeight:'bold',fontSize:20}}>Refer and Earn Credits</Text>
        <Text style={{color:'white',fontSize:16}}>Get 200 words and 5 images per invitation </Text>
        </View>
<View style={{display:'flex' , flexDirection:'row' , alignItems:'center', justifyContent:'center'}}>
    <TextInput style={{backgroundColor:'#00000066' , padding:10 , paddingHorizontal:19 , borderTopLeftRadius:10 , borderBottomLeftRadius:10 , color:'white'}} value={'https://skai-chat-maryslessor '}/>
    <LinearGradient colors={buttonGradient} style={{padding:14 , borderTopRightRadius:10 , borderBottomRightRadius:10}}>
    <TouchableOpacity onPress={customShare}>
        <Text style={{color:'white'}}>Share</Text>
    </TouchableOpacity>
    </LinearGradient>
    </View>

    </LinearGradient>
   </>
  )
}

export default Refer