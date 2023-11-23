import React, { useState,useEffect } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Header from '../components/Header';
import { skaiGradientTheme } from '../styles/Theme';
import GradientButton from '../components/GradientButton';
import CreateNewRoom from '../Websocket/CreateNewRoom';
import useUserDetails from '../CustomHooks/GetUserDetails';
import useGetUserToken from '../CustomHooks/GetUserToken';
import { useNavigation } from '@react-navigation/native';
import useFetchChat from '../CustomHooks/FetchChat';

const SkaiTitle = () => {
  const navigation = useNavigation();
  const [title, setTitle] = useState('');
  const [loading, setLoading] = useState(false);
  const token = useGetUserToken();
  const { userDetails } = useUserDetails(token);
  const {chatData}=useFetchChat(token)
  const [socketData, setSocketData] = useState(null);
  const senderId = userDetails?.id;

  useEffect(() => {
    const generateRandomString = () => {
      const currentDate = new Date();
      const timestamp = currentDate.getTime().toString();
      const randomString = Math.random().toString(36).substring(2, 10);

      const uniqueString = timestamp + randomString;

      if (uniqueString.length < 16) {
        const padding = '0'.repeat(16 - uniqueString.length);
        return uniqueString + padding;
      } else {
        return uniqueString.substring(0, 16);
      }
    };

    const uniqueString = generateRandomString();
    const ws = new WebSocket(`wss://api.ilmoirfan.com/ws/chat/${uniqueString}/`);
    console.log(uniqueString);
   if (loading) {
    
   
    ws.onopen = () => {
      console.log('WebSocket connected');
      ws.send(CreateNewRoom(title, senderId));
    };
    ws.onmessage = (event) => {
      const response = JSON.parse(event.data);
      console.log('WebSocket message received:', response);
      setSocketData(response.message);
      setLoading(false); // Set loading to false when chat is created
      // navigation.reset({ index: 1, routes: [{ name: "ChatListBottom" }] });
      // console.log(chatData);
     navigation.navigate('ChatListBottom')
    };
    

    ws.onerror = (error) => {
      console.error('WebSocket error:', error);
      setLoading(false);
    };
  }
  }, [loading]);

  const handleButtonPress = () => {
    setLoading(true);
 
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
              backgroundColor: '#1C1C1E',
              color: 'white',
              borderRadius: 8,
              marginVertical: 20,
              padding: 10,
              paddingHorizontal:25
            }}
            placeholderTextColor={'gray'}
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
