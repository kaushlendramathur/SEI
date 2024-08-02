import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { NavigationProp } from '@/types/interfaces';

const Terms: React.FC<NavigationProp> = ({ navigate }) => {
  return (
    <View>
      <Text>Terms</Text>
      <TouchableOpacity onPress={() => navigate('Profile')}>
        <Text>Go to Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Terms;
