import React, { useState, useRef } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
 import {skaiGradientTheme} from '../styles/Theme'; // You may need to adjust the path for skaiGradientTheme
import GradientButton from '../components/GradientButton';

const Otp = () => {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const refs = [useRef(), useRef(), useRef(), useRef(), useRef(), useRef()];

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

  return (
    <LinearGradient style={styles.container} colors={[...skaiGradientTheme]}>
      <Image style={styles.image} source={require('../../assets/splashLogo.png')} />
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Verify phone number</Text>
        <Text style={styles.subtitle}>
          Enter the OTP sent to your WhatsApp chat
          <Text style={styles.boldText}> +1 402 342 9221</Text>
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
        <TouchableOpacity style={{width:'100%' , marginVertical:40}}>

        <GradientButton text={"Continue"}/>
        </TouchableOpacity>
        <Text style={{alignSelf:'center'}}>PIN Valid for <Text style={{color:'red' , fontWeight:'bold'}}>5</Text> minutes</Text>
      </View>
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
});

export default Otp;
