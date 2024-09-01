import { Stack } from 'expo-router';
import React from 'react';
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { Image, ImageSourcePropType } from 'react-native';
import logo from '@/assets/logo.png';

export default function Layout() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Stack
        screenOptions={{
          headerBackVisible: false,
          title: "SEI Education Trust",
          headerLeft: () => (
            <Image
              source={logo as ImageSourcePropType}
              style={{ width: 40, height: 30, marginLeft: 10, marginRight:10 }}
            />
          ),
        }}
      >
        <Stack.Screen name='index' options={{ headerShown: false }} />
      </Stack>
    </QueryClientProvider>
  );
}
