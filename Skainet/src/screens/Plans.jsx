import {View, Text, Image, TouchableOpacity, Modal, TouchableWithoutFeedback , ScrollView} from 'react-native';
import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {buttonGradient} from '../styles/Theme';
import Check from 'react-native-vector-icons/Entypo';
import PricePlan from '../components/PricePlan';
import FlexCheckBox from '../components/FlexCheckBox';
import CloseIcon from 'react-native-vector-icons/AntDesign'
import GradientButton from '../components/GradientButton';



const Plans = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const flexPlansData = [
    { words: 500, price: 0.0875 },
    { words: 1000, price: 0.15 },
    { words: 2000, price: 0.25 },
    { words: 5000, price: 0.5 },
    { words: 10000, price: 0.8 },
  ];
  
  return (
    <>
      <View style={{backgroundColor: 'black', height: '100%'}}>
        <View
          style={{
            backgroundColor: '#000000',
            height: '100%',
            position: 'absolute',
            bottom: 0,
            width: '100%',
            zIndex: 1,
            opacity: 0.8,
          }}></View>
        <View
          style={{
            flex: 1,
            justifyContent: 'flex-start',
            alignItems: 'center',
            marginTop: 120,
          }}>
          <View
            style={{zIndex: 2, position: 'absolute', paddingHorizontal: 10}}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <LinearGradient colors={buttonGradient} style={{borderRadius: 8}}>
                <Text
                  style={{
                    color: 'white',
                    fontSize: 30,
                    padding: 10,
                    fontWeight: 'bold',
                  }}>
                  Unlock
                </Text>
              </LinearGradient>
              <Text
                style={{
                  color: 'white',
                  fontSize: 30,
                  padding: 10,
                  fontWeight: 'bold',
                }}>
                your access
              </Text>
            </View>

            <View>
              <View>
                {[
                  {label: 'Increase word and Image limit'},
                  {label: 'More Detailed Answer'},
                  {label: 'Ads Free Experience'},
                ].map((item, index) => (
                  <View
                    key={index}
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      gap: 10,
                      marginTop: index === 0 ? 20 : 10,
                    }}>
                    <Check name="check" size={14} color={'white'} />
                    <Text
                      style={{
                        fontWeight: 'bold',
                        fontSize: 16,
                        color: 'white',
                      }}>
                      {item.label}
                    </Text>
                  </View>
                ))}
              </View>

              <View
                style={{
                  marginTop: 30,
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  gap: 10,
                }}>
                  <PricePlan />
              </View>
              <TouchableOpacity onPress={toggleModal}>
              <View style={{borderWidth:1,borderColor:'white' , padding:20 , borderRadius:10}}>
      <Text style={{fontWeight:'bold',fontSize:19 , color:'white'}}>FlexPlan</Text>
      <Text style={{color:'white'}}>Pay for words , images , or any extra services</Text>
    </View>
              </TouchableOpacity>
            </View>
          </View>
          <Image
            style={{height: 300, width: 300}}
            source={require('../../assets/ball_resize.png')}
          />
        </View>
        <TouchableOpacity style={{ marginVertical: 5 ,zIndex:1}}>
      <GradientButton text='Continue' />
    </TouchableOpacity>
      </View>
      
      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={() => {
          setModalVisible(!isModalVisible);
        }}
      >
       
       <View style={{ flex: 1, justifyContent: 'flex-end', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
  <View style={{ backgroundColor: '#1C1C1E', height: 400, borderTopEndRadius: 18, borderTopStartRadius: 18 }}>
    <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
      <Text style={{ textAlign: 'center', fontSize: 20, fontWeight: 'bold', padding: 10, color: 'white' }}>Select Flex Plan </Text>
      <CloseIcon onPress={toggleModal} name='close' size={19} color='white' />
    </View>
    <ScrollView style={{ padding: 10, paddingHorizontal: 20 }}>
      {flexPlansData.map((item, index) => (
        <FlexCheckBox key={index} label={`${item.words} Words = $${item.price}`} />
      ))}
    </ScrollView>
    <TouchableOpacity style={{ marginVertical: 5 ,zIndex:1}}>
      <GradientButton text='Continue' />
    </TouchableOpacity>
  </View>
</View>

       
      </Modal>

     
    </>
  );
};

export default Plans;
