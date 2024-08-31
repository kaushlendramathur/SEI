import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { NavigationProp } from '@/types/interfaces';
import PdfViewer from '../PdfViewer';

const Refund: React.FC<NavigationProp> = ({ navigate }) => {
  return (
    <View>
      <PdfViewer
        uri={
          'https://www.termsfeed.com/public/uploads/2021/12/sample-terms-conditions-agreement.pdf'
        }
      />
    </View>
  )
};

export default Refund;
