import React from 'react';
import { Dimensions, View, Platform } from 'react-native';
import WebView from 'react-native-webview';

const { height } = Dimensions.get('screen');

const PdfViewer = ({ uri }: { uri: string }) => {

  return (
    <View style={{ height: height }}>
      <WebView
        source={{ uri: uri }}
        style={{ flex: 1 }}
      />
    </View>
  );
};

export default PdfViewer;
