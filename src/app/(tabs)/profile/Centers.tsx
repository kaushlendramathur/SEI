import React, { useState } from 'react'
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Pressable,
  Dimensions,
  ScrollView,
  Image,
  ImageSourcePropType,
} from 'react-native'
import { NavigationProp } from '@/types/interfaces'
import MapView, { Marker } from 'react-native-maps'

import { centersText, center } from '@/constants/static'
import CenterKolkata from '@/assets/images/centerKolkata.png'
import CenterFaridabad from '@/assets/images/centerFaridabad.png'

const { height, width } = Dimensions.get('screen')

const AddressBook = ({ location }: { location: center }) => {
  return (
    <View style={styles.addressContainer}>
      <Text style={{ fontSize: 20, paddingBottom: 15 }}>Locate Us</Text>
      {location.locateUs.map((text, index) => {
        return <Text key={index}>{text}</Text>
      })}
      <Text style={{ paddingVertical: 15 }}>{location.about}</Text>
      <View>
        {location.transportHighlights.map((text, index) => {
          return (
            <Text key={index}>
              <Text style={{ fontSize: 20 }}>{'\u2022  '}</Text>
              {text}
            </Text>
          )
        })}
      </View>
    </View>
  )
}

const Centers: React.FC<NavigationProp> = ({ navigate }) => {
  const [activeCity, setActiveCity] = useState<'Kolkata' | 'Faridabad'>(
    'Kolkata'
  )
  const Kolkata = {
    mapDetails: {
      latitude: 22.51501,
      longitude: 88.001244,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
    marker: { latitude: 22.51501, longitude: 88.001244 },
  }
  const Faridabad = {
    mapDetails: {
      latitude: 28.37265024071057,
      longitude: 77.30091604055717,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
    marker: { latitude: 28.37265024071057, longitude: 77.30091604055717 },
  }
  const [cityGps,setCityGps] = useState(Kolkata)

  return (
    <View
      style={[
        styles.container,
        { paddingBottom: 180 },
      ]}
    >
      {/* <Text>Centers</Text>
      <TouchableOpacity onPress={() => navigate('Profile')}>
        <Text>Go to Profile</Text>
      </TouchableOpacity> */}
      <View style={styles.row}>
        <Pressable
          onPress={() => {
            setActiveCity('Kolkata'), setCityGps(Kolkata)
          }}
          style={[
            styles.button,
            activeCity === 'Kolkata' && styles.activeButton,
          ]}
        >
          <Text
            style={[
              styles.buttonText,
              activeCity === 'Kolkata' && styles.activeButtonText,
            ]}
          >
            Kolkata
          </Text>
        </Pressable>
        <Pressable
          onPress={() => {
            setActiveCity('Faridabad'), setCityGps(Faridabad)
          }}
          style={[
            styles.button,
            activeCity === 'Faridabad' && styles.activeButton,
          ]}
        >
          <Text
            style={[
              styles.buttonText,
              activeCity === 'Faridabad' && styles.activeButtonText,
            ]}
          >
            Faridabad
          </Text>
        </Pressable>
      </View>
      <ScrollView>
        <AddressBook
          location={
            activeCity === 'Kolkata'
              ? centersText.Kolkata
              : centersText.Faridabad
          }
        />
        <Image
          source={
            activeCity === 'Kolkata'
              ? (CenterKolkata as ImageSourcePropType)
              : (CenterFaridabad as ImageSourcePropType)
          }
          resizeMode='cover'
          style={styles.centerImage}
        />
        <MapView style={styles.map} region={cityGps.mapDetails}>
          <Marker coordinate={cityGps.marker} title='SEI Educational Trust' />
        </MapView>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: height,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: 'white',
    marginHorizontal: 19,
    marginTop: 20,
    borderColor: 'rgba(0, 0, 0, 0.2)',
    borderWidth: 2,
    borderRadius: 30,
  },
  button: {
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 30,
    backgroundColor: 'white',
  },
  activeButton: {
    backgroundColor: 'black',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  activeButtonText: {
    color: 'white',
  },
  addressContainer: {
    paddingTop: 20,
    paddingBottom: 20,
    paddingHorizontal: 30,
  },
  centerImage: {
    width: width,
  },
  map: {
    width: width,
    height: 400,
  },
})

export default Centers
