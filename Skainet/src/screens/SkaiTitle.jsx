import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Header from '../components/Header';
import { skaiGradientTheme } from '../styles/Theme';
import GradientButton from '../components/GradientButton';

const SkaiTitle = () => {
  const [title, setTitle] = useState('');
  const [loading, setLoading] = useState(false);

  const handleButtonPress = () => {
    // Perform your logic here, e.g., API call, etc.
    setLoading(true);

    // Simulating an asynchronous action
    setTimeout(() => {
      // Reset loading state after the action is completed
      setLoading(false);
    }, 2000);
  };

  return (
    <>
      <Header name={'SKAI CHAT'} />
      <LinearGradient colors={skaiGradientTheme} style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <View style={{ alignItems: 'center' }}>
          <Image style={{ width: 150, height: 150, alignSelf: 'center' }} source={require('../../assets/ball.png')} />
          <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold', alignSelf: 'center', marginTop: 20 }}>
            Enter the title of the chat
          </Text>
          <TextInput
            multiline
            numberOfLines={3}
            style={{
              width: '80%',
              backgroundColor: '#2F2C3B',
              color: 'white',
              borderRadius: 8,
              marginVertical: 20,
              padding: 10,
            }}
            placeholderTextColor={'white'}
            placeholder="Enter the title to chat with SKAI"
            value={title}
            onChangeText={(text) => setTitle(text)}
          />
          <TouchableOpacity
            style={{
             
              paddingVertical: 15,
              paddingHorizontal: 30,
              borderRadius: 8,
              marginTop: 10,
            }}
            onPress={handleButtonPress}
            disabled={loading}
          >
          
            {loading ? (
              <ActivityIndicator size="small" color="white" />
            ) : (
                <GradientButton text={'Lets Chat'}/>
            )}
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </>
  );
};

export default SkaiTitle;
