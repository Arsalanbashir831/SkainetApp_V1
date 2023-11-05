import { View, Text, Modal, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import DocIcon from 'react-native-vector-icons/Entypo'
import ImageIcon from 'react-native-vector-icons/AntDesign'
const AttachmentModal = ({ modalVisible, closeModal }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={closeModal}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalText}>Upload Attachments</Text>
        <View style={{display:'flex',gap:20}}>
         <TouchableOpacity>
         <View style={{display:'flex',flexDirection:'row' , justifyContent:'center',gap:20}}>
            <Text>Document</Text>
            <DocIcon name='text-document' size={18} color='white' />
         </View>
         </TouchableOpacity>
         <TouchableOpacity>
         <View style={{display:'flex',flexDirection:'row' , justifyContent:'center',gap:20}}>
            <Text>Image</Text>
            <ImageIcon name='picture' size={18} color='white' />
         </View>
         </TouchableOpacity>
         <TouchableOpacity onPress={closeModal}>
         <View style={{display:'flex',flexDirection:'row' , justifyContent:'center',gap:20}}>
            <Text style={{color:'red'}}>Close</Text>
            <ImageIcon name='close' size={18} color='red' />
         </View>
         </TouchableOpacity>
        </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#1D1D1F',
    padding: 20,
    borderRadius: 10,
    width: '80%',
  },
  modalText: {
    color: 'white',
    fontSize: 20,
    marginBottom: 20,
    textAlign: 'center',
  },
});

export default AttachmentModal;
