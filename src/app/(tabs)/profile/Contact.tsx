import React, { useState } from 'react'
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
import { Picker } from '@react-native-picker/picker'
import { MaterialIcons } from '@expo/vector-icons'

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
    <View style={{ paddingBottom: 30 }}>
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
  options,
  selectedValue,
  onValueChange,
  value,
  onChangeText,
}: {
  title: string
  placeHolder?: string
  type: 'text' | 'number' | 'textArea' | 'picker'
  options?: string[]
  selectedValue?: string
  onValueChange?: (itemValue: string) => void
  value?: string
  onChangeText?: (text: string) => void
}) => {
  return (
    <View style={{ paddingBottom: 20 }}>
      <Text
        style={{
          color: 'white',
          fontSize: 20,
          fontWeight: 'bold',
        }}
      >
        {title}
      </Text>
      {type === 'picker' ? (
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={selectedValue}
            style={styles.picker}
            onValueChange={onValueChange}
            placeholder="Choose the center"
            dropdownIconColor={'white'}
          >
            {options?.map((option, index) => (
              <Picker.Item key={index} label={option} value={option} />
            ))}
          </Picker>
        </View>
      ) : (
        <TextInput
          style={styles.textInput}
          placeholder={placeHolder}
          keyboardType={type === 'number' ? 'numeric' : 'default'}
          placeholderTextColor="white"
          multiline={type === 'textArea'}
          numberOfLines={type === 'textArea' ? 6 : 2}
          value={value}
          onChangeText={onChangeText}
        />
      )}
    </View>
  )
}

const Contact: React.FC<NavigationProp> = ({ navigate }) => {
  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [phoneNo, setPhoneNo] = useState<string>('')
  const [selectedCenter, setSelectedCenter] = useState<string>('')
  const [message, setMessage] = useState<string>('')

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  const handleSubmit = () => {
    setStatus('submitting')
    
    // Simulate an API call
    setTimeout(() => {
      const success = true // You can replace this with actual logic

      if (success) {
        setStatus('success')
        // Optionally reset form fields
        setName('')
        setEmail('')
        setPhoneNo('')
        setSelectedCenter('')
        setMessage('')
      } else {
        setStatus('error')
      }
    }, 2000) // Simulate a 2-second delay for the API call
  }

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
            title="Call Us"
            subTitle="+919830782955, +919643502955"
          />
          <IconWrapper
            icon={faLocationPin}
            title="Location"
            subTitle={`S - 13 Sector 11D Market, Faridabad-121006, Haryana, India \n  'Debamita', B.B.T Road, Vill. - Gopalpur, P.O. Sarkarpool, P.S. - Maheshtala, Kolkata - 700141, India`}
          />
          <IconWrapper
            icon={faClock}
            title="Business Hours"
            subTitle="Mon - Fri …… 10 am - 8 pm, Sat, Sun ....… Closed"
          />

          <InputWrapper
            title="Name"
            type="text"
            placeHolder="Enter Your Name"
            value={name}
            onChangeText={setName}
          />
          <InputWrapper
            title="Email"
            type="text"
            placeHolder="Enter Your Email"
            value={email}
            onChangeText={setEmail}
          />
          <InputWrapper
            title="Phone No"
            type="number"
            placeHolder="Enter Your Phone No"
            value={phoneNo}
            onChangeText={setPhoneNo}
          />
          <InputWrapper
            title="Center"
            type="picker"
            options={['Kolkata', 'Faridabad']}
            selectedValue={selectedCenter}
            onValueChange={(itemValue) => setSelectedCenter(itemValue)}
          />
          <InputWrapper
            title="Message"
            type="textArea"
            placeHolder="Enter Your Message"
            value={message}
            onChangeText={setMessage}
          />

          <Pressable style={styles.button} onPress={handleSubmit} disabled={status === 'submitting'}>
            <Text
              style={{
                color: 'white',
                fontSize: 20,
                fontWeight: 'bold',
                textAlign: 'center',
                paddingRight: 20,
              }}
            >
              {status === 'submitting' ? 'Submitting...' : 'Submit'}
            </Text>
          </Pressable>

          {status === 'success' && (
            <Text style={styles.successMessage}>Form submitted successfully!</Text>
          )}
          {status === 'error' && (
            <Text style={styles.errorMessage}>There was an error submitting the form. Please try again.</Text>
          )}
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
    width: width,
  },
  imageStyle: {
    resizeMode: 'cover',
  },
  textContainer: {
    paddingLeft: 20,
    paddingTop: 20,
    paddingBottom: 100,
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
    marginRight: 10,
    paddingLeft: 20,
    fontSize: 15,
    paddingTop: 10,
    paddingBottom: 5,
    color: 'white',
  },
  picker: {
    height: 40,
    color: 'white',
    marginBottom: 10,
    marginRight: 10,
  },
  button: {
    backgroundColor: '#f2a60c',
    height: 50,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 20,
    borderRadius: 10,
    marginTop: 30,
  },
  tintOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  pickerContainer:{
    position:'relative',
    borderBottomColor: 'white',
    borderBottomWidth: 2,
    marginRight: 10,
  },
  successMessage: {
    color: 'green',
    fontSize: 16,
    marginTop: 10,
    textAlign: 'center',
  },
  errorMessage: {
    color: 'red',
    fontSize: 16,
    marginTop: 10,
    textAlign: 'center',
  },
  backButton: {
    marginLeft: 20,
    marginTop: 40,
  },
  arrowIcon: {
    color: 'white',
  },
})

export default Contact
