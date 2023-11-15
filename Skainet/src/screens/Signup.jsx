import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  ActivityIndicator,
  Modal,
  Alert,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { skaiGradientTheme, link } from '../styles/Theme';
import GradientButton from '../components/GradientButton';
import Icon from 'react-native-vector-icons/Feather';
import axios from 'axios';
import SuccessModal from '../components/SuccessModal';

const Signup = ({ navigation }) => {
  const [isPasswordVisible, setPasswordVisibility] = useState(true);
  const [err, setErr] = useState('');
  const [loading, setLoading] = useState(false);
  const [successModalVisible, setSuccessModalVisible] = useState(false);

  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const handlePasswordVisibility = () => {
    setPasswordVisibility(!isPasswordVisible);
  };

  const handlcChange = (text, fieldName) => {
    setUserData({
      ...userData,
      [fieldName]: text,
    });
  };

  const handleSignup = async () => {
    try {
      setLoading(true);

      const response = await axios.post(
        'https://api.ilmoirfan.com/auth/email-signup',
        {
          email: userData.email,
          first_name: userData.firstName,
          last_name: userData.lastName,
          password: userData.password,
        }
      );

      if (response.status === 200) {
        setSuccessModalVisible(true);
       
      }
    } catch (error) {
      if (error.response) {
        setErr(error.response.data.message);
      } else {
        setErr('Something went wrong');
      }
    } finally {
    
      setLoading(false);
    }
  };

  const closeModal = () => {
    setSuccessModalVisible(false);
    navigation.navigate('Otp',{email:userData.email});
    setUserData({ firstName: '', lastName: '', email: '', password: '' });
  };

  return (
    <LinearGradient style={styles.container} colors={skaiGradientTheme}>
      <View style={styles.contentContainer}>
        <View>
          <Image
            style={styles.logo}
            source={require('../../assets/splashLogo.png')}
          />
          <Text style={styles.title}>Sign Up</Text>
          <View style={styles.inputContainer}>
          <Text style={{color:'red' , fontWeight:'bold'}}>{err}</Text>
            <View style={{ display: 'flex', flexDirection: 'row', flexGrow: 1, gap: 10 }}>
              <TextInput
                value={userData.firstName}
                onChangeText={(text) => handlcChange(text, 'firstName')}
                name='firstName'
                placeholder='First Name'
                style={{ width: '48%', borderWidth: 1, borderRadius: 10, padding: 10, borderColor: '#69698C66', backgroundColor: "#00000040", color: 'white' }}
              />
              <TextInput
                value={userData.lastName}
                onChangeText={(text) => handlcChange(text, 'lastName')}
                placeholder='Last Name'
                style={{ width: '48%', borderWidth: 1, borderRadius: 10, padding: 10, borderColor: '#69698C66', backgroundColor: "#00000040", color: 'white' }}
              />
            </View>
            <TextInput
              value={userData.email}
              onChangeText={(text) => handlcChange(text, 'email')}
              name='email'
              placeholder='Email'
              style={{ borderWidth: 1, borderRadius: 10, padding: 10, borderColor: '#69698C66', backgroundColor: "#00000040", color: 'white' }}
            />
            <View style={{ display: 'flex', flexDirection: 'row', flexGrow: 1, gap: 10 }}>
              <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', width: '100%', borderColor: '#69698C66', backgroundColor: "#00000040", borderWidth: 1, borderRadius: 10 }}>
                <TextInput
                  value={userData.password}
                  onChangeText={(text) => handlcChange(text, 'password')}
                  name='password'
                  secureTextEntry={isPasswordVisible}
                  placeholder='Password'
                  style={{ width: '80%', padding: 10, color: 'white' }}
                />
                <Icon onPress={handlePasswordVisibility} name={isPasswordVisible ? 'eye-off' : 'eye'} color={'white'} size={17} />
              </View>
            </View>
          </View>
          <TouchableOpacity style={styles.buttonContainer} onPress={handleSignup}>
            <GradientButton text={'Signup'} />
          </TouchableOpacity>
          <Text style={styles.loginText} onPress={() => (navigation.navigate('Login'))}>
            Already have an account?{' '}
            <Text style={styles.loginLink}>Login</Text>
          </Text>
        </View>
        <View style={styles.termsContainer}>
          <Text style={styles.loginText}>
            By clicking “Sign Up”, you agree to the{' '}
            <Text style={styles.loginLink}>Terms of Service and Privacy Policy</Text>
          </Text>
        </View>
      </View>

      {/* Loading Animation */}
      {loading && (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size='large' color='white' />
        </View>
      )}
      <SuccessModal btnText={'Verify Email'} text={'Signup'} visible={successModalVisible} onClose={closeModal} closeModal={closeModal}/>

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
    marginVertical: 15,
    width: '100%',
  },
  loginText: {
    textAlign: 'center',
    color: 'gray',
    fontSize: 16,
  },
  loginLink: {
    color: link,
    textDecorationLine: 'underline',
  },
  termsContainer: {
    alignSelf: 'center',
    marginBottom: 20,
  },
  inputContainer: {
    marginTop: 10,
    display:'flex',
    gap:15,
    width:'100%'
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
      backgroundColor: '#121212',
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
    borderColor: '#69698C66',
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

export default Signup;
