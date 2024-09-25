import { Stack } from 'expo-router';
import React from 'react';
import { Image, ImageSourcePropType } from 'react-native';
import logo from '@/assets/logo.png';

export default function Layout() {

  return (
      <Stack>
        <Stack.Screen name='index' options={{ headerShown: false }} />
        <Stack.Screen name='About' />
        <Stack.Screen name='Career' />
        <Stack.Screen name='Centers'  />
        <Stack.Screen name='Contact'/>
        <Stack.Screen name='Gallery'  />
        <Stack.Screen name='Logout' />
        <Stack.Screen 
        name='company/[document]' 
        options={({ route }) => ({
          title: route.params?.document ? ` ${route.params?.document}` : 'Document',
        })}
      />
      </Stack>
  );
}
