
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import React, { useEffect,useState } from 'react';
import Picture from 'react-native-vector-icons/AntDesign';
import useFetchChat from '../CustomHooks/FetchChat';
import useGetUserToken from '../CustomHooks/GetUserToken';
// import useUserDetails from '../CustomHooks/GetUserDetails';

const Generation = ({ onSelectGeneration , onSelectCollaborators ,chatId ,wordsCredit,ImageCredit,planType }) => {
 
  const token = useGetUserToken();
  const {chatData, isLoading} = useFetchChat(token);
  // const {userDetails} = useUserDetails(token)
  const [filteredChatData, setFilteredChatData] = useState(null);
  const findChatById = () => {
    setFilteredChatData(chatData?.chats?.filter(chat => chat.id === chatId)[0]);
  };
  const role =filteredChatData?.role
  useEffect(() => {
    findChatById();
  }, [chatData]);


 
  const generationType = [
    {
      name: 'SKAI',
      img: require('../../assets/ball.png'),
      width: 40,
      height: 40,
      icon: '',
      border: true,
      isEnable:(planType==="Free Plan" && role==='Owner') ?
      (wordsCredit>0)  ?true:false
      :true      
    },
    {
      name: 'IMAGE',
      img: '',
      icon: 'picture',
      border: false,
      isEnable:(planType==="Free Plan" && role==='Owner') ?
      (ImageCredit>0)  ?true:false
      :true
    },
  ];


  const handleGenerationSelection = (name) => {
    onSelectGeneration(name);
  };

  const handleCollaborators = (name) => {
    onSelectCollaborators(name);
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
     
        {filteredChatData?.collaborators?.map((element, index) => {
          return (
            <TouchableOpacity
              style={{
                paddingHorizontal: 10,
              }}
              key={index}
              onPress={() => handleCollaborators(element.full_name)}
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
                <Text style={{ fontSize: 18, color: 'white' }}>{element.full_name}</Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>

      <View style={{ marginTop: 20 }}>
        {generationType.map((element, index) => (
          <TouchableOpacity disabled={!element.isEnable}
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
            <Text style={{ fontSize: 18, color: element.isEnable ? "white" : "gray" }}>{element.name}</Text>

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
