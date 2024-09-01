import React from 'react';
import { View, StyleSheet, Animated } from 'react-native';

const SkeletonLoader: React.FC = () => {
  return (
    <View style={styles.container}>
      <Animated.View style={[styles.skeleton, styles.header]} />
      <Animated.View style={styles.skeleton} />
      <Animated.View style={styles.skeleton} />
      <Animated.View style={styles.skeleton} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  skeleton: {
    backgroundColor: '#e0e0e0', // Light gray color for the skeleton
    borderRadius: 4,
    marginBottom: 10,
  },
  header: {
    width: '60%',
    height: 20,
    marginBottom: 15,
  },
  skeletonItem: {
    width: '100%',
    height: 100,
  },
});

export default SkeletonLoader;
