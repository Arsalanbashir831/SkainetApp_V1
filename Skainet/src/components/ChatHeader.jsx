import React, {useEffect, useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Option from 'react-native-vector-icons/SimpleLineIcons';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';
import {useNavigation} from '@react-navigation/native';
import useFetchChat from '../CustomHooks/FetchChat';
import useGetUserToken from '../CustomHooks/GetUserToken';

const ChatHeader = ({chatId}) => {
  const navigation = useNavigation();
  const token = useGetUserToken();
  const {chatData, isLoading} = useFetchChat(token);
  const [filteredChatData, setFilteredChatData] = useState(null);

  const findChatById = () => {
    setFilteredChatData(chatData?.chats?.filter(chat => chat.id === chatId)[0]);
  };
  useEffect(() => {
    findChatById();
  }, [chatData]);

  // console.log(filteredChatData[0].collaborators);
  const handleInviteOption = () => {
    navigation.navigate('Invite', {chatId: chatId});
  };

  const handleDeleteOption = () => {
    // Handle delete logic
  };

  return (
    <View
      style={{
        backgroundColor: '#26262E',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingHorizontal: 0,
      }}>
      <View
        style={{
          display: 'flex',
          
          flexDirection: 'row',
          alignItems: 'center',
          gap: 20,
          paddingVertical: 15,
        }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrowleft" size={22} color="white" />
        </TouchableOpacity>
        <Image
          style={{height: 60, width: 60, borderRadius: 40}}
          source={{uri: 'https://i.ibb.co/vBN55yc/ball.png'}}
        />
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('ChatStorage',{
        chatTitle:filteredChatData?.title,
        collaborators:filteredChatData?.collaborators,
        img:'https://i.ibb.co/vBN55yc/ball.png',
      })}>
        <View>
          <Text style={{fontWeight: 'bold', fontSize: 17,color:"white"}}>{filteredChatData?.title.slice(0,27)}</Text>
          <View style={{display: 'flex', flexDirection: 'row', gap: 10}}>
            {filteredChatData?.collaborators ? (
              <>
                {filteredChatData?.collaborators
                  .slice(0, 2)
                  .map((friend, index) => (
                    <React.Fragment key={index}>
                      <Text>{friend.full_name},</Text>
                    </React.Fragment>
                  ))}
                <Text>...</Text>
              </>
            ) : (
              null
            )}
          </View>
        </View>
      </TouchableOpacity>
      <Menu>
        <MenuTrigger>
          <Option name="options-vertical" size={20} color="white" />
        </MenuTrigger>
        <MenuOptions style={{backgroundColor: '#26262E', padding: 10}}>
          <MenuOption onSelect={handleInviteOption}>
            <Text style={{color: 'white', fontSize: 16}}>Invite</Text>
          </MenuOption>
          <MenuOption onSelect={handleDeleteOption}>
            <Text style={{color: 'red', fontSize: 16}}>Delete</Text>
          </MenuOption>
        </MenuOptions>
      </Menu>
    </View>
  );
};

export default ChatHeader;
