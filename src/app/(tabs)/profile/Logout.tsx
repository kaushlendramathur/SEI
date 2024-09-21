import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationProp } from '@/types/interfaces';
import auth from '@/utils/auth';
import { router } from 'expo-router';


const Logout: React.FC<NavigationProp> = ({ navigate }) => {
  const handleLogout = () => {
    auth.signOut();
    router.push('login');
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerBox}>
        <Text style={styles.title}>Are you sure you want to logout?</Text>
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.logoutButtonText}>Log Out</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.profileButton} onPress={() => router.push('profile')}>
          <Text style={styles.profileButtonText}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 'auto',
    width: '100%',
    height: '100%',
  },
  containerBox: {
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f8f9fa',
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 20,
    color: '#333',
  },
  logoutButton: {
    backgroundColor: '#000', // Black background
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
    marginBottom: 15,
    textAlign:'center',
  },
  logoutButtonText: {
    color: '#fff', // White text
    fontSize: 16,
    fontWeight: '500',
    textAlign:'center'
  },
  profileButton: {
    backgroundColor: '#fff', // White background
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
    borderColor: '#000', // Black border
    borderWidth: 1,
  },
  profileButtonText: {
    color: '#000', // Black text
    fontSize: 16,
    fontWeight: '500',
    textAlign:'center',
  },
});

export default Logout;
