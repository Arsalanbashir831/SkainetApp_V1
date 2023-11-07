// Import ScrollView from react-native
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import Picture from 'react-native-vector-icons/AntDesign';

const Generation = ({ onSelectGeneration }) => {
  const generationType = [
    {
      name: 'SKAI',
      img: require('../../assets/ball.png'),
      width: 40,
      height: 40,
      icon: '',
      border: true,
    },
    {
      name: 'IMAGE',
      img: '',
      icon: 'picture',
      border: false,
    },
  ];
  const Collaborator = [
    'Arsalan', 'Ahmed', 'Abdullah', 'Malik Abdullah Mallik Chaudary Chaapra',
    'John', 'Doe', 'Jane', 'Doe', 'Robert', 'Smith', 'Linda', 'Johnson', 'William', 'Brown'
  ];

  const handleGenerationSelection = (name) => {
    onSelectGeneration(name);
  };

  return (
    <View
      style={{
        backgroundColor: '#1D1D1F',
        height: 250,
        borderTopEndRadius: 20,
        borderTopStartRadius: 20,
      }}
    >
     <Text style={{fontSize:20,color:'white' , padding:10,textAlign:'center'}}>Collaborator</Text>
      <ScrollView style={{padding:10}} >
     
        {Collaborator.map((element, index) => {
          return (
            <TouchableOpacity
              style={{
                paddingHorizontal: 10,
              }}
              key={index}
              onPress={() => handleGenerationSelection(element)}
            >
              <View
                style={{
                  padding: 5,
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: 20,
                }}
              >
                <Text style={{ fontSize: 18, color: 'white' }}>{element}</Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>

      <View style={{ marginTop: 20 }}>
        {generationType.map((element, index) => (
          <TouchableOpacity
            style={{
              paddingHorizontal: 10,
              borderBottomWidth: element.border ? 1 : 0,
              borderBottomColor: '#69698C',
            }}
            key={index}
            onPress={() => handleGenerationSelection(element.name)}
          >
            <View
              style={{
                padding: 5,
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: 20,
              }}
            >
              <Text style={{ fontSize: 18, color: 'white' }}>{element.name}</Text>
              {element.img !== '' ? (
                <Image style={{ height: element.width, width: element.height }} source={element.img} />
              ) : (
                <Picture name={element.icon} size={30} color="white" />
              )}
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default Generation;
