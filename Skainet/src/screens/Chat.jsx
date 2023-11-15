import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import ChatHeader from '../components/ChatHeader';
import TextMessage from '../components/TextMessage';
import AddIcon from 'react-native-vector-icons/Entypo';
import Send from 'react-native-vector-icons/Feather';
import AttachmentModal from '../components/AttachmentModal';
import Generation from '../components/Generation';
import LinearGradient from 'react-native-linear-gradient';
import {buttonGradient, settingsButton} from '../styles/Theme';

const Chat = ({route}) => {
  const chatId = route.params.chatId; 

  const [inputMsg, setInputMsg] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [genModalVisible, setGenModalVisible] = useState(false);
  const [genType, setGenType] = useState('');
  const [selectedCollaborators, setSelectedCollaborators] = useState([]);

  const handleModalOpen = () => {
    setModalVisible(true);
  };

  const handleModalClose = () => {
    setModalVisible(false);
  };

  const InputHandling = text => {
    const words = text.split(' ');
    const lastWord = words[words.length - 1];

    if (lastWord.startsWith('@') && lastWord.trim().length > 1 && !text.endsWith(' ')) {
        setGenModalVisible(true);
    } else {
        setGenModalVisible(false);
    }

    setInputMsg(text);
};


  
  const handleKeyPress = ({nativeEvent}) => {
    if (nativeEvent.key === 'Backspace' && inputMsg.length === 0) {
      setGenType('');
      setSelectedCollaborators([])
    }
  };
  const handleGenerationSelection = name => {
    setGenType('@' + name);
    setGenModalVisible(false);
  };
  const handleCollaborators = (name) => {
    if (!selectedCollaborators.includes(name)) {
      setSelectedCollaborators((prevSelectedCollaborators) => [
        ...prevSelectedCollaborators,
        name,
      ]);
    }
    setInputMsg((prevInputMsg) => {
      return prevInputMsg ? prevInputMsg + " " + "@"+name : "@"+name;
    });
  };
  
  const handleSend = () => {
    console.log('clicked');
  };

  const SelectedTags = () => {
    if (genType.length !== 0 ) {
      return (
        <TouchableOpacity onPress={() => setGenModalVisible(!genModalVisible)}
          style={{
            position: 'absolute',
            left: 75,
           
            padding: 10,
            zIndex: 1,
            borderRadius: 8,
            display: 'flex',
            flexDirection: 'row',
            gap: 10,
          }}
        >
          {genType.length !== 0 ? (
            <LinearGradient style={{padding:10 , borderRadius:8}} colors={buttonGradient}>
            <Text style={{ color: 'white' }}>{genType.length > 15 ? genType.slice(0, 8) : genType}</Text>
             </LinearGradient>
          ) : null}
          
        </TouchableOpacity>
      );
    }
    return null;
  };
  
  const getTextInputStyle = () => {
    let paddingLeftValue = 10;
    if (genType.length  <= 15  && genType != 0) {
      paddingLeftValue = 95;
    } else if (genType.length >= 15) {
      paddingLeftValue = 100 ;
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
  
  

  return (
    <View style={styles.container}>
    <ChatHeader chatId={chatId} />
    
    
    <AttachmentModal modalVisible={modalVisible} closeModal={handleModalClose} />
    
    
    
    <ScrollView contentContainerStyle={styles.scrollView}>
      <TextMessage user={'Collaborator'} />
      <TextMessage user={'OpenAI'} />
      <TextMessage />
    </ScrollView>






{/* Input Message Field Component */}
    {/* Generation Option */}
    {genModalVisible ? (
      <Generation onSelectGeneration={handleGenerationSelection} onSelectCollaborators={handleCollaborators} />
    ) : null}
    <View style={styles.inputContainer}>
      <TouchableOpacity style={styles.tagButton} onPress={() => setGenModalVisible(!genModalVisible)}>
        <Image source={require('../../assets/tag.png')} style={styles.tagIcon} />
      </TouchableOpacity>
      <SelectedTags />

      <TextInput
        onChangeText={InputHandling}
        onKeyPress={handleKeyPress}
        value={inputMsg}
        style={getTextInputStyle()}
        multiline={true} // set multiline to true
       
        placeholder="Enter Message"
      />

      {inputMsg.length === 0 ? (
        <TouchableOpacity onPress={handleModalOpen} style={{ position: 'absolute', right: 23 }}>
          <AddIcon name="plus" size={20} color="white" />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={handleSend} style={{ position: 'absolute', right: 23 }}>
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
