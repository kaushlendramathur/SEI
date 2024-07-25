import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { NavigationProp } from './interfaces';

const Refund: React.FC<NavigationProp> = ({ navigate }) => {
  return (
    <View>
      <Text>Refund</Text>
      <TouchableOpacity onPress={() => navigate('Profile')}>
        <Text>Go to Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Refund;
