import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { useRouter } from 'expo-router';
import { useCourseStore } from '@/store/useCorseStore';

export default function App() {
  const router = useRouter();
  const { resetSelectedCourses } = useCourseStore();
  const handleLocationSelect = async (location: string) => {
    await resetSelectedCourses();
    router.push(`/courses/Course/${location}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Choose Your Campus</Text>
      <Pressable style={styles.button} onPress={() => handleLocationSelect('2')}>
        <Text style={styles.buttonText}>Faridabad</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={() => handleLocationSelect('1')}>
        <Text style={styles.buttonText}>Kolkata</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'black',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginVertical: 10,
    width: '80%',
    textAlign: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
});
