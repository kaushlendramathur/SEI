import React, { useState } from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import { WebView } from 'react-native-webview';
import SkeletonLoader from './team/SkeletonLoader';

const MyWebView = ({ uri }: { uri: string }) => {
  const [loading, setLoading] = useState(true); // Initialize loading state

  return (
    <View style={styles.container}>
      {loading && ( // Show loading indicator if loading is true
        <SkeletonLoader />
      )}
      <WebView 
        source={{ uri }} 
        style={styles.webview}
        onLoadStart={() => setLoading(true)} // Set loading to true when loading starts
        onLoadEnd={() => setLoading(false)} // Set loading to false when loading ends
        onError={(error) => {
          console.error('Error loading:', error.nativeEvent);
          setLoading(false); // Set loading to false on error as well
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  webview: {
    flex: 1,
  },
  loadingIndicator: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -25 }, { translateY: -25 }], // Center the loading indicator
  },
});

export default MyWebView;
