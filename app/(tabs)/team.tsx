import { SyntheticEvent, useEffect, useRef, useState } from 'react'
import {
  Animated,
  Image,
  ImageSourcePropType,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import icons from '../../constants/icons'

interface Person {
  id: number
  name: string
  position: string
}

const dummyFaculty: Person[] = [
  {
    id: 1,
    name: 'faculty1',
    position: 'CEO',
  },
  {
    id: 2,
    name: 'faculty2',
    position: 'CEO',
  },
  {
    id: 3,
    name: 'faculty3',
    position: 'CEO',
  },
  {
    id: 4,
    name: 'faculty4',
    position: 'CEO',
  },
  {
    id: 5,
    name: 'faculty1',
    position: 'CEO',
  },
  {
    id: 6,
    name: 'faculty2',
    position: 'CEO',
  },
  {
    id: 7,
    name: 'faculty3',
    position: 'CEO',
  },
  {
    id: 8,
    name: 'faculty4',
    position: 'CEO',
  },
]

const dummyFaculty2: Person[] = [
  {
    id: 1,
    name: 'faculty1',
    position: 'CEO',
  },
  {
    id: 2,
    name: 'faculty2',
    position: 'CEO',
  },
  {
    id: 3,
    name: 'faculty3',
    position: 'CEO',
  },
]

const DisplayFaculty = ({
  faculties,
  header,
}: {
  faculties: Person[]
  header: string
}) => {
  return (
    <>
      <Text style={styles.header}>{header}</Text>
      <View style={styles.grid}>
        {faculties.map((faculty, index) => {
          return (
            <View key={index} style={styles.facultyContainer}>
              <Image
                source={icons.user as ImageSourcePropType}
                style={styles.image}
              />
              <Text style={styles.name}>{faculty.name}</Text>
              <Text style={styles.position}>{faculty.position}</Text>
            </View>
          )
        })}
      </View>
    </>
  )
}

const Team = () => {
  const [faculties, setFaculties] = useState<Person[]>(dummyFaculty)
  const [activeCity, setActiveCity] = useState<string>('Kolkata')
  const [isVisible, setIsVisible] = useState<boolean>(true)
  const [lastPageTop, setLastPageTop] = useState<number>(0)

  useEffect(() => {
    if (activeCity === 'Kolkata') {
      setFaculties(dummyFaculty)
    } else {
      setFaculties(dummyFaculty2)
    }
  }, [activeCity])

  const handleScroll = (e: any) => {
    const top = e.nativeEvent.contentOffset.y

    if (top > lastPageTop) {
      setIsVisible(false)
    } else {
      setIsVisible(true)
    }

    setLastPageTop(top)
  }

  return (
    <View style={[styles.containter , !isVisible && styles.removePadding ]}>
      <Animated.View style={[styles.row,!isVisible && styles.hidden]}>
        <Pressable
          onPress={() => setActiveCity('Kolkata')}
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
          onPress={() => setActiveCity('Faridabad')}
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
      </Animated.View>

      <ScrollView onScroll={handleScroll} scrollEventThrottle={1000}>
        <DisplayFaculty faculties={faculties} header={'Faculty'} />
        <DisplayFaculty
          faculties={faculties}
          header={'Office Executives and Others'}
        />
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  containter: {
    backgroundColor: 'white',
    paddingBottom: 80,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal:25,
  },
  facultyContainer: {
    width: '45%',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 160,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  position: {
    fontSize: 14,
    color: '#666',
  },
  header: {
    paddingLeft: 20,
    paddingVertical: 20,
    fontSize: 20,
    fontWeight: 'bold',
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
  hidden:{
    display:'none',
  },
  removePadding:{
    paddingBottom:30,
  }
})

export default Team
