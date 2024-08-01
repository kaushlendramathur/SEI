import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { NavigationProp } from '../../types/interfaces';

const About: React.FC<NavigationProp> = ({ navigate }) => {
  return (
    <View>
      <Text>About</Text>
      <TouchableOpacity onPress={() => navigate('Profile')}>
        <Text>Go to Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

export default About;
