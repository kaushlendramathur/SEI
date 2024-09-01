import React from 'react';
import { Image, ScrollView, StyleSheet, View, Dimensions, Text, Pressable } from 'react-native';
import { images, ImageNames } from '@/utils/importImages';
import { NavigationProp } from '@/types/interfaces';
import { MaterialIcons } from '@expo/vector-icons';

const ImageGallery: React.FC<NavigationProp> = ({ navigate }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Pressable onPress={() => navigate('Profile')} style={styles.backButton}>
        <MaterialIcons name="arrow-back" size={28} style={styles.arrowIcon} />
      </Pressable>

      <Text style={styles.title}>Gallery</Text>

      {(Object.keys(images) as ImageNames[]).map((imageName, index) => (
        <View key={index} style={styles.imageWrapper}>
          <Image
            source={images[imageName]}
            style={styles.image}
            resizeMode="contain"
          />
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10 
  },
  backButton: {
    position: 'absolute',
    top: 10,
    left: 10,
    zIndex: 1, 
    padding: 10, 
    borderRadius: 20, 
    backgroundColor: 'gray', 
  },
  arrowIcon: {
    color: 'white',
  },
  title: {
    color: 'black',
    fontSize: 24,
    fontWeight: '600',
    marginTop: 60, // Adjust margin top to account for the back button
    marginBottom: 20,
    textAlign: 'center',
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
