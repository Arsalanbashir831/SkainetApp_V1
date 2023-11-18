import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, Image, StyleSheet,TextInput } from 'react-native';
import { PermissionsAndroid } from 'react-native';
import Contacts from 'react-native-contacts';
import { CheckBox } from 'react-native-elements';
import Header from '../components/Header';
import Icon from 'react-native-vector-icons/AntDesign';
import IconFA from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';
import { skaiDark } from '../styles/Theme';


const Invite = ({navigation,route }) => {
  const {chatId}=route.params
  const [contactList, setContactList] = useState(null);
  const [checkedContacts, setCheckedContacts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredContacts, setFilteredContacts] = useState(null);

  const handleContactSelection = (item) => {
    let newCheckedContacts = [...checkedContacts];
  
    // Check if the item is already in the checkedContacts array
    const index = newCheckedContacts.findIndex((contact) => contact === item);
  
    if (index !== -1) {
      // If the item is found, remove it from the array
      newCheckedContacts.splice(index, 1);
    } else {
      // If the item is not found, add it to the array
      newCheckedContacts.push(item);
    }
  
    setCheckedContacts(newCheckedContacts);
  };
  const handleSearch = (text) => {
    setSearchQuery(text);
    if (contactList) {
      const filteredContacts = contactList.filter(
        (contact) =>
          (contact.displayName && contact.displayName.toLowerCase().includes(text.toLowerCase())) ||
          (contact.phoneNumbers && contact.phoneNumbers.length > 0 &&
            contact.phoneNumbers[0].number.includes(text)) ||
          (contact.emailAddresses && contact.emailAddresses.length > 0 &&
            contact.emailAddresses[0].email.includes(text))
      );
      setFilteredContacts(filteredContacts);
    }
  };

  useEffect(() => {
    getPermission();
  }, []);

  const getPermission = () => {
    PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_CONTACTS, {
      title: 'Contacts',
      message: 'This app would like to view your contacts.',
      buttonPositive: 'Please accept',
    })
      .then((res) => {
        console.log('Permission: ', res);
        Contacts.getAll()
          .then((contacts) => {
            setContactList(contacts);
          })
          .catch((e) => {
            console.log(e);
          });
      })
      .catch((error) => {
        console.error('Permission error: ', error);
      });
  };

  return (
    <>
      <LinearGradient colors={skaiDark} style={{ flex: 1 }}>
        <Header name={'Invite Friend'} />
        <View
          style={{
            marginVertical: 50,
            padding: 10,
            paddingHorizontal: 30,
            display: 'flex',
            gap: 30,
          }}
        >
          <TouchableOpacity onPress={()=>navigation.navigate('EmailInvite',{chatId:chatId})} style={{backgroundColor: '#2F2C3B'}}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                gap: 10,
                padding: 10,
                justifyContent: 'space-between',
              }}>
              <Text>Invite via Email</Text>
              <Icon name="mail" size={20} color="white"></Icon>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={{backgroundColor: '#2F2C3B'}}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                gap: 10,
                padding: 10,
                justifyContent: 'space-between',
              }}>
              <Text>Invite via Whatsapp</Text>
              <IconFA name="whatsapp" size={20} color="green"></IconFA>
            </View>
          </TouchableOpacity>
          {/* Your other components here */}
          <TextInput
        placeholder="Search Contact"
        style={{ backgroundColor: "#2F2C3B", color: "white", padding: 10 }}
        onChangeText={handleSearch}
        value={searchQuery}
      />
          <FlatList
             data={filteredContacts || contactList}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => (
                <TouchableOpacity  onPress={() => handleContactSelection(item)}>
              <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10 , justifyContent:'space-between' }}>
               <Image  style={{height:40 , width:40 , backgroundColor:'white' , borderRadius:20 }} source={{uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Breezeicons-actions-22-im-user.svg/1200px-Breezeicons-actions-22-im-user.svg.png'}}></Image>
                <View style={{ marginLeft: 10 }}>
                  <Text>{item.displayName}</Text>
                  <Text>{item.phoneNumbers.length > 0 ? item.phoneNumbers[0].number : ''}</Text>
                  <Text>{item.emailAddresses.length > 0 ? item.emailAddresses[0].email : ''}</Text>
                </View>
                  {checkedContacts.includes(item) ? <Text>✔</Text> : <CheckBox checked={false} />}
              </View>
                </TouchableOpacity>
            )}
          />
        </View>
      </LinearGradient>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  label: {
    marginLeft: 8,
  },
});

export default Invite;
