import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { skaiGradientTheme,link } from '../styles/Theme';
import GradientButton from '../components/GradientButton';
import { CountryPicker } from 'react-native-country-codes-picker';

const Signup = () => {
  const [show, setShow] = useState(false);
  const [countryCode, setCountryCode] = useState('');

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
            <View style={styles.phoneInputContainer}>
             
              <TouchableOpacity
                onPress={() => setShow(true)}
                style={styles.countryCodeButton}
              >
                <Text style={styles.countryCodeText}>
                  {countryCode === '' ? '+1' : countryCode}
                </Text>
              </TouchableOpacity>
            
              <TextInput
              
                keyboardType="number-pad"
                style={styles.phoneInput}
                placeholder="Whatsapp phone number"
              />
                <CountryPicker
                style={styles.countryPicker}
                show={show}
                onBackdropPress={() => setShow(false)}
                pickerButtonOnPress={(item) => {
                  setCountryCode(item.dial_code);
                  setShow(false);
                }}
              />
            </View>
            <TextInput 
             
            style={styles.input} placeholder="Email" />
            <TextInput
              secureTextEntry={true}
              style={styles.input}
              placeholder="PIN"
            />
          </View>
          <TouchableOpacity style={styles.buttonContainer}>
            <GradientButton text={'Signup'} />
          </TouchableOpacity>
          <Text style={styles.loginText} onPress={() => console.log('go to login')}>
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
    marginVertical: 10,
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
});

export default Signup;