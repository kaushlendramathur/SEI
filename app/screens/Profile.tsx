import React from 'react';
import { Text, View, Button } from 'react-native';
import { NavigationProp } from './interfaces';

const Profile: React.FC<NavigationProp> = ({ navigate }) => {
  return (
    <View>
      <Text>Profile</Text>
      <Button title="Go to Centers" onPress={() => navigate('Centers')} />
      <Button title="Go to About" onPress={() => navigate('About')} />
    </View>
  );
};

export default Profile;
