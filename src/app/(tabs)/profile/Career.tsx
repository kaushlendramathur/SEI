import React, { useState } from 'react'
import { NavigationProp } from '@/types/interfaces'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Linking,
  StyleSheet,
  ScrollView,
} from 'react-native'

const Career: React.FC<NavigationProp> = ({ navigate }) => {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNo, setPhoneNo] = useState('')
  const [age, setAge] = useState('')
  const [experience, setExperience] = useState('')
  const [applyingFor, setApplyingFor] = useState('')
  const [previousDesignation, setPreviousDesignation] = useState('')

  const handleSendMessage = () => {
    console.log({
      fullName,
      email,
      phoneNo,
      age,
      experience,
      applyingFor,
      previousDesignation,
    })
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.emailText}>
        Send your resume here{' '}
        <Text
          style={styles.emailLink}
          onPress={() => Linking.openURL('mailto:booking@seiedutrust.com')}
        >
          booking@seiedutrust.com
        </Text>
      </Text>

      <Text style={styles.subText}>
        OR Fill up the form below. We will get back to you shortly!
      </Text>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Full Name:</Text>
        <TextInput
          style={styles.input}
          value={fullName}
          onChangeText={setFullName}
        />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Email:</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          keyboardType='email-address'
        />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Phone No:</Text>
        <TextInput
          style={styles.input}
          value={phoneNo}
          onChangeText={setPhoneNo}
          keyboardType='phone-pad'
        />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Age:</Text>
        <TextInput
          style={styles.input}
          value={age}
          onChangeText={setAge}
          keyboardType='numeric'
        />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Experience:</Text>
        <TextInput
          style={styles.input}
          value={experience}
          onChangeText={setExperience}
        />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Applying For:</Text>
        <TextInput
          style={styles.input}
          value={applyingFor}
          onChangeText={setApplyingFor}
        />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Previous Designation:</Text>
        <TextInput
          style={styles.input}
          value={previousDesignation}
          onChangeText={setPreviousDesignation}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleSendMessage}>
        <Text style={styles.buttonText}>Send Message</Text>
      </TouchableOpacity>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#F5F5F5',
  },
  emailText: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 10,
  },
  emailLink: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
  subText: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 20,
  },
  inputGroup: {
    marginBottom: 15,
  },
  label: {
    fontSize: 14,
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: 'white',
  },
  button: {
    backgroundColor: '#333',
    padding: 12,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
})

export default Career
