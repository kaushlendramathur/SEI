import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { NavigationProp } from '../../types/interfaces';

const Centers: React.FC<NavigationProp> = ({ navigate }) => {
  return (
    <View>
      <Text>Centers</Text>
      <TouchableOpacity onPress={() => navigate('Profile')}>
        <Text>Go to Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Centers;
