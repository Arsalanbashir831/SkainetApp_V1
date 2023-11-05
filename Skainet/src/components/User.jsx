import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign'
const User = ({ img, name, msg,time }) => {
  return (
    <View style={styles.container}>
      <View style={styles.userInfoContainer}>
        <Image style={styles.userImage} source={{ uri: img }} />
        <View style={styles.userInfo}>
          <Text style={styles.userName}>{name}</Text>
          <Text style={styles.userMessage}>{msg}</Text>
        </View>
      </View>
      <View>
      <Text>{time}</Text>
    <Icon style={styles.arrow} name='right' size={20} color='white'></Icon>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 15,
    borderBottomColor: '#8E8E93',
    borderBottomWidth: 1,
    paddingBottom: 10,
  },
  userInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
  userImage: {
    height: 50,
    width: 50,
    borderRadius: 25,
  },
  userInfo: {
    alignSelf: 'flex-start',
  },
  userName: {
    fontSize: 20,
    color: 'white',
  },
  userMessage: {
    fontSize: 13,
    color: 'white',
  },
  arrow: {
    padding: 10,

  },
});

export default User;
