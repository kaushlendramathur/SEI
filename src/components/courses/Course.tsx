import React from 'react'
import { ImageBackground, Text, View, StyleSheet } from 'react-native'
import { ImageSourcePropType } from 'react-native'
import Spoiler from './Spoiler'
import DateBox from './DateBox'

// Define the type for the course prop (adjust according to your data structure)
type CourseProps = {
  index : number;
  course: any;
  location: string;
};

const Course = ({index, course, location }: CourseProps) => {
  

  return (
    <View style={styles.courseContainer}>
      <ImageBackground 
        source={require('@/assets/images/course.png') as ImageSourcePropType} 
        imageStyle={styles.imageStyle} 
        style={styles.backgroundImage}
      >
        <View style={styles.duration}>
          <Text style={styles.white}>{course.DurationofCourse[0]}</Text>
        </View>
        <View style={styles.location}>
          <Text style={styles.font16}>{location=== '1'?"Kolkata":"Faridabad"}</Text>
        </View>
      </ImageBackground>
      
      <View style={styles.textContainer}>
        <Text style={styles.header}>{course.Name}</Text>
        <Spoiler description={course.DocumentsRequired} label="Documents Required" />
        <Spoiler description={course.Eligibilty} label="Eligibility" />
        <DateBox CourseScheduleDetails={course.CourseScheduleDetails} courseName={course.Name} CourseId = {course.ID} courseKey = {index}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  courseContainer: {
    position: 'relative', 
    borderRadius: 20, 
    marginBottom: 30, 
    paddingBottom: 10, 
    borderColor: 'rgba(0,0,0,0.4)', 
    borderWidth: 1,
    width: '100%',
}
,
  imageStyle: { 
    resizeMode: 'cover', 
    borderTopLeftRadius: 20, 
    borderTopRightRadius: 20 
  },
  backgroundImage: { 
    width: '100%', 
    height: 150 
  },
  duration: { 
    position: 'absolute', 
    right: 15,
    height: 50, 
    width: 80, 
    alignItems: 'center', 
    justifyContent: 'center', 
    backgroundColor: '#F1A40E', 
    borderBottomLeftRadius: 15, 
    borderBottomRightRadius: 15 
  },
  location: { 
    position: 'absolute', 
    top: 10, 
    left: 10, 
    height: 40, 
    width: 100, 
    alignItems: 'center', 
    justifyContent: 'center', 
    backgroundColor: 'white', 
    borderRadius: 10 
  },
  white: { 
    color: 'white' 
  },
  textContainer: { 
    paddingHorizontal: 10, 
    paddingTop: 10, 
    justifyContent: 'center' 
  },
  header: { 
    fontWeight: 'bold', 
    fontSize: 17,
    marginBottom : 5 
  },
  font16: { 
    fontSize: 16 
  },
})

export default Course;
