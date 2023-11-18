import { View, Text , TextInput,TouchableOpacity, Image, ActivityIndicator} from 'react-native'
import React, {useState} from 'react'
import Header from '../components/Header'
import { skaiGradientTheme } from '../styles/Theme'
import LinearGradient from 'react-native-linear-gradient'
import GradientButton from '../components/GradientButton'
import axios from 'axios'
import useGetUserToken from '../CustomHooks/GetUserToken'



const EmailInvite = ({route,navigation}) => {
const token = useGetUserToken()
    const {chatId} = route.params
    const [email, setEmail] = useState('')
    const [loading, setLoading] = useState(false)

    const handleAddCollaborator = async () => {
        try {
            setLoading(true);
            const url = 'https://api.ilmoirfan.com/chats/invite_collaborator';
            const config = {
                headers: { Authorization: `Bearer ${token}` }
            };
            const body = {
                chat_id: chatId,
                email: email,
                permissions: "editor"
            };
            const response = await axios.post(url, body, config);
            console.log(response.data); 
            setLoading(false);
            navigation.navigate('Chat', { chatId: chatId });
           
        } catch (error) {
            console.error(error);
            setLoading(false);
        }
    };
    return (
        <>
            <Header name={'Email Invite'} />
            <LinearGradient colors={skaiGradientTheme} style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ alignItems: 'center' }}>
                    <Image style={{ width: 150, height: 150, alignSelf: 'center' }} source={require('../../assets/ball.png')} />
                    <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold', alignSelf: 'center', marginTop: 20 }}>
                        Enter the Email of the Skai User
                    </Text>
                    <TextInput
                        multiline
                        numberOfLines={3}
                        style={{
                            width: '80%',
                            backgroundColor: '#1C1C1E',
                            color: 'white',
                            borderRadius: 8,
                            marginVertical: 20,
                            padding: 10,
                            paddingHorizontal:25
                        }}
                        placeholderTextColor={'gray'}
                        placeholder="Enter the Email of the Skai User"
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                    />
                    <TouchableOpacity
                        style={{
                            paddingVertical: 15,
                            paddingHorizontal: 30,
                            borderRadius: 8,
                            marginTop: 10,
                        }}
                        onPress={handleAddCollaborator}
                        disabled={loading}
                    >
                        {loading ? (
                            <ActivityIndicator size="small" color="white" />
                        ) : (
                            <GradientButton text={'Add Collaborator'}/>
                        )}
                    </TouchableOpacity>
                </View>
            </LinearGradient>
        </>
    )
}

export default EmailInvite