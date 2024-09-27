import React, { useState } from 'react';
import { NavigationProp } from '@/types/interfaces';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Linking,
  StyleSheet,
  ScrollView,
  Alert,
  ActivityIndicator,
} from 'react-native';
import { postCareer } from '@/api/postCareer';
import { Picker } from '@react-native-picker/picker';

const Career: React.FC<NavigationProp> = ({ navigate }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNo, setPhoneNo] = useState('');
  const [age, setAge] = useState('');
  const [experience, setExperience] = useState('');
  const [applyingFor, setApplyingFor] = useState('');
  const [previousDesignation, setPreviousDesignation] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSendMessage = async () => {
    // Basic validation
    if (!fullName || !email || !phoneNo || !age || !experience || !applyingFor) {
      Alert.alert('Error', 'Please fill all required fields.');
      return;
    }

    setLoading(true);
    try {
      await postCareer({
        Name: fullName,
        Email: email,
        PhoneNo: phoneNo,
        Age: age,
        NoOfYearsofExp: experience,
        previousDesignation,
        sendto: applyingFor === 'Kolkata' ? '0' : '1',
      });
      Alert.alert('Success', 'Your application has been submitted successfully.');
      setFullName('');
      setEmail('');
      setPhoneNo('');
      setAge('');
      setExperience('');
      setApplyingFor('');
      setPreviousDesignation('');
    } catch (error) {
      Alert.alert('Error', 'There was an error submitting your application. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const options = ['Kolkata', 'Faridabad'];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.textBox}>
        <Text style={styles.emailText}>
          Send your resume in {' '}
          <Text
            style={styles.emailLink}
            onPress={() => Linking.openURL('mailto:booking@seiedutrust.com')}
          >
            booking@seiedutrust.com
          </Text>
           { ' '}mail 
        </Text>

        <Text style={styles.subText}>OR</Text>
        <Text style={styles.subText}>
          Fill up the form below, We will get back to you shortly!
        </Text>
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Full Name:</Text>
        <TextInput style={styles.input} value={fullName} onChangeText={setFullName} />
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
        <TextInput style={styles.input} value={age} onChangeText={setAge} keyboardType='numeric' />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Experience:</Text>
        <TextInput style={styles.input} value={experience} onChangeText={setExperience} />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Previous Designation:</Text>
        <TextInput
          style={styles.input}
          value={previousDesignation}
          onChangeText={setPreviousDesignation}
        />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Applying For:</Text>
        <Picker
          style={styles.input}
          selectedValue={applyingFor}
          onValueChange={(itemValue) => setApplyingFor(itemValue)}
        >
          {options.map((option) => (
            <Picker.Item key={option} label={option} value={option} />
          ))}
        </Picker>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleSendMessage} disabled={loading}>
        {loading ? (
          <ActivityIndicator color='#fff' />
        ) : (
          <Text style={styles.buttonText}>Send Message</Text>
        )}
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: 'white',
  },
  emailText: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 10,
    marginTop: 10,
  },
  emailLink: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
  subText: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 5,
  },
  inputGroup: {
    marginBottom: 20,
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
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  textBox: {
    marginBottom: 20,
  },
});

export default Career;
