import React, { useState, useEffect } from 'react';
import { View } from 'react-native'
import screens, { ScreenNames } from '../../components/screens/screens';
import { usePathname } from 'expo-router';

const Profile = () => {
  const [currentScreen, setCurrentScreen] = useState<ScreenNames>('Profile');
  const pathname = usePathname();

  useEffect(() => {
    setCurrentScreen('Profile')
  }, [pathname]);

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