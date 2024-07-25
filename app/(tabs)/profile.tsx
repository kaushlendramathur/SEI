import React, { useState } from 'react';
import { Text, View } from 'react-native'
import screens, { ScreenNames } from '../screens/screens';

const Profile = () => {
  const [currentScreen, setCurrentScreen] = useState<ScreenNames>('Profile');

  const navigate = (screen: ScreenNames) => {
    setCurrentScreen(screen);
  };

  const ScreenComponent = screens[currentScreen];

  return (
    <View>
      <ScreenComponent navigate={navigate} />
    </View>
  );
}

export default Profile