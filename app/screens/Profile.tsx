import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { NavigationProp } from './interfaces';

const Profile: React.FC<NavigationProp> = ({ navigate }) => {
  return (
    <View>
      <Text>Profile (Home)</Text>
      <TouchableOpacity onPress={() => navigate('Centers')}>
        <Text>Go to Centers</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigate('About')}>
        <Text>Go to About</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigate('Gallery')}>
        <Text>Go to Gallery</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigate('Career')}>
        <Text>Go to Career</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigate('Contact')}>
        <Text>Go to Contact</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigate('Terms')}>
        <Text>Go to Terms</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigate('Refund')}>
        <Text>Go to Refund</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigate('Privacy')}>
        <Text>Go to Privacy</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigate('Logout')}>
        <Text>Go to Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Profile;
