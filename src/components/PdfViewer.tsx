import React from 'react';
import { Dimensions, View, Platform } from 'react-native';
import WebView from 'react-native-webview';

const { height } = Dimensions.get('screen');

const PdfViewer = ({ uri }: { uri: string }) => {
  // Construct the Google Docs viewer link for the PDF
  const pdfUri = Platform.OS === 'android'
    ? `https://docs.google.com/viewer?url=${encodeURIComponent(uri)}`
    : uri;

  return (
    <View style={{ height: height }}>
      <WebView
        source={{ uri: pdfUri }}
        style={{ flex: 1 }}
      />
    </View>
  );
};

export default PdfViewer;
