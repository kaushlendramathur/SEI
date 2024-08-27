import React from 'react';
import { Text, View, TouchableOpacity, ScrollView, ImageBackground, Image,ImageSourcePropType, StyleSheet, Dimensions, Pressable } from 'react-native';
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
            <Text style={{ textAlign: 'justify', fontSize:14, fontWeight: '300' }}>
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
      >
        <Pressable onPress={() => navigate('Profile')}>
          <FontAwesomeIcon icon={faLeftLong} style={styles.arrow} />
        </Pressable>
      </ImageBackground>
      <View style={styles.textContainer}>
        <Text style={{ fontSize: 30, fontWeight: 300, paddingBottom: 10 }}>
          About Us
        </Text>
        <Text style={{ textAlign: 'justify' }}>{aboutText.main}</Text>
        <ImageBackground
          source={About2 as ImageSourcePropType}
          style={{ height: 400, marginVertical: 30 }}
          imageStyle={styles.imageStyle}
        />
        <Text style={{ fontSize: 30, fontWeight: 300, paddingBottom: 10 }}>
          Our Mission
        </Text>
        <Text style={{ textAlign: 'justify' }}>{aboutText.misson}</Text>
        <Text style={{ fontSize: 30, fontWeight: 300, paddingVertical: 10 }}>
          Our Vision
        </Text>
        <View>
          <Text style={{ textAlign: 'justify' }}>
            {aboutText.vision.intro}
          </Text>
          {aboutText.vision.points.map((point, index) => {
            return (
              <View key={index} style={{ flexDirection: 'row', paddingTop: 5 }}>
                <Text style={{ fontWeight: 'bold' }}>{index + 1}. </Text>
                <Text style={{ textAlign: 'justify', paddingRight: 0, flex: 1 }}>{point}</Text>
              </View>
            );
          })}
        </View>

        <ImageBackground
          source={About3 as ImageSourcePropType}
          style={{ height: 500, marginVertical: 30 }}
          imageStyle={styles.imageStyle}
        />
        <Highlights bold={aboutText.bold} plain={aboutText.plain} />
       
        <View>
          <Image
             source={About4 as ImageSourcePropType}
             style={{width:'100%', marginVertical:20}}
          />
          <View style={styles.overlay}>
            <Text style={styles.smallText}>Certificate by Lloyd's Register Marine and Offshore India LLP</Text>
            <TouchableOpacity style={styles.largeButton}>
              <Text style={styles.buttonText}>Large Button</Text>
            </TouchableOpacity>
          </View>

        </View>
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
  imageStyle: {
    borderRadius: 15, // Optional: If you want rounded corners for the image
  },
  arrow:{
    color:'white',
    marginTop:-5,
    padding:15,
  },
  highlights:{
    paddingVertical:5, 
  },
  overlay: {
    alignItems: 'center',
  },
  smallText: {
    fontSize: 16,
    marginBottom: 20, // Space between text and button
    textAlign: 'center', // Center text
  },
  largeButton: {
    backgroundColor: 'black', // Button color
    paddingVertical: 15,
    width: 200,
    textAlign:'center',
    alignItems:'center',
    borderRadius: 10, // Optional: Rounded corners for the button
  },
  buttonText: {
    color: '#fff', // Text color for the button
    fontSize: 18, // Large font size
    fontWeight: 'bold',
  },
})

export default About;
