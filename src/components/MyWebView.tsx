import React from 'react';
import { StyleSheet, View } from 'react-native';
import { WebView } from 'react-native-webview';

const MyWebView = ({ uri }: { uri: string }) => {
  return (
    <View style={styles.container}>
      <WebView 
        source={{ uri }} 
        style={styles.webview}
        onError={(error) => console.error('Error loading:', error.nativeEvent)}
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
});

export default MyWebView;
