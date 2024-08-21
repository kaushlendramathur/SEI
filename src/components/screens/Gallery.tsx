import React from 'react';
import { Image, ScrollView, StyleSheet, View, Dimensions, Text, Pressable } from 'react-native';
import { images, ImageNames } from '@/utils/importImages';
import { NavigationProp } from '@/types/interfaces';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faLeftLong } from '@fortawesome/free-solid-svg-icons';


const ImageGallery: React.FC<NavigationProp> = ({navigate}) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Pressable onPress={() => navigate('Profile')}>
          <FontAwesomeIcon icon={faLeftLong} style={styles.arrow} />
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
    padding: 10, 
  },
  imageWrapper: {
    marginBottom: 20, 
  },
  image: {
    width: Dimensions.get('window').width - 20, 
    height: 200,
    resizeMode: 'cover'
  },
  arrow:{
    color:'gray',
    marginTop:0,
    padding:15,
  },
  title: {
    color: 'black',
    fontSize: 24,
    fontWeight: 'semibold',
    marginBottom: 20,
    textAlign: 'center',
  },
  
});

export default ImageGallery;
