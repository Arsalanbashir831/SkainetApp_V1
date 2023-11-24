import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  Alert,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState,useRef} from 'react';
import ChatHeader from '../components/ChatHeader';

import AddIcon from 'react-native-vector-icons/Entypo';
import Send from 'react-native-vector-icons/Feather';
import AttachmentModal from '../components/AttachmentModal';
import Generation from '../components/Generation';
import LinearGradient from 'react-native-linear-gradient';
import {buttonGradient, settingsButton} from '../styles/Theme';

import useUserDetails from '../CustomHooks/GetUserDetails';
import useGetUserToken from '../CustomHooks/GetUserToken';
import FetchMessage from '../Websocket/FetchMessage';

import Message from '../components/Message';
import sendMessage from '../Websocket/SendMessage';
import useFetchChat from '../CustomHooks/FetchChat';

const Chat = ({route}) => {
  
  const {chatId,role} =route.params
  const token = useGetUserToken();
  const sender = useUserDetails(token);
  const {Collaborator} = useFetchChat(token)

  const [inputMsg, setInputMsg] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [genModalVisible, setGenModalVisible] = useState(false);
  const [genType, setGenType] = useState('');
  const [selectedCollaborators, setSelectedCollaborators] = useState([]);
  const [socketData, setSocketData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [typingAnimation , setTypingAnimation] = useState(false)
  const scrollViewRef = useRef(null);

  const ws = new WebSocket(`wss://api.ilmoirfan.com/ws/chat/${chatId}/`);

  const SendMessage = () => {
    console.log('Msg Send to server');
    if (genType!='') {
      setTypingAnimation(true)
    }
 
    if (ws.readyState != WebSocket.OPEN) {
      ws.onopen = () => {
        ws.send(
          sendMessage(genType, inputMsg, sender?.userDetails?.id, chatId),
        );
      };
    } else {
      ws.send(
        sendMessage(genType, inputMsg, sender?.userDetails?.id, chatId),
      );
    }
    setInputMsg("")
    
  };

  const fetchInitialMessages = () => {
    if (ws.readyState === WebSocket.OPEN) {
      console.log('Ready:' + ws.readyState);
      ws.send(FetchMessage(sender?.userDetails?.id, chatId));
    } else {
      console.error('WebSocket is not open. Initial message not sent.');
    }
  };
const getCollaborator=()=>{
  return Collaborator
}
  useEffect(()=>{
    ws.onopen = () => {
      // connection opened
      getCollaborator()      
      console.log('WebSocket connection opened');
      fetchInitialMessages();
      if (scrollViewRef.current) {
        scrollViewRef.current.scrollToEnd({ animated: true });
      }
    };

    ws.onmessage = e => {
      setLoading(false);
      try {
        const response = JSON.parse(e.data);
        
        
        if (response && response.message === undefined) {
         
          setSocketData((prevSocketData) => [
            ...prevSocketData,
            ...(response.messages || []),
          ]);
        } else if (response) {
         
          setSocketData((prevSocketData) => [
            ...prevSocketData,
            response.message,
          ]);
         setTypingAnimation(false)
        }
      } catch (error) {
        console.error('Error parsing WebSocket message:', error);
      }
      ws.onerror = e => {
 
        console.log(e.message);
      };

      return () => {
        ws.close();
        console.log('WebSocket connection closed');
      };
    };
  },[])
  


  const handleModalOpen = () => {
    setModalVisible(true);
  };

  const handleModalClose = () => {
    setModalVisible(false);
  };

  const InputHandling = text => {
    const words = text.split(' ');
    const lastWord = words[words.length - 1];

    if (
      lastWord.startsWith('@') &&
      lastWord.trim().length > 1 &&
      !text.endsWith(' ')
    ) {
      setGenModalVisible(true);
    } else {
      setGenModalVisible(false);
    }

    setInputMsg(text);
  };

  const handleKeyPress = ({nativeEvent}) => {
    if (nativeEvent.key === 'Backspace' && inputMsg.length === 0) {
      setGenType('');
      setSelectedCollaborators([]);
    }
  };
  const handleGenerationSelection = name => {
    setGenType('@' + name);
    setGenModalVisible(false);
  };
  const handleCollaborators = name => {
    if (!selectedCollaborators.includes(name)) {
      setSelectedCollaborators(prevSelectedCollaborators => [
        ...prevSelectedCollaborators,
        name,
      ]);
    }
    setInputMsg(prevInputMsg => {
      return prevInputMsg ? prevInputMsg + ' ' + '@' + name : '@' + name;
    });
  };

  const SelectedTags = () => {
    if (genType.length !== 0) {
      return (
        <TouchableOpacity
          onPress={() => setGenModalVisible(!genModalVisible)}
          style={{
            position: 'absolute',
            left: 75,

            padding: 10,
            zIndex: 1,
            borderRadius: 8,
            display: 'flex',
            flexDirection: 'row',
            gap: 10,
          }}>
          {genType.length !== 0 ? (
            <LinearGradient
              style={{padding: 10, borderRadius: 8}}
              colors={buttonGradient}>
              <Text style={{color: 'white'}}>
                {genType.length > 15 ? genType.slice(0, 8) : genType}
              </Text>
            </LinearGradient>
          ) : null}
        </TouchableOpacity>
      );
    }
    return null;
  };

  const getTextInputStyle = () => {
    let paddingLeftValue = 10;
    if (genType.length <= 15 && genType != 0) {
      paddingLeftValue = 95;
    } else if (genType.length >= 15) {
      paddingLeftValue = 100;
    }

    return {
      padding: 10,
      borderWidth: 1,
      borderColor: 'lightblue',
      borderRadius: 5,
      flex: 1,
      marginLeft: 10,
      color: 'white',
      paddingLeft: paddingLeftValue,
      paddingRight: 40,
    };
  };

  const isSender = sender => (sender === 'OpenAI' ? 'OpenAI' : 'Collaborator');
  const renderTextMessage = (msg, index) => (
    <React.Fragment key={index}>
      <Message
        user={
          sender?.userDetails?.first_name +
            ' ' +
            sender?.userDetails?.last_name ===
          msg?.sender_details?.full_name
            ? 'Owner'
            : isSender(msg?.sender)
        }
        img={msg?.sender_details?.avatar}
        msg={msg?.message}
        name={msg?.sender_details?.full_name}
        type={msg?.type}
        sendTo ={msg?.sender_details?.sent_to?.full_name}
      />
    </React.Fragment>
  );

  //  console.log(socketData);

  return (
    <View style={styles.container}>
      <ChatHeader chatId={chatId} />
      {loading && (
        <>
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <ActivityIndicator color={'white'} size={50} />
          </View>
        </>
      )}
      <AttachmentModal
        modalVisible={modalVisible}
        closeModal={handleModalClose}
      />

      <ScrollView 
       ref={scrollViewRef}
      onContentSizeChange={() => {
        scrollViewRef.current.scrollToEnd({ animated: true });
      }}
      contentContainerStyle={styles.scrollView}>
        {socketData?.map(renderTextMessage)}
        {typingAnimation && (<>
          <Text style={{color:'white'}}>Typing .....</Text>
        </>)}
      </ScrollView>

      {/* Input Message Field Component */}
      {/* Generation Option */}
      {genModalVisible ? (
        <Generation
          onSelectGeneration={handleGenerationSelection}
          onSelectCollaborators={handleCollaborators}
          collaborators ={Collaborator}
          chatId={chatId}
          wordsCredit={sender?.userDetails?.credits}
          ImageCredit={sender?.userDetails?.images}
          planType={sender?.userDetails?.plan}
          role={role}
        />
      ) : null}
      <View style={styles.inputContainer}>
        <TouchableOpacity
          style={styles.tagButton}
          onPress={() => setGenModalVisible(!genModalVisible)}>
          <Image
            source={require('../../assets/tag.png')}
            style={styles.tagIcon}
          />
        </TouchableOpacity>
        <SelectedTags />

        <TextInput
          onChangeText={InputHandling}
          onKeyPress={handleKeyPress}
          value={inputMsg}
          style={getTextInputStyle()}
          multiline={true} // set multiline to true
          placeholder="Enter Message"
          placeholderTextColor={'white'}
        />

        {inputMsg.length === 0 ? (
          <TouchableOpacity
            onPress={handleModalOpen}
            style={{position: 'absolute', right: 23}}>
            <AddIcon name="plus" size={20} color="white" />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={SendMessage}
            style={{position: 'absolute', right: 23}}>
            <Send name="send" size={20} color="white" />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  scrollView: {
    padding: 10,
  },
  inputContainer: {
    backgroundColor: '#1D1D1F',
    flexDirection: 'row',
    paddingHorizontal: 10,
    alignItems: 'center',
    height: 70,
  },
  tagButton: {
    borderWidth: 1,
    borderColor: 'lightblue',
    padding: 14,
    borderRadius: 5,
  },
  tagIcon: {
    width: 20,
    height: 20,
  },
  textInput: {
    padding: 10,
    borderWidth: 1,
    borderColor: 'lightblue',
    borderRadius: 5,
    flex: 1,
    marginLeft: 10,
    color: 'white',

    paddingLeft: 85,
    paddingRight: 40,
  },
});

export default Chat;
