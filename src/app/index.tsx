import { Link, router } from 'expo-router'
import {
  Dimensions,
  ImageBackground,
  ImageSourcePropType,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import { useEffect } from 'react'
import { getCredentials } from '@/utils/authStore'

import BackgroundImage from '@/assets/images/mainpage.png'
import ClippedRectangle from '@/assets/images/mainpage2.png'

const { width, height } = Dimensions.get('window')

export default function App() {
  useEffect(() => {
    const loadCredentials = async () => {
      const credential = await getCredentials();
      if (credential) {
        router.push('/home')
      }
    }
    loadCredentials()
  }, [])

  return (
    <ImageBackground
      source={BackgroundImage as ImageSourcePropType}
      style={styles.backgroundImage}
      imageStyle={styles.imageStyle}
    >
      <View>
        <ImageBackground
          source={ClippedRectangle as ImageSourcePropType}
          imageStyle={styles.imageStyle}
          style={styles.clippedRectangle}
        >
          <View style={styles.textContainer}>
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
          <View>
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
          </View>
        </ImageBackground>
      </View>
    </ImageBackground>
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
    top: 260,
    left: 30,
  },
  button: {
    top: height-500,
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
    top: height-490,
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
    paddingTop:90,
    display: 'flex',
    justifyContent: 'center',
    paddingHorizontal: 40,
    paddingBottom:70,
  },
  backgroundImage: {
    width: width,
    height: height*1.1,
  },
  clippedRectangle: {
    width: width,
    height: height * 0.35,
  },
  imageStyle: {
    resizeMode: 'cover',
  },
})
