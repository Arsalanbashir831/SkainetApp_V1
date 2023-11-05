import { View, Text, Image } from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { buttonGradient, skaiDark, skaiGradientTheme } from '../styles/Theme';

const TextMessage = ({ user, text, img }) => {
  return (
    <>
      {user === 'OpenAI' && (
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10, marginTop: 10, padding:10 }}>
       
       
          <Image style={{ height: 50, width: 50, borderRadius: 30 }} source={require('../../assets/ball.png')} />
     
          <LinearGradient
            colors={buttonGradient}
            style={{ width: '80%', padding: 10, borderTopLeftRadius: 10, borderTopRightRadius: 10, borderBottomRightRadius: 10 }}
          >
            <Text>
              {' '}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat consequatur laudantium voluptatibus
              tempore odit. Eaque incidunt provident corrupti illo eveniet itaque doloribus, earum, possimus atque
              nobis, maiores tempore aspernatur saepe?{' '}
            </Text>
          </LinearGradient>
        </View>
      )}
      {user === 'Collaborator' && (
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10, marginTop: 10 , padding:10}}>
        <View style={{display:'flex',flexDirection:'column' , alignItems:'center' , gap:10}}>
        <Text>Ana</Text>
        <Image style={{ height: 50, width: 50, borderRadius: 30 }} source={{uri:'https://dummyimage.com/300'}} />
        </View>
         
          <LinearGradient
            colors={['#3D3F47','#3D3F47']}
            style={{ width: '80%', padding: 10, borderTopLeftRadius: 10, borderTopRightRadius: 10, borderBottomRightRadius: 10 }}
          >
            <Text>
              {' '}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat consequatur laudantium voluptatibus
              tempore odit. Eaque incidunt provident corrupti illo eveniet itaque doloribus, earum, possimus atque
              nobis, maiores tempore aspernatur saepe?{' '}
            </Text>
          </LinearGradient>
        </View>
      )}
      {user != 'Collaborator'&& user !='OpenAI'  && (
        <View style={{ flexDirection: 'row-reverse', alignItems: 'center', gap: 10, marginTop: 10, padding:10 }}>
        <View style={{display:'flex',flexDirection:'column' , alignItems:'center' , gap:10}}>
        <Text>You</Text>
        <Image style={{ height: 50, width: 50, borderRadius: 30 }} source={{uri:'https://dummyimage.com/300'}} />
        </View>
          <LinearGradient
            colors={['#3D3F47','#3D3F47']}
            style={{ width: '80%', padding: 10, borderTopLeftRadius: 10, borderTopRightRadius: 10, borderBottomLeftRadius: 10 , borderWidth:1,borderColor:'lightblue' }}
          >
            <Text >
            
              {' '}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat consequatur laudantium voluptatibus
              tempore odit. Eaque incidunt provident corrupti illo eveniet itaque doloribus, earum, possimus atque
              nobis, maiores tempore aspernatur saepe?{' '}
            </Text>
          </LinearGradient>
        </View>
      )}
    </>
  );
};

export default TextMessage;
