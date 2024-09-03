import React, { useState } from 'react'
import {
  Dimensions,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  Alert,
} from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import {
  faArrowLeft,
  faEye,
  faEyeSlash,
  faLock,
  faPhone,
  faUser,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons'
import * as Yup from 'yup'
import { Formik, Field, ErrorMessage } from 'formik'
import { Link, router } from 'expo-router'
import { registerUser } from '@/api/registerUser'

const { height, width } = Dimensions.get('window')

const validationSchema = Yup.object({
  username: Yup.string()
    .min(4, 'Username must be at least 4 characters')
    .required('Username is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
  firstname: Yup.string()
    .required('First name is required'),
  lastname: Yup.string()
    .required('Last name is required'),
  emailId: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  phoneNo: Yup.string()
    .matches(/^\d+$/, 'Phone number must be digits only')
    .min(10, 'Phone number must be at least 10 digits')
    .required('Phone number is required'),
})

const Register = () => {
  const [isVisible, setIsVisible] = useState(false)

  const handleRegister = async (values: any, resetForm: () => void) => {
    try {
      const response = await registerUser({
        ...values,
        UserTypeID: 7,
        isActive: true,
      })
      if (response?.Success === true) {
        Alert.alert('Registration successful', 'You have been registered successfully.')
        resetForm() // Reset the form fields
        router.push('/login')
      } else {
        Alert.alert('Registration failed', response?.Message || 'Unknown error')
      }
    } catch (error) {
      console.error('Registration error:', error)
    }
  }

  return (
    <ScrollView automaticallyAdjustKeyboardInsets={true}>
      <View style={styles.container}>
        <Pressable style={styles.arrowDiv} onPress={() => router.back()}>
          <FontAwesomeIcon icon={faArrowLeft} style={styles.arrow} />
        </Pressable>

        <Text style={styles.header}>Register</Text>
        <Text style={styles.subHeader}>Create Your New Account</Text>

        <Formik
          initialValues={{
            username: '',
            password: '',
            firstname: '',
            lastname: '',
            emailId: '',
            phoneNo: '',
          }}
          validationSchema={validationSchema}
          onSubmit={(values, { resetForm }) => handleRegister(values, resetForm)}
        >
          {({ handleChange, handleBlur, handleSubmit, values, resetForm }) => (
            <>
              <View style={styles.inputContainer}>
                <FontAwesomeIcon icon={faUser} style={styles.icon} />
                <Field
                  name="username"
                  placeholder="Username"
                  component={TextInput}
                  style={styles.input}
                  onChangeText={handleChange('username')}
                  onBlur={handleBlur('username')}
                  value={values.username}
                />
              </View>
              <Text style={styles.errorMessage}>
                <ErrorMessage name="username" />
              </Text>

              <View style={styles.inputContainer}>
                <FontAwesomeIcon icon={faLock} style={styles.icon} />
                <Field
                  name="password"
                  placeholder="Password"
                  component={TextInput}
                  style={styles.input}
                  secureTextEntry={!isVisible}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                />
                <Pressable onPress={() => setIsVisible(!isVisible)}>
                  <FontAwesomeIcon
                    icon={isVisible ? faEye : faEyeSlash}
                    style={styles.eyeButton}
                  />
                </Pressable>
              </View>
              <Text style={styles.errorMessage}>
                <ErrorMessage name="password" />
              </Text>

              <View style={styles.inputContainer}>
                <FontAwesomeIcon icon={faUser} style={styles.icon} />
                <Field
                  name="firstname"
                  placeholder="First Name"
                  component={TextInput}
                  style={styles.input}
                  onChangeText={handleChange('firstname')}
                  onBlur={handleBlur('firstname')}
                  value={values.firstname}
                />
              </View>
              <Text style={styles.errorMessage}>
                <ErrorMessage name="firstname" />
              </Text>

              <View style={styles.inputContainer}>
                <FontAwesomeIcon icon={faUser} style={styles.icon} />
                <Field
                  name="lastname"
                  placeholder="Last Name"
                  component={TextInput}
                  style={styles.input}
                  onChangeText={handleChange('lastname')}
                  onBlur={handleBlur('lastname')}
                  value={values.lastname}
                />
              </View>
              <Text style={styles.errorMessage}>
                <ErrorMessage name="lastname" />
              </Text>

              <View style={styles.inputContainer}>
                <FontAwesomeIcon icon={faEnvelope} style={styles.icon} />
                <Field
                  name="emailId"
                  placeholder="Email Id"
                  component={TextInput}
                  style={styles.input}
                  onChangeText={handleChange('emailId')}
                  onBlur={handleBlur('emailId')}
                  value={values.emailId}
                />
              </View>
              <Text style={styles.errorMessage}>
                <ErrorMessage name="emailId" />
              </Text>

              <View style={styles.inputContainer}>
                <FontAwesomeIcon icon={faPhone} style={styles.icon} />
                <Field
                  name="phoneNo"
                  placeholder="Phone No"
                  component={TextInput}
                  style={styles.input}
                  keyboardType="phone-pad"
                  onChangeText={handleChange('phoneNo')}
                  onBlur={handleBlur('phoneNo')}
                  value={values.phoneNo}
                />
              </View>
              <Text style={styles.errorMessage}>
                <ErrorMessage name="phoneNo" />
              </Text>

              <Pressable style={styles.button} onPress={handleSubmit as any}>
                <Text style={styles.buttonText}>Register</Text>
              </Pressable>

              <Text style={styles.richText}>
                Already Have An Account?{' '}
                <Link href="/login" style={styles.signIn}>
                  Login
                </Link>
              </Text>
            </>
          )}
        </Formik>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: height,
    width: width,
    alignItems: 'center',
  },
  header: {
    paddingTop: 50,
    fontWeight: 'bold',
    fontSize: 40,
    color: '#1B3552',
  },
  subHeader: {
    paddingTop: 5,
    fontSize: 15,
    color: 'grey',
    paddingBottom: 40,
  },
  arrow: {
    color: 'white',
  },
  arrowDiv: {
    borderRadius: 50,
    backgroundColor: '#D7DEE7',
    position: 'absolute',
    padding: 10,
    top: 20,
    left: 15,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#ccc',
    marginBottom: 2,  // Reduced bottom margin
    backgroundColor: '#dae0e8',
    marginHorizontal: 40,
    borderRadius: 15,
    height: 50,
    color: 'black',
  },
  icon: {
    padding: 10,
    marginHorizontal: 15,
  },
  input: {
    flex: 1,
    padding: 10,
    fontSize: 16,
  },
  eyeButton: {
    padding: 12,
    marginHorizontal: 15,
  },
  bottomSection: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingRight: 180,
    paddingTop: 10,
    paddingBottom: 40,
  },
  button: {
    marginHorizontal: 60,
    backgroundColor: '#1B3552',
    height: 60,
    width: 320,
    borderRadius: 30,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  richText: {
    marginTop: 10,
  },
  signIn: {
    color: '#1B3552',
    fontWeight: 'bold',
  },
  errorMessage: {
    color: 'red',
    fontSize: 12,
    marginHorizontal: 0, // Align with input fields
    marginBottom: 2, // Space between input field and error message
  },
})

export default Register
