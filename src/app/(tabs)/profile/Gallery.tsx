import React from 'react';
import { FlatList, StyleSheet, View, Dimensions, Image, Text, Pressable } from 'react-native';
import { images, ImageNames } from '@/utils/importImages';
import { NavigationProp } from '@/types/interfaces';

const ImageGallery: React.FC<NavigationProp> = () => {
  const renderItem = ({ item }: { item: ImageNames }) => (
    <View style={styles.imageWrapper}>
      <Image source={images[item]} style={styles.image} resizeMode="contain" />
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={Object.keys(images) as ImageNames[]}
        renderItem={renderItem}
        keyExtractor={(item, index) => `${item}-${index}`}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
  contentContainer: {
    paddingBottom: 20,
  },
  imageWrapper: {
    marginBottom: 20,
  },
  image: {
    width: Dimensions.get('window').width - 20,
    height: 200,
    resizeMode: 'cover',
  },
});

export default ImageGallery;
