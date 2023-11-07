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
import {buttonGradient} from '../styles/Theme';

const Chat = () => {
  const [inputMsg, setInputMsg] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [genModalVisible, setGenModalVisible] = useState(false);
  const [genType, setGenType] = useState('');

  const handleModalOpen = () => {
    setModalVisible(true);
  };

  const handleModalClose = () => {
    setModalVisible(false);
  };

  const InputHandling = text => {
    if (text.includes('@') && inputMsg.length === 0) {
      setGenModalVisible(true);
    } else {
      setGenModalVisible(false);
    }

    setInputMsg(text);
  };
  const handleKeyPress = ({nativeEvent}) => {
    if (nativeEvent.key === 'Backspace' && inputMsg.length === 0) {
      setGenType('');
    }
  };
  const handleGenerationSelection = name => {
    setGenType('@' + name);
    setGenModalVisible(false);
  };
  const handleSend = () => {
    console.log('clicked');
  };
  return (
    <View style={styles.container}>
      <ChatHeader />
      <AttachmentModal
        modalVisible={modalVisible}
        closeModal={handleModalClose}
      />

      <ScrollView contentContainerStyle={styles.scrollView}>
        <TextMessage user={'Collaborator'} />
        <TextMessage user={'OpenAI'} />
        <TextMessage />
      </ScrollView>
      {/* Generation Option */}
      {genModalVisible ? (
        <Generation onSelectGeneration={handleGenerationSelection} />
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
        {genType.length != 0 ? (
          <>
            <LinearGradient
              colors={buttonGradient}
              style={{
                position: 'absolute',
                left: 75,
                backgroundColor: 'black',
                padding: 10,
                zIndex: 1,
                borderRadius: 8,
              }}>
              <TouchableOpacity
                onPress={() => {
                  setGenModalVisible(true);
                }}>
                <Text>{genType.length>15 ? genType.slice(0,8):genType}</Text>
              </TouchableOpacity>
            </LinearGradient>
          </>
        ) : null}

        <TextInput
          onChangeText={InputHandling}
          onKeyPress={handleKeyPress}
          value={inputMsg}
          style={{
            padding: 10,
            borderWidth: 1,
            borderColor: 'lightblue',
            borderRadius: 5,
            flex: 1,
            marginLeft: 10,
            color: 'white',
            paddingLeft:
              genType.length<=15 && genType!=0? 95: genType.length>=15? 100 : 10,
            paddingRight: 40,
          }}
          placeholder="Enter Message"
        />

        {inputMsg.length === 0 ? (
          <TouchableOpacity
            onPress={handleModalOpen}
            style={{position: 'absolute', right: 23}}>
            <AddIcon name="plus" size={20} color="white" />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={handleSend}
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
