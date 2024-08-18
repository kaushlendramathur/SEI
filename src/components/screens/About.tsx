import React from 'react';
import { Text, View, TouchableOpacity, ScrollView, ImageBackground, ImageSourcePropType, StyleSheet, Dimensions, Pressable } from 'react-native';
import { NavigationProp } from '@/types/interfaces';
import About1 from '@/assets/images/about-1.png'
import About2 from '@/assets/images/about-2.png'
import About3 from '@/assets/images/about-3.png'
import About4 from '@/assets/images/about-4.png'
import {aboutText} from '@/constants/static'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft, faLeftLong } from '@fortawesome/free-solid-svg-icons';

const {height,width} = Dimensions.get('screen');

const Highlights = ({bold,plain}:{bold:string[],plain:string[]})=>{
  return (
    <View>
      {bold.map((text, index) => {
        return (
          <View key={index} style={styles.highlights}>
            <Text>
              <Text style={{ fontWeight: 'bold' }}>{text} : </Text>
              {plain[index]}
            </Text>
          </View>
        )
      })}
    </View>
  )
}

const About: React.FC<NavigationProp> = ({ navigate }) => {
  return (
    <ScrollView style={styles.container}>
      <ImageBackground
        source={About1 as ImageSourcePropType}
        style={{ height: 200 }}
        imageStyle={styles.imageStyle}
      >
        <Pressable onPress={() => navigate('Profile')}>
          <FontAwesomeIcon icon={faLeftLong} style={styles.arrow} />
        </Pressable>
      </ImageBackground>
      <View style={styles.textContainer}>
        <Text style={{ fontSize: 30, fontWeight: 300, paddingBottom: 10 }}>
          About Us
        </Text>
        <Text>{aboutText.main}</Text>
        <ImageBackground
          source={About2 as ImageSourcePropType}
          style={{ height: 400, marginVertical: 30 }}
          imageStyle={styles.imageStyle}
        />
        <Text style={{ fontSize: 30, fontWeight: 300, paddingBottom: 10 }}>
          Our Mission
        </Text>
        <Text>{aboutText.misson}</Text>
        <Text style={{ fontSize: 30, fontWeight: 300, paddingVertical: 10 }}>
          Our Vision
        </Text>
        <Text>
          {aboutText.vision.intro}
          {aboutText.vision.points.map((point, index) => {
            return (
              <View key={index} style={{ flexDirection: 'row', paddingTop: 5 }}>
                <Text style={{ fontWeight: 'bold' }}>{index + 1} . </Text>
                <Text>{point}</Text>
              </View>
            )
          })}
        </Text>
        <ImageBackground
          source={About3 as ImageSourcePropType}
          style={{ height: 500, marginVertical: 30 }}
          imageStyle={styles.imageStyle}
        />
        <Highlights bold={aboutText.bold} plain={aboutText.plain} />
        <ImageBackground
          source={About4 as ImageSourcePropType}
          style={{ height: 500, marginVertical: 30 }}
          imageStyle={styles.imageStyle}
        />
      </View>
    </ScrollView>
  )
};

const styles = StyleSheet.create({
  container:{
    backgroundColor:'white',
  },
  textContainer:{
    padding:30,
  },
  imageStyle:{
    resizeMode:'cover',
  },
  arrow:{
    color:'white',
    marginTop:-5,
    padding:15,
  },
  highlights:{
    paddingVertical:5, 
  }
})

export default About;
