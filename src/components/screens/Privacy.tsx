import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { NavigationProp } from '@/types/interfaces';
import PdfViewer from '../PdfViewer';
 const Privacy: React.FC<NavigationProp> = ({ navigate }) => {
  return (
    <View>
      <PdfViewer
        uri={
          'https://www.seiedutrust.com/Content/images/2-PRIVACY%20POLICY.pdf'
        }
      />
    </View>
  )
}

export default Privacy;
