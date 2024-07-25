import React from 'react';
import { Text, View, Button } from 'react-native';
import { NavigationProp } from './interfaces';

const About: React.FC<NavigationProp> = ({ navigate }) => {
  return (
    <View>
      <Text>About</Text>
      <Button title="Go to Profile" onPress={() => navigate('Profile')} />
      <Button title="Go to Centers" onPress={() => navigate('Centers')} />
    </View>
  );
};

export default About;
