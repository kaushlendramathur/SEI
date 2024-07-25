import React from 'react';
import { Text, View, Button } from 'react-native';
import { NavigationProp } from './interfaces';

const Centers: React.FC<NavigationProp> = ({ navigate }) => {
  return (
    <View>
      <Text>Centers</Text>
      <Button title="Go to Profile" onPress={() => navigate('Profile')} />
      <Button title="Go to About" onPress={() => navigate('About')} />
    </View>
  );
};

export default Centers;
