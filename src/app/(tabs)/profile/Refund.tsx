import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { NavigationProp } from '@/types/interfaces';
import PdfViewer from '@/components/PdfViewer';

const Refund: React.FC<NavigationProp> = ({ navigate }) => {
  return (
    <View>
      <PdfViewer
        uri={'https://www.seiedutrust.com/Content/images/3-REFUND%20POLICY.pdf'}
      />
    </View>
  )
};

export default Refund;
