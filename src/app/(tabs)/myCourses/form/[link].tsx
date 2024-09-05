import React from 'react';
import { useLocalSearchParams } from 'expo-router';
import { View, Text } from 'react-native';
import WebViewer from '@/components/WebViewer';

const Form = () => {
  const { link } = useLocalSearchParams();

  const validLink = typeof link === 'string' && link.trim() !== '' ? link : null;

  return (
    <View>
      {validLink ? (
        <WebViewer uri={validLink} />
      ) : (
        <Text>Invalid or missing link. Please try again.</Text>
      )}
    </View>
  );
};

export default Form;
