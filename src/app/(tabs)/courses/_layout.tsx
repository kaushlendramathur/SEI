import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="index"  options={{ headerShown: false }}  />
      <Stack.Screen name="Course/[location]" options={{  headerTitle :"Courses" }} />
      <Stack.Screen name="cart" options={{ }} />
      <Stack.Screen name="form"  />
    </Stack>
  );
}
