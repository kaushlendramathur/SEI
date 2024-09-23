import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { useRouter } from 'expo-router';

export default function App() {
  const router = useRouter();

  const handleLocationSelect = (location: string) => {

    router.push(`/courses/myCart`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Select Your Location</Text>
      <Pressable style={styles.button} onPress={() => handleLocationSelect('faridabad')}>
        <Text style={styles.buttonText}>Faridabad</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={() => handleLocationSelect('kolkata')}>
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
    backgroundColor: '#f9f9f9',
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
