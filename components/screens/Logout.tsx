import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { NavigationProp } from './interfaces';

const Logout: React.FC<NavigationProp> = ({ navigate }) => {
  return (
    <View>
      <Text>Logout</Text>
      <TouchableOpacity onPress={() => navigate('Profile')}>
        <Text>Go to Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Logout;
