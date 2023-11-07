import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'

const FlexPlans = () => {
  return (
    <>
    <TouchableOpacity>

    <View style={{borderWidth:1,borderColor:'white' , padding:20 , borderRadius:10}}>
      <Text style={{fontWeight:'bold',fontSize:19}}>FlexPlan</Text>
      <Text>Pay for words , images , or any extra services</Text>
    </View>
    </TouchableOpacity>
    </>
  )
}

export default FlexPlans