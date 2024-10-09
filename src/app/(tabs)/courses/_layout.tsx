import { Stack } from 'expo-router'
import { Text, StyleSheet, Pressable } from 'react-native';
import { router } from 'expo-router';

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="index"  options={{ headerShown: false }}  />
      <Stack.Screen name="Course/[location]" options={{  
        headerTitle :"Courses", 
        headerRight:()=>(
          <Pressable style={styles.coursesButton} onPress={() => router.push('/courses/cart')}>
            <Text style={styles.buttonText}>Apply</Text>
          </Pressable>
        ) 
        }} />
      <Stack.Screen name="cart" options={{ headerTitle:"Add to Cart" }} />
      <Stack.Screen name="form"  options={{ headerTitle:"Application Form" }} />
    </Stack>
  );
}

const styles = StyleSheet.create({
  coursesButton: {
    backgroundColor: 'black',
    paddingVertical: 10,
    width: 80,
    borderRadius: 5,
    right: 0,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
})
