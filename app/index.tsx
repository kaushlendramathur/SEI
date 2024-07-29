import { Link, router } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import {
  Dimensions,
  ImageBackground,
  ImageSourcePropType,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native'

import BackgroundImage from '../assets/images/mainpage.png'

const { width, height } = Dimensions.get('window')

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <StatusBar style='auto' />
        <Text style={styles.header}>SEI EDUCATIONAL TRUST</Text>
        <Text style={styles.subHeader}>
          Approved by D.G.Shipping, Govt. of India
        </Text>
        <Text style={styles.subHeader}>
          MTI No:303014(Kolkata) | MTI No:103011(Faridabad)
        </Text>
        <Link href='/home' style={{ color: 'purple' }}>
          Go MainPage
        </Link>
      </View>
      <ImageBackground
        source={BackgroundImage as ImageSourcePropType}
        style={styles.backgroundImage}
        imageStyle={styles.imageStyle}
      >
        <Text
          style={styles.header2}
        >{`The Best App \n for the Marine \n Courses`}</Text>
        <Pressable
          style={styles.button}
          onPress={() => router.push('/login')}
        >
          <Text style={styles.buttonText}>Sign In</Text>
        </Pressable>
        <Link href='/register' style={styles.signUp}>
          Create An Account
        </Link>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    fontWeight: 'bold',
    fontSize: 25,
    paddingBottom: 10,
  },
  header2: {
    fontWeight: 'bold',
    fontSize: 30,
    color: 'white',
    position: 'static',
    top: 200,
    left: 30,
  },
  button: {
    top: 330,
    marginHorizontal: 60,
    backgroundColor: 'grey',
    height: 60,
    opacity: 0.7,
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
    top: 340,
    color: 'white',
    fontSize: 15,
  },
  subHeader: {
    fontSize: 12,
  },
  container: {
    paddingTop: 40,
    flex: 1,
    backgroundColor: '#fff',
  },
  textContainer: {
    width: width,
    height: height * 0.2,
    display: 'flex',
    justifyContent: 'center',
    paddingHorizontal: 40,
  },
  backgroundImage: {
    width: width,
    height: height * 0.8,
    transform: [{ scale: 1.1 }, { translateY: 30 }],
  },
  imageStyle: {
    resizeMode: 'cover',
  },
})
