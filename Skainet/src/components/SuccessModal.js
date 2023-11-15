import { View, Text,Modal,StyleSheet,TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Feather';
const SuccessModal = ({visible,onClose,closeModal,text,btnText }) => {
  return (
    <Modal
    visible={visible}
    animationType='slide'
    transparent={true}
    onRequestClose={onClose}
  >
    <View style={styles.modalContainer}>
      <View style={styles.modalContent}>
        <Icon style={{marginVertical:5}} name='check-circle' color={'green'} size={27} />
        <Text style={styles.modalText}>{text} Successful!</Text>
        <TouchableOpacity onPress={closeModal} style={styles.modalButton}>
          <Text style={styles.modalButtonText}>{btnText}</Text>
        </TouchableOpacity>
      </View>
    </View>
  </Modal>
  )
}
const styles = StyleSheet.create({

modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'black',
  },
  modalButton: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5,
  },
  modalButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
})


export default SuccessModal