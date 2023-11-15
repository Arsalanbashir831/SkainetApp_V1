import { View, Text } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import LinearGradient from 'react-native-linear-gradient'
import { skaiGradientTheme } from '../styles/Theme'

const Storage = () => {
  return (
   <>
    <Header name={'Storage'}></Header>
    <LinearGradient colors={skaiGradientTheme} style={{flex:1}}></LinearGradient>
   </>
  )
}

export default Storage