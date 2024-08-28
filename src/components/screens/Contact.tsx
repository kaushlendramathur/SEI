import React from 'react'
import {
  Text,
  View,
  ImageBackground,
  ImageSourcePropType,
  StyleSheet,
  Dimensions,
  TextInput,
  ScrollView,
  Pressable,
} from 'react-native'
import { NavigationProp } from '@/types/interfaces'

import ContactBG from '@/assets/images/contact.png'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faLocationPin, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faClock } from '@fortawesome/free-regular-svg-icons'

const { height, width } = Dimensions.get('screen')

const IconWrapper = ({
  icon,
  title,
  subTitle,
}: {
  icon: any
  title: string
  subTitle: string
}) => {
  return (
    <View style={{ paddingBottom: 20 }}>
      <View style={styles.iconContainer}>
        <FontAwesomeIcon
          icon={icon}
          style={{ color: '#f2a60c', padding: 12 }}
        />
        <Text
          style={{
            color: 'white',
            fontSize: 19,
            fontWeight: 'bold',
            paddingLeft: 10,
          }}
        >
          {title}
        </Text>
      </View>
      <Text style={{ color: 'white', fontSize: 12 }}>{subTitle}</Text>
    </View>
  )
}

const InputWrapper = ({
  title,
  placeHolder,
  type,
}: {
  title: string
  placeHolder: string
  type: 'text' | 'number' | 'textArea'
}) => {
  return (
    <View style={{ paddingBottom: 10 }}>
      <Text
        style={{
          color: 'white',
          fontSize: 20,
          fontWeight: 'bold',
        }}
      >
        {title}
      </Text>
      <TextInput
        style={styles.textInput}
        placeholder={placeHolder}
        keyboardType={type === 'number' ? 'numeric' : 'default'}
        placeholderTextColor='gray'
        multiline={type==='textArea'}
        numberOfLines={6}
      />
    </View>
  )
}

const Contact: React.FC<NavigationProp> = ({ navigate }) => {
  return (
    <ScrollView style={styles.container} automaticallyAdjustKeyboardInsets={true}>
      <ImageBackground
        source={ContactBG as ImageSourcePropType}
        imageStyle={styles.imageStyle}
        style={styles.bgImage}
      >
        <View style={styles.tintOverlay} />
        <View style={styles.textContainer}>
          <Text style={styles.header}>CONTACT US</Text>
          <IconWrapper
            icon={faPhone}
            title='Call Us'
            subTitle='+91-33-24019955'
          />
          <IconWrapper
            icon={faLocationPin}
            title='Location'
            subTitle='121 Rock Sreet, 21 Avenue, New York, NY 92103-9000'
          />
          <IconWrapper
            icon={faClock}
            title='Business Hours'
            subTitle='Mon - Fri …… 10 am - 8 pm, Sat, Sun ....… Closed'
          />

          <InputWrapper
            title='Name'
            type='text'
            placeHolder='Enter Your Name'
          />
          <InputWrapper
            title='Email'
            type='text'
            placeHolder='Enter Your Email'
          />
          <InputWrapper
            title='Phone No'
            type='number'
            placeHolder='Enter Your Phone No'
          />
          <InputWrapper
            title='Center'
            type='text'
            placeHolder='Select Your Center'
          />
          <InputWrapper
            title='Message'
            type='textArea'
            placeHolder='Enter Your Message'
          />

          <Pressable style={styles.button}>
            <Text
              style={{
                color: 'white',
                fontSize: 20,
                fontWeight: 'bold',
                textAlign: 'center',
                paddingRight: 20,
              }}
            >
              Submit
            </Text>
          </Pressable>
        </View>
      </ImageBackground>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    width: width,
  },
  bgImage: {
    height: height,
    width: width,
  },
  imageStyle: {
    resizeMode: 'cover',
  },
  textContainer: {
    paddingLeft: 20,
    paddingTop: 20,
  },
  header: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
    paddingBottom: 30,
  },
  iconContainer: {
    display: 'flex',
    flexDirection: 'row',
    paddingBottom: 5,
  },
  textInput: {
    borderBottomColor: 'white',
    borderBottomWidth: 2,
    marginRight: 40,
    paddingLeft: 20,
    fontSize: 15,
    paddingTop: 10,
    paddingBottom: 5,
    color: 'white',
  },
  button: {
    backgroundColor: '#f2a60c',
    height: 40,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 20,
    borderRadius: 10,
    marginTop: 90,
  },
  tintOverlay: {
    ...StyleSheet.absoluteFillObject, 
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
})

export default Contact
