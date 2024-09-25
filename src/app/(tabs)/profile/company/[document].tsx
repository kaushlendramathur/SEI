import React from 'react';
import { View } from 'react-native';
import {useLocalSearchParams } from 'expo-router';
import PdfViewer from '@/components/PdfViewer';

const DocumentViewer = () => {
  const { document } = useLocalSearchParams(); // Retrieve dynamic route parameter

  // Define URLs for the documents
  const documentMap: { [key: string]: string } = {
    privacy: 'https://www.seiedutrust.com/Content/images/2-PRIVACY%20POLICY.pdf',
    refund: 'https://www.seiedutrust.com/Content/images/3-REFUND%20POLICY.pdf',
    terms: 'https://www.seiedutrust.com/Content/images/1-TERMS%20AND%20CONDITIONS.pdf',
  };

  const pdfUri = documentMap[document as string] || documentMap['terms']; // Default to 'terms'

  return (
    <View style={{ flex: 1 }}>
      <PdfViewer uri={pdfUri} />
    </View>
  );
};

export default DocumentViewer;
