import { View, Text, ScrollView, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import ChatHeader from '../components/ChatHeader';
import TextMessage from '../components/TextMessage';
import AddIcon from 'react-native-vector-icons/Entypo';
import Send from 'react-native-vector-icons/Feather';
import AttachmentModal from '../components/AttachmentModal';

const Chat = () => {
  const [inputMsg, setInputMsg] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const handleModalOpen = () => {
    setModalVisible(true);
  };

  const handleModalClose = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <ChatHeader />
      <AttachmentModal modalVisible={modalVisible} closeModal={handleModalClose}></AttachmentModal>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <TextMessage user={'Collaborator'} />
        <TextMessage user={'OpenAI'} />
        <TextMessage />
      </ScrollView>
      <View style={styles.inputContainer}>
        <TouchableOpacity style={styles.tagButton}>
          <Image source={require('../../assets/tag.png')} style={styles.tagIcon} />
        </TouchableOpacity>
        <TextInput onChangeText={(text) => setInputMsg(text)} style={styles.textInput} placeholder='Enter Message' />
       
          {inputMsg.length === 0 ? (
            <TouchableOpacity  onPress={handleModalOpen} style={{ position: 'absolute', right: 23 }} >
            <AddIcon name='plus' size={20} color='white'  />
             </TouchableOpacity>
          ) : (
            <TouchableOpacity  style={{ position: 'absolute', right: 23 }} >
            <Send name='send' size={20} color='white' />
             </TouchableOpacity>
          )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    height: '100%',
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
    width: '85%',
    marginLeft: 10,
    color: 'white',
  },
});

export default Chat;
