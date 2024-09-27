import React, { useState } from 'react';
import { Dimensions, View, Platform, ActivityIndicator, StyleSheet } from 'react-native';
import WebView from 'react-native-webview';
import SkeletonLoader from './team/SkeletonLoader';

const { height } = Dimensions.get('screen');

const PdfViewer = ({ uri }: { uri: string }) => {
  const [loading, setLoading] = useState(true); // State to manage loading

  // Construct the Google Docs viewer link for the PDF
  const pdfUri = Platform.OS === 'android'
    ? `https://docs.google.com/viewer?url=${encodeURIComponent(uri)}`
    : uri;

  return (
    <View style={styles.container}>
      {loading && (
       <SkeletonLoader />
      )}
      <WebView
        source={{ uri: pdfUri }}
        style={{ flex: 1 }}
        onLoadStart={() => setLoading(true)}
        onLoad={() => setLoading(false)}
        onError={(err:any) =>{console.log(err)}} // Stop loading on error
        javaScriptEnabled={true} // Enables JavaScript
        domStorageEnabled={true} // Enables DOM storage
        mixedContentMode="always" // Allows mixed content (http/https)
        cacheEnabled={false} // Disables caching
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: height,
    position: 'relative',
  },
  loadingIndicator: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -25 }, { translateY: -25 }], // Center the indicator
    zIndex: 10, // Ensure it stays above the WebView
  },
});

export default PdfViewer;
