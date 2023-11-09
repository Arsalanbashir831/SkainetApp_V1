import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { buttonGradient } from '../styles/Theme'
import CheckIcon from 'react-native-vector-icons/Entypo'

const FlexCheckBox = ({ label }) => {
  const [isChecked, setIsChecked] = useState(false)

  const handleToggle = () => {
    setIsChecked(!isChecked)
  }

  return (
    <TouchableOpacity onPress={handleToggle} style={{marginVertical:10 , padding:10}}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <LinearGradient
          colors={isChecked ? buttonGradient : ["black",'black']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={{
            width: 20,
            height: 20,
            borderRadius: 5,
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: 10,
          }}
        >
          {isChecked && (
            <CheckIcon name="check" size={16} color={'white'} />
          )}
        </LinearGradient>
        <Text style={{ fontSize: 16, color: 'white' }}>{label}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default FlexCheckBox
