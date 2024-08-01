import { Stack } from 'expo-router'
import React from 'react'
import { StyleSheet, View } from 'react-native'

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name='index' options={{ headerShown: false }} />
    </Stack>
  )
}