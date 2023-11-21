import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import { Swipeable, GestureHandlerRootView } from 'react-native-gesture-handler';
import DelIcon from 'react-native-vector-icons/AntDesign'
import { TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const User = ({ img, name, msg, time , id}) => {
  const navigation = useNavigation();
  const rightSwipe = () => {
    return (
      <View style={styles.leftSwipeContainer}>
      <DelIcon onPress={()=>console.log('Delete Button Clicked')} style={styles.deleteText} name='delete' size={18} color='white'></DelIcon>
      </View>
    );
  };

  return (
    <GestureHandlerRootView style={styles.rootView}>
      <Swipeable  renderRightActions={rightSwipe} overshootRight={false}>
      <TouchableWithoutFeedback onPress={() => {navigation.navigate('Chat',{chatId:id}) } }>
        <View style={styles.container}>
          <View style={styles.userInfoContainer}>
            <Image style={styles.userImage} source={{ uri: img }} />
            <View style={styles.userInfo}>
              <Text style={styles.userName}>{name}</Text>
              <Text style={styles.userMessage}>{msg.slice(0,16)}</Text>
            </View>
          </View>
          <View style={styles.rightContainer}>
            <Text>{time}</Text>
            {/* <Icon style={styles.arrow} name="right" size={20} color="white" /> */}
          </View>
        </View>
        </TouchableWithoutFeedback>
      </Swipeable>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  rootView: {
    flex: 1,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 15,

    paddingBottom: 2,
    backgroundColor: 'transparent',
    padding: 20,
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
  leftSwipeContainer: {
    height: '100%', // Match the height of the main container
  
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  deleteText: {
    color: 'white',
  backgroundColor:'red', padding:15,paddingVertical:20
  },
  rightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default User;
