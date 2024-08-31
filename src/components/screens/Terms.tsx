import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { NavigationProp } from '@/types/interfaces';
import PdfViewer from '../PdfViewer';

const Terms: React.FC<NavigationProp> = ({ navigate }) => {
  return (
    <View>
      <PdfViewer />
    </View>
  )
};

export default Terms;
