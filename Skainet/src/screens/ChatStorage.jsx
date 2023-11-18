import { View, Text,Image } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { skaiDark, skaiGradientTheme } from '../styles/Theme'
import EditIcon from 'react-native-vector-icons/AntDesign' 
import { ScrollView } from 'react-native-gesture-handler'
import { FlatList } from 'react-native';

const ChatStorage = ({ navigation, route }) => {
  const { chatTitle, collaborators, img } = route.params;

  const renderCollaborator = ({ item }) => {
    return (
      <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 10 }}>
        <Image style={{ height: 40, width: 40, borderRadius: 20 }} source={{ uri: item.avatar }} />
        <Text style={{ marginLeft: 10, color: 'white', fontSize: 16 }}>{item.full_name}</Text>
      </View>
    );
  };

  return (
    <>
      <LinearGradient colors={skaiDark} style={{ flex: 1 }}>
        {/* Chat Profile Main Header */}
        <LinearGradient colors={skaiGradientTheme} style={{ padding: 20 }}>
          <EditIcon onPress={() => { navigation.goBack() }} name='left' size={20} color='white'></EditIcon>
          <View style={{ alignSelf: 'center' }}>
            <Image style={{ height: 120, width: 120, borderRadius: 100, alignSelf: 'center' }} source={{ uri: img }}></Image>
            <View style={{ paddingVertical: 10, alignSelf: 'center' }}>
              <View style={{ display: 'flex', flexDirection: 'row', gap: 10 }}>
                <EditIcon name='edit' size={18} color='white'></EditIcon>
                <Text style={{ color: 'white', fontSize: 18, textAlign: 'center', width: 280 }}>{chatTitle}</Text>
              </View>
            </View>
          </View>
        </LinearGradient>

        {/* Collaborators List */}
        <View style={{padding:20}}>
        <Text style={{color:'white',fontSize:20,paddingBottom:30,textAlign:'center'}}>Collaborators</Text>
        <FlatList
          data={collaborators}
          renderItem={renderCollaborator}
          keyExtractor={(item,index) =>index}
        />
        </View>
      </LinearGradient>
    </>
  );
};

export default ChatStorage