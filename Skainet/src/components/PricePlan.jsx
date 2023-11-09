import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import Check from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';
import { buttonGradient } from '../styles/Theme';

const PricePlan = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);

  const handlePlanClick = (planId) => {
    if (selectedPlan === planId) {
      setSelectedPlan(null);
    } else {
      setSelectedPlan(planId);
    }
  };

  const plans = [
    { id: 1, title: 'Price Plan 1', price: '$0.00', description: '2k words and 5 Images' },
    { id: 2, title: 'Price Plan 2', price: '$5.00', description: '4k words and 10 Images' },
    { id: 3, title: 'Price Plan 3', price: '$10.00', description: '6k words and 15 Images' },
    { id: 4, title: 'Price Plan 4', price: '$15.00', description: '8k words and 20 Images' },
  ];

  const rows = [];
  let cols = [];

  for (let i = 0; i < plans.length; i++) {
    if (i % 2 === 0 && i > 0) {
      rows.push(
        <View key={i} style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          {cols}
        </View>
      );
      cols = [];
    }

    cols.push(
      <TouchableOpacity key={plans[i].id} onPress={() => handlePlanClick(plans[i].id)}>
        <View
          style={{
            borderWidth: selectedPlan === plans[i].id ? 1 : 0,
            borderColor: selectedPlan === plans[i].id ? 'lightblue' : 'lightgray',
            padding: 20,
            borderRadius: 10,
            marginBottom: 20,
          }}
        >
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold' , color:'white' }}>{plans[i].title}</Text>
            <LinearGradient
              colors={selectedPlan === plans[i].id ? buttonGradient : ['black', 'black']}
              style={{ borderWidth: 1, padding: 10, borderRadius: 20 }}
            >
              {selectedPlan === plans[i].id ? (
                <Check name="check" size={14}  color={selectedPlan ? 'white' : 'lightgray'} />
              ) : null}
            </LinearGradient>
          </View>
          <Text style={{color:'white'}}>{plans[i].price}</Text>
          <Text style={{color:'white'}}>{plans[i].description}</Text>
        </View>
      </TouchableOpacity>
    );

    if (i === plans.length - 1) {
      rows.push(
        <View key={i} style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          {cols}
        </View>
      );
    }
  }

  return <View>{rows}</View>;
};

export default PricePlan;
