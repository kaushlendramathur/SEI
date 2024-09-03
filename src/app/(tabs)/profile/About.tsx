import React, {useState} from 'react';
import { Text, View, TouchableOpacity, ScrollView, ImageBackground, Image,ImageSourcePropType, StyleSheet, Dimensions, Pressable, Modal } from 'react-native';
import { NavigationProp } from '@/types/interfaces';
import About1 from '@/assets/images/about-1.png'
import About2 from '@/assets/images/about-2.png'
import About3 from '@/assets/images/about-3.png'
import About4 from '@/assets/images/about-4.png'
import {aboutText} from '@/constants/staticAbout'
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

  const [modalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const windowDimensions = Dimensions.get('window');
  return (
    <ScrollView style={styles.container}>
      <ImageBackground
        source={About1 as ImageSourcePropType}
        style={{ height: 200 }}
      >
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
        style={styles.docImage}
        resizeMode="contain"
      />
      <View style={styles.overlay}>
        <Text style={styles.smallText}>
          Certificate by Lloyd's Register Marine and Offshore India LLP
        </Text>
        <TouchableOpacity style={styles.largeButton} onPress={toggleModal}>
          <Text style={styles.buttonText}>View Large</Text>
        </TouchableOpacity>
      </View>

      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={toggleModal}
      >
        <View style={styles.modalContainer}>
          <Image
            source={About4 as ImageSourcePropType} // Replace with your actual image path
            style={[styles.modalImage, { width: windowDimensions.width, height: windowDimensions.height }]}
            resizeMode="contain"
          />
          <TouchableOpacity style={styles.closeButton} onPress={toggleModal}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
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
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
  modalImage: {
    width: '100%',
    height: '100%',
  },
  closeButton: {
    position: 'absolute',
    top: 40,
    right: 20,
    padding: 10,
    backgroundColor: 'red',
    borderRadius: 5,
  },
  closeButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  docImage:{
    width:'100%',
    marginVertical: 20
  }
})

export default About;
