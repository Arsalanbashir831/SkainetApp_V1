import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import LinearGradient from 'react-native-linear-gradient';
import { skaiGradientTheme } from '../styles/Theme';
import GradientButton from '../components/GradientButton';

const Contact = () => {
  const [text, setText] = useState('');

  const onChange = (newText) => {
    setText(newText);
  };

  return (
    <>
      <Header name={'Contact Us'} />
      <LinearGradient colors={skaiGradientTheme} style={styles.linearGradient}>
        <View style={styles.container}>
          <Text style={styles.title}>How can we help you?</Text>
          <TextInput
            style={styles.textArea}
            multiline
            numberOfLines={4}
            onChangeText={setText}
            value={text}
            placeholder="Enter your message here"
            placeholderTextColor="#8D8D8D"
          />
          <TouchableOpacity style={styles.buttonContainer}>
            <GradientButton text="Send Message" />
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </>
  );
};

Contact.propTypes = {
  text: PropTypes.string,
};

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 20,
  },
  textArea: {
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 12,
    fontSize: 16,
    color: 'white',
    marginBottom: 20,
  },
  buttonContainer: {
    marginTop: 20,
    width: '100%',
  },
});

export default Contact;
