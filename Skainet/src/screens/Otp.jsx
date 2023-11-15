import React, { useState, useRef } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
 import {skaiGradientTheme} from '../styles/Theme'; // You may need to adjust the path for skaiGradientTheme
import GradientButton from '../components/GradientButton';
import axios from 'axios';
import SuccessModal from '../components/SuccessModal';

const Otp = ({navigation,route}) => {
  const [successModalVisible, setSuccessModalVisible] = useState(false);
  const {email} = route.params;
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const refs = [useRef(), useRef(), useRef(), useRef(), useRef(), useRef()];
  const [loading, setLoading] = useState(false); // Added loading state
  const [error, setError] = useState('');

  const handleOtpChange = (index, value) => {
    const newOtp = [...otp];
    if (value.length <= 1) {
      newOtp[index] = value;
      setOtp(newOtp);
    }

    if (value && index < 5) {
      refs[index + 1].current.focus();
    }
  };

  const handleBackspace = (index, value) => {
    if (value === '' && index > 0) {
      const newOtp = [...otp];
      newOtp[index - 1] = '';
      setOtp(newOtp);
      refs[index - 1].current.focus();
    }
  };

  const confirmOTP = async () => {
    setLoading(true);
    const fullOTP = otp.join('');
    console.log(fullOTP);

    try {
      const response = await axios.post(
        'https://api.ilmoirfan.com/auth/code-verification',
        {
          email: email, 
          code: fullOTP, 
        }
      );
      if (response.status === 200) {

        setError('');
      setSuccessModalVisible(true);
       
      } else {
        setError('Invalid OTP');
      }
    } catch (error) {
      setError('Error in Verification');
      console.error('Verification failed:', error);
    }
    finally{
      setLoading(false);
    }
  } 
  const closeModal = () => {
    setSuccessModalVisible(false);
     navigation.navigate('Login');
    
  };
  return (
    <LinearGradient style={styles.container} colors={[...skaiGradientTheme]}>
      <Image style={styles.image} source={require('../../assets/splashLogo.png')} />
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Verify phone number</Text>
        <Text style={styles.subtitle}>
          Enter the OTP sent to your Email
          <Text style={styles.boldText}> {email}</Text>
        </Text>
        <View style={styles.otpContainer}>
          {otp.map((digit, index) => (
            <TextInput
              keyboardType='number-pad'
              key={index}
              style={styles.inputStyles}
              maxLength={1}
              value={digit}
              onChangeText={(value) => handleOtpChange(index, value)}
              onKeyPress={({ nativeEvent }) => {
                if (nativeEvent.key === 'Backspace') {
                  handleBackspace(index, digit);
                }
              }}
              ref={refs[index]}
            />
          ))}
        </View>
        <TouchableOpacity onPress={confirmOTP} style={{width:'100%' , marginVertical:40}}>

        <GradientButton text={"Continue"}/>
        </TouchableOpacity>
        <Text style={{alignSelf:'center'}}>PIN Valid for <Text style={{color:'red' , fontWeight:'bold'}}>5</Text> minutes</Text>
      </View>
      {loading && (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size='large' color='white' />
        </View>
      )}
      <SuccessModal btnText={'Lets Login'} text={'OTP Verification'} visible={successModalVisible} onClose={closeModal} closeModal={closeModal} />
      <Text style={{alignSelf:'center' , color:'red'}}>{error}</Text>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  },
  image: {
    alignSelf: 'center',
    height: 150,
    width: 140,
    marginVertical: 20,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingHorizontal: 40,
    marginVertical: 70,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 25,
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 18,
  },
  boldText: {
    fontWeight: 'bold',
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 20,
    gap:12
  },
  inputStyles: {
    borderWidth: 1,
    padding:5,
    borderColor: '#69698C66',
    fontSize: 24,
    color: 'white',
    width: 40, // Adjusted width for better appearance
    textAlign: 'center',
  },
  loadingContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
});

export default Otp;
