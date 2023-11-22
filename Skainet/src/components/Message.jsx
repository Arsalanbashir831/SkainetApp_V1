import { View, Text, Image } from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { buttonGradient } from '../styles/Theme';

const Message = ({ user, msg, img, name, type,sendTo }) => {
// console.log(sendTo);
  const commonLinearGradientStyles = {
    width: '80%',
    padding: type === 'image' ? 5 : 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomRightRadius: user==='Collaborator'?10:0,
  };

  const renderCollaboratorMessage = () => (
    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10, marginTop: 10, padding: 10, width: '90%', justifyContent: 'flex-start' }}>
      <View style={{ display: 'flex', flexDirection: 'column', gap: 10, width: '20%' }}>
        <Text style={{ textAlign: 'left',color:'white' }}>{name}</Text>
        <Image style={{ height: 50, width: 50, borderRadius: 30 }} source={{ uri: img }} />
      </View>
      <LinearGradient colors={['#3D3F47', '#3D3F47']} style={{ ...commonLinearGradientStyles }}>
        <Text style={{color:'white'}}> {msg} </Text>
      </LinearGradient>
    </View>
  );

  const renderOtherMessage = () => (
    <View style={{ flexDirection: user === 'Collaborator' ? 'row' : 'row-reverse', alignItems: 'center', gap: 10, marginTop: 10, padding: 10, width: '90%', alignSelf: user === 'Collaborator' ? 'flex-start' : 'flex-end' }}>
      <View style={{ display: 'flex', flexDirection: 'column', gap: 10, width: '20%', alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{color:'white'}}>{name}</Text>
        <Image style={{ height: 50, width: 50, borderRadius: 30 }} source={{ uri: img }} />
      </View>
      <LinearGradient colors={['#3D3F47', '#3D3F47']} style={{ ...commonLinearGradientStyles, borderBottomLeftRadius: user !== 'Collaborator' ? 10 : 0, borderWidth: 1, borderColor: 'lightblue' }}>
        <Text style={{color:'white'}}> {msg} </Text>
      </LinearGradient>
    </View>
  );

  return (
    <>
      {(user === 'OpenAI') && (type === 'message' || type === 'image') && (
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10, marginTop: 10, padding: 10 }}>
          <Image style={{ height: 50, width: 50, borderRadius: 30 }} source={require('../../assets/ball.png')} />
          <LinearGradient colors={buttonGradient} style={{ ...commonLinearGradientStyles }}>
            {type === 'image' ?
            <View>
            <Text style={{color:"white",fontSize:16,padding:5, paddingBottom:8}}>@{sendTo}</Text>
            <Image style={{ height: 150, borderRadius: 10 }} source={{ uri: msg }} />
            </View>
              : <Text style={{color:'white'}} >{msg}</Text>}
          </LinearGradient>
        </View>
      )}

      {(user === 'Collaborator') && (type === 'message') && renderCollaboratorMessage()}

      {(user !== 'Collaborator' && user !== 'OpenAI') && (type === 'message') && renderOtherMessage()}
    </>
  );
};

export default Message;
