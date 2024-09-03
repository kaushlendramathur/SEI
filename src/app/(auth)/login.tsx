import React, { useState } from 'react'
import {
  Dimensions,
  ImageBackground,
  ImageSourcePropType,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  ActivityIndicator,
  Alert
} from 'react-native'
import loginImage from '../../assets/images/login.png'
import { Link, router } from 'expo-router'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import {
  faCheckCircle,
  faCircle,
  faEye,
  faUser,
} from '@fortawesome/free-regular-svg-icons'
import {
  faArrowLeft,
  faEyeSlash,
  faLock,
} from '@fortawesome/free-solid-svg-icons'
import { loginUser } from '@/api/loginUser'
import auth from '@/utils/auth'
import { saveCredentials, clearCredentials } from '@/utils/authStore'

const { width, height } = Dimensions.get('window')

const Login = () => {
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [isVisible, setIsVisible] = useState<boolean>(false)
  const [rememberMe, setRememberMe] = useState<boolean>(false)
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState<string>('')

  const handleLogin = async () => {
    setStatus('loading')
    try {
      const response = await loginUser(username, password)
      if (response?.Success === true) {
        await auth.signIn(response?.DataModel)
        if (rememberMe) {
          await saveCredentials(username, password)
        } else {
          await clearCredentials()
        }
        setStatus('success')
        router.push('/home')
      } else {
        setStatus('error')
        setErrorMessage(response?.Message || 'Login failed')
        Alert.alert('Login Error', response?.Message || 'Unknown error occurred')
      }
    } catch (error) {
      setStatus('error')
      setErrorMessage('An error occurred during login')
      console.log(error)
    }
  }

  return (
    <ScrollView automaticallyAdjustKeyboardInsets={true}>
      <View style={styles.container}>
        <ImageBackground
          source={loginImage as ImageSourcePropType}
          style={styles.backgroundImage}
          imageStyle={styles.imageStyle}
        >
          <Pressable style={styles.arrowDiv} onPress={() => router.back()}>
            <FontAwesomeIcon
              icon={faArrowLeft}
              style={styles.arrow}
            />
          </Pressable>
        </ImageBackground>

        <Text style={styles.header}>Welcome Back</Text>
        <Text style={styles.subHeader}>Login To Your Account</Text>

        <View style={styles.inputContainer}>
          <FontAwesomeIcon icon={faUser} style={styles.icon} />
          <TextInput
            placeholder='Username'
            style={styles.input}
            autoCapitalize='none'
            onChangeText={(text) => setUsername(text)}
          />
        </View>

        <View style={styles.inputContainer}>
          <FontAwesomeIcon icon={faLock} style={styles.icon} />
          <TextInput
            placeholder='Password'
            style={styles.input}
            autoCapitalize='none'
            secureTextEntry={!isVisible}
            onChangeText={(text) => setPassword(text)}
          />
          <Pressable onPress={() => setIsVisible((prev) => !prev)}>
            <FontAwesomeIcon
              icon={isVisible ? faEye : faEyeSlash}
              style={styles.eyeButton}
            />
          </Pressable>
        </View>

        <View style={styles.bottomSection}>
          <Pressable onPress={() => setRememberMe((prev) => !prev)}>
            <FontAwesomeIcon
              icon={rememberMe ? faCheckCircle : faCircle}
              style={styles.icon}
            />
          </Pressable>
          <Text>Remember Me</Text>

          <Link href='/profile' style={styles.forgotPassword}>
            Forgot Password?
          </Link>
        </View>

        {status === 'loading' && (
          <ActivityIndicator size="large" color="#1B3552" style={styles.loader} />
        )}

        {status === 'error' && errorMessage && (
          <Text style={styles.errorMessage}>{errorMessage}</Text>
        )}

        <Pressable style={styles.button} onPress={handleLogin} disabled={status === 'loading'}>
          <Text style={styles.buttonText}>
            {status === 'loading' ? 'Logging In...' : 'Login'}
          </Text>
        </Pressable>
        <Text style={styles.richText}>
          New Student Register Here{' '}
          <Link href='/register' style={styles.signUp}>
            SignUp
          </Link>
        </Text>
      </View>
      <View style={{ height: 30 }} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  header: {
    paddingTop: 20,
    fontWeight: 'bold',
    fontSize: 40,
    color: '#1B3552',
  },
  subHeader: {
    color: 'grey',
    paddingBottom: 70,
  },
  backgroundImage: {
    width: width,
    height: height * 0.3,
    transform: [{ scale: 1.25 }],
  },
  imageStyle: {
    resizeMode: 'cover',
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
  signUp: {
    display: 'flex',
    alignSelf: 'center',
    color: '#1B3552',
    fontWeight: 'bold',
    fontSize: 17,
    textDecorationLine: 'underline',
  },
  richText: {
    paddingTop: 10,
    fontSize: 15,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#ccc',
    marginBottom: 20,
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
  checkboxContainer: {
    backgroundColor: 'transparent',
    padding: 0,
  },
  bottomSection: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingBottom: 40,
  },
  forgotPassword: {
    paddingLeft: 60,
    color: '#1B3552',
    fontSize: 15,
  },
  arrow: {
    color: '#1B3552',
  },
  arrowDiv: {
    borderRadius: 50,
    backgroundColor: 'white',
    position: 'absolute',
    padding: 6,
    top: 40,
    left: 45,
  },
  loader: {
    marginVertical: 20,
  },
  errorMessage: {
    color: 'red',
    fontSize: 14,
    marginBottom: 10,
  },
})

export default Login
