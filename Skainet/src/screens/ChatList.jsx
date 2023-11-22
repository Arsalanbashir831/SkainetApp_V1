import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import ChatListHeader from '../components/ChatListHeader';
import {skaiDark} from '../styles/Theme';
import User from '../components/User';
import Icon from 'react-native-vector-icons/FontAwesome5';
import useFetchChat from '../CustomHooks/FetchChat';
import useGetUserToken from '../CustomHooks/GetUserToken';

const ChatList = () => {
  const token = useGetUserToken();

  const {chatData, isLoading, error} = useFetchChat(token);
  const [searchQuery, setSearchQuery] = useState('');
  const filteredChats = chatData?.chats?.filter(chat =>
    chat.title.toLowerCase().includes(searchQuery.toLowerCase()),
  );
  


  return (
    <>
      <LinearGradient
        style={{flex: 1, padding: 10}}
        colors={[...skaiDark]}
        start={{x: 1, y: 0}}
        end={{x: 0, y: 1}}>
        <ChatListHeader />

        <View style={{paddingHorizontal: 10}}>
          <Icon
            style={{position: 'absolute', top: 15, left: 20}}
            name="search"
            size={20}
            colors="white"></Icon>
          <TextInput
            onChangeText={text => setSearchQuery(text)}
            style={{
              backgroundColor: '#3D3F4780',
              borderRadius: 8,
              paddingHorizontal: 40,
            }}
            placeholder="Search"
          />
        </View>

        <View style={{paddingHorizontal: 10, marginTop: 30, flex: 1}}>
          {isLoading && <ActivityIndicator size="large" color="#fffff" />}
          <FlatList
            data={filteredChats}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => (
              <User
                name={item.title.slice(0, 24)+"..."}
                img="https://i.ibb.co/vBN55yc/ball.png"
                msg={item.role}
                time=""
                id={item.id}
              />
            )}
          />
        </View>
      </LinearGradient>
    </>
  );
};

export default ChatList;
