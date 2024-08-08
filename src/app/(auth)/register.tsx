import {
  faCircle,
  faCircleCheck,
  faEnvelope,
  faEye,
  faUser,
} from '@fortawesome/free-regular-svg-icons'
import {
  faArrowLeft,
  faEyeSlash,
  faLock,
  faPhone,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { Link, router } from 'expo-router'
import { useState } from 'react'
import {
  Dimensions,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native'
import { RegisterType } from "@/types/auth/register";
import { registerUser } from '@/api/registerUser'

const { height, width } = Dimensions.get('window')

const Register = () => {
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [isVisible, setIsVisible] = useState<boolean>(false)
  const [rememberMe, setRememberMe] = useState<boolean>(false)

  const [firstname, setFirstname] = useState<string>('')
  const [lastname, setLastname] = useState<string>('')
  const [emailId, setEmailId] = useState<string>('')
  const [phoneNo, setPhoneNo] = useState<string>('')

  const handleRegister = async() => {
    
    try {
      const data : RegisterType ={
        username : username,
        password : password,
        firstname: firstname,
        lastname: lastname,
        emailId: emailId,
        phoneNo: phoneNo,
        UserTypeID: 7,
        isActive: true,
      }
      const response = await registerUser(data)
      if (response?.Success === true) {
        router.push('/login')
      }
      else{
        console.log("Register:",response)
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <View style={styles.container}>
      <Pressable style={styles.arrowDiv} onPress={() => router.back()}>
        <FontAwesomeIcon icon={faArrowLeft} style={styles.arrow} />
      </Pressable>

      <Text style={styles.header}>Register</Text>
      <Text style={styles.subHeader}>Create Your New Account</Text>

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

      <View style={styles.inputContainer}>
        <FontAwesomeIcon icon={faUser} style={styles.icon} />
        <TextInput
          placeholder='FirstName'
          style={styles.input}
          autoCapitalize='none'
          onChangeText={(text) => setFirstname(text)}
        />
      </View>

      <View style={styles.inputContainer}>
        <FontAwesomeIcon icon={faUser} style={styles.icon} />
        <TextInput
          placeholder='LastName'
          style={styles.input}
          autoCapitalize='none'
          onChangeText={(text) => setLastname(text)}
        />
      </View>

      <View style={styles.inputContainer}>
        <FontAwesomeIcon icon={faEnvelope} style={styles.icon} />
        <TextInput
          placeholder='Email Id'
          style={styles.input}
          autoCapitalize='none'
          onChangeText={(text) => setEmailId(text)}
        />
      </View>

      <View style={styles.inputContainer}>
        <FontAwesomeIcon icon={faPhone} style={styles.icon} />
        <TextInput
          placeholder='Phone No'
          style={styles.input}
          autoCapitalize='none'
          keyboardType='phone-pad'
          onChangeText={(text) => setPhoneNo(text)}
        />
      </View>

      <View style={styles.bottomSection}>
        <Pressable onPress={() => setRememberMe((prev) => !prev)}>
          <FontAwesomeIcon
            icon={rememberMe ? faCircleCheck : faCircle}
            style={styles.icon}
          />
        </Pressable>
        <Text>Remember Me</Text>
      </View>

      <Pressable style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Register</Text>
      </Pressable>
      <Text style={styles.richText}>
        Already Have An Account?{' '}
        <Link href='/login' style={styles.signIn}>
          Login
        </Link>
      </Text>
    </View>
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
    marginBottom: 10,
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
  signIn: {
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
})

export default Register
