import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {link, skaiGradientTheme} from '../styles/Theme';
import GradientButton from '../components/GradientButton';


const NewPin = () => {


  return (
    <LinearGradient style={styles.container} colors={skaiGradientTheme}>
      <View style={styles.contentContainer}>
        <View>
          <Image
            style={styles.logo}
            source={require('../../assets/splashLogo.png')}
          />
          <Text style={styles.title}>Create New PIN</Text>
          <View style={styles.inputContainer}>
            <View style={styles.PinInputContainer}>
            
             
              <TextInput
                secureTextEntry={true}
                style={styles.PinInput}
                placeholder="Enter New Pin"
              />
              <TextInput
                secureTextEntry={true}
                style={styles.PinInput}
                placeholder="Confirm New Pin"
              />
            </View>
          </View>
          <TouchableOpacity style={styles.buttonContainer}>
            <GradientButton text={'Continue'} />
          </TouchableOpacity>
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

    textAlign: 'right',
  },
  termsContainer: {
    alignSelf: 'center',
    marginBottom: 20,
  },
  inputContainer: {
    marginTop: 10,
  },
  PinInputContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  PinInput: {
    borderWidth: 1,
    borderColor: '#69698C66',
    borderRadius: 8,
    paddingHorizontal: 25,
    width: '100%',
    
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

export default NewPin;
