import React, { useRef, useEffect } from 'react';
import { View, StyleSheet, Animated, Easing, Dimensions } from 'react-native';

interface SkeletonLoaderProps {
  numberOfRows?: number;
}

const SkeletonLoader: React.FC<SkeletonLoaderProps> = ({ numberOfRows = 6 }) => {
  const animatedValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(animatedValue, {
        toValue: 1,
        duration: 1200,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start();
  }, [animatedValue]);

  const screenWidth = Dimensions.get('window').width;
  const shimmerAnimation = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [-screenWidth, screenWidth], // Use numbers instead of percentages
  });

  const skeletonRows = Array.from({ length: numberOfRows });

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.skeleton, styles.header, { opacity: 0.7 }]}>
        <Animated.View
          style={[
            styles.shimmer,
            { transform: [{ translateX: shimmerAnimation }] },
          ]}
        />
      </Animated.View>

      {skeletonRows.map((_, index) => (
        <Animated.View key={index} style={[styles.skeleton, styles.skeletonItem]}>
          <Animated.View
            style={[
              styles.shimmer,
              { transform: [{ translateX: shimmerAnimation }] },
            ]}
          />
        </Animated.View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  skeleton: {
    backgroundColor: '#e0e0e0',
    overflow: 'hidden',
    borderRadius: 8,
    marginBottom: 12,
    position: 'relative',
  },
  header: {
    width: '60%',
    height: 20,
    marginBottom: 20,
  },
  skeletonItem: {
    width: '100%',
    height: 100,
    marginBottom: 16,
  },
  shimmer: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
});

export default SkeletonLoader;
