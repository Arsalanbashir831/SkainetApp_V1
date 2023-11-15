import { View, Text } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import LinearGradient from 'react-native-linear-gradient'
import { skaiGradientTheme } from '../styles/Theme'

const FAQ = () => {
  return (
  <>
    <Header name={'FAQ'}></Header>
  <LinearGradient colors={skaiGradientTheme} style={{flex:1}}>

  </LinearGradient>
  </>
  )
}

export default FAQ