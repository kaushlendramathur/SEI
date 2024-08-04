import { Stack } from 'expo-router'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

export default function Layout() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Stack>
        <Stack.Screen name='index' options={{ headerShown: false }} />
      </Stack>
    </QueryClientProvider>
  )
}