import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  ActivityIndicator,

} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { link, skaiGradientTheme } from '../styles/Theme';
import GradientButton from '../components/GradientButton';
import { CountryPicker } from 'react-native-country-codes-picker';
import Icon from 'react-native-vector-icons/Feather'
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import SuccessModal from '../components/SuccessModal';
const Login = ({navigation}) => {

const [authData, setAuthData] = useState({
    email: '',
    password: '',
})
const [successModalVisible, setSuccessModalVisible] = useState(false);
const [loading, setLoading] = useState(false);
const [error, setError] = useState('');

const handlcChange = (text, fieldName) => {
  setAuthData({
    ...authData,
    [fieldName]: text,
  });
};
const handleLogin = async () => {
  try {
    setLoading(true);
    const response = await axios.post(
      "https://api.ilmoirfan.com/auth/login",
      {
        email: authData.email,
        password: authData.password,
      }
    );

    if (response.status === 200) {
      setSuccessModalVisible(true);
      const authToken = response.data.token;

      await AsyncStorage.setItem("token", authToken);
      
    }
    
  } catch (e) {
    setError('Invalid Credentials');
  }
  finally{  
    setLoading(false);
  }
}

const closeModal = async () => {

  navigation.reset({ index: 0, routes: [{ name: "ChatListBottom" }] });
  setSuccessModalVisible(false);
  setAuthData({ email: '', password: '' });
};
  return (
    <LinearGradient style={styles.container} colors={skaiGradientTheme}>
      <View style={styles.contentContainer}>
        <View>
          <Image
            style={styles.logo}
            source={require('../../assets/splashLogo.png')}
          />
          <Text style={styles.title}>Login</Text>
          <View style={styles.inputContainer}>
          <Text style={{color:'red', fontWeight:'bold' , fontSize:20}}>{error}</Text>
          <TextInput
              value={authData.email}
              onChangeText={(text) => handlcChange(text, 'email')}
              style={{backgroundColor:'#00000040' , padding:10 , borderColor:'#69698C66' , backgroundColor:"#00000040",borderWidth:1 , borderRadius:10 }}
              placeholder="Email"
            />
           <View style={{width:'100%', display:'flex' , flexDirection:'row' , alignItems:'center' , borderColor:'#69698C66' , backgroundColor:"#00000040",borderWidth:1 , borderRadius:10 }}>
        <TextInput 
        value={authData.password}
        onChangeText={(text) => handlcChange(text, 'password')}
        secureTextEntry={true} placeholder='Password' style={{ width:'90%',   padding:10,color:'white'}}/>
      <Icon  name='eye' color={'white'} size={17}/>
       </View>
       
         <Text onPress={()=>(navigation.navigate('ForgotPin'))} style={styles.forgotPassword}>Forgot Password</Text>
          </View>
          <TouchableOpacity onPress={handleLogin} style={styles.buttonContainer}>
            <GradientButton text={'Login'} />
          </TouchableOpacity>
          <Text style={styles.loginText} onPress={()=>(navigation.navigate('Signup'))}>
            Already have an account?{' '}
            <Text style={styles.loginLink}>Create Account</Text>
          </Text>
        </View>
        {loading && (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size='large' color='white' />
        </View>
      )}
      <SuccessModal visible={successModalVisible} text={'Login'} onClose={closeModal} closeModal={closeModal} btnText={'Go to Chats'}/>
     
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    padding: 30,
    justifyContent: 'space-between',
    alignItems: 'stretch',
    flex: 1,
  },
  logo: {
    height: 160,
    width: 150,
    alignSelf: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 25,
    fontWeight: '400',
    marginVertical: 20,
    color: 'white',
    alignSelf: 'flex-start',
  },
  buttonContainer: {
    marginVertical: 20,
    width: '100%',
  },
  loginText: {
    textAlign: 'center',
    color: 'gray',
    fontSize: 16,
  },
  loginLink: {
    color: link,
    
  },
  forgotPassword: {
    color: link,
    
    textAlign:'right'
  },
  termsContainer: {
    alignSelf: 'center',
    marginBottom: 20,
  },
  inputContainer: {
    marginTop: 10,
    display:'flex',
    gap:10
  },
  phoneInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  phoneInput: {
    borderWidth: 1,
    borderColor: '#69698C66',
    borderRadius: 8,
    paddingHorizontal: 25,
    width: '80%',
    borderLeftWidth: 0,
    marginVertical: 10,
  },
  countryCodeButton: {
    width: '20%',
    height: 50,
    backgroundColor: 'transparent',
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#69698C66',
  },
  countryCodeText: {
    color: 'white',
    fontSize: 15,
  },
  countryPicker: {
    modal: {
      height: 500,
      backgroundColor: '#121212',
    },
    countryButtonStyles: {
      backgroundColor: '#121212',
    },
    textInput: {
      color: 'white',
      backgroundColor: '#00000040',
    },
    line: {
      backgroundColor: '#8222CD',
    },
    itemsList: {
      backgroundColor: '#1E1E1E',
      borderBottomWidth: 0,
      padding: 10,
    },
  },
  input: {
    borderWidth: 1,
    borderColor: '#00000040',
    borderRadius: 8,
    marginVertical: 10,
    paddingHorizontal: 25,
  },
  loadingContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
});

export default Login;
