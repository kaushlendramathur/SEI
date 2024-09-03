import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { NavigationProp } from '@/types/interfaces';
import PdfViewer from '../PdfViewer';

const Terms: React.FC<NavigationProp> = ({ navigate }) => {
  return (
    <View>
      <View>
        <PdfViewer
          uri={
            'https://www.seiedutrust.com/Content/images/1-TERMS%20AND%20CONDITIONS.pdf'
          }
        />
      </View>
    </View>
  )
};

export default Terms;
