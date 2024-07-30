import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { NavigationProp } from './interfaces';

const Career: React.FC<NavigationProp> = ({ navigate }) => {
  return (
    <View>
      <Text>Career</Text>
      <TouchableOpacity onPress={() => navigate('Profile')}>
        <Text>Go to Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Career;
