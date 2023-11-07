import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Animated } from 'react-native';
import { skaiDark, buttonGradient } from '../styles/Theme';
import LinearGradient from 'react-native-linear-gradient';

const ChatListHeader = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const slideAnim = useState(new Animated.Value(0))[0];

  const handleMenuToggle = () => {
    if (!menuVisible) {
      setMenuVisible(true);
      Animated.timing(slideAnim, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start(() => setMenuVisible(false));
    }
  };

  return (
    <View>
      {/* header */}
      <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', paddingVertical: 30, justifyContent: 'space-between' }}>
        <Image source={require('../../assets/logoHorizontal.png')} />
        <LinearGradient style={{ marginHorizontal: 30, borderRadius: 5 }} colors={[...buttonGradient]}>
          <TouchableOpacity onPress={handleMenuToggle}>
            <Text style={{ color: 'white', paddingHorizontal: 10, fontSize: 20 }}>+</Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>

      {/* Pop-up menu */}
      {menuVisible && (
        <Animated.View
          style={[
            styles.popupMenu,
            {
              transform: [
                {
                  translateY: slideAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: [100, 0],
                  }),
                },
              ],
            },
          ]}
        >
        <TouchableOpacity onPress={()=>setMenuVisible(false)}>
          <Text style={styles.popupMenuItem}>New Chat</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>setMenuVisible(false)}>
          <Text style={styles.popupMenuItem}>New Group</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>setMenuVisible(false)}>
          <Text style={styles.popupMenuItem}>Chat With SKAI</Text>
        </TouchableOpacity>
        </Animated.View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  popupMenu: {
    position: 'absolute',
    top: 90,
    right: 20,
    backgroundColor: 'black',
    padding: 20,
    borderRadius: 10,
    zIndex:1,
    
  },
  popupMenuItem: {
    color: 'white',
    fontSize: 16,
    paddingVertical: 8,
  },
});

export default ChatListHeader;
