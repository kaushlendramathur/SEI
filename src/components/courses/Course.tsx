import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Spoiler from './Spoiler'
import DateBox from './DateBox'

type CourseProps = {
  index : number;
  course: any
};

const Course = ({index, course}: CourseProps) => {
  return (
    <View style={styles.courseContainer}>
      <View style={styles.duration}>
          <Text style={styles.white}>{course.DurationofCourse[0]}</Text>
      </View>
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
    marginBottom: 4, 
    paddingBottom: 10, 
    borderColor: 'rgba(0,0,0,0.4)', 
    borderWidth: 1,
    width: '100%',
    marginTop:5
},
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
    height: 40, 
    width: 60, 
    alignItems: 'center', 
    justifyContent: 'center', 
    backgroundColor: '#F1A40E', 
    borderBottomLeftRadius: 15, 
    borderBottomRightRadius: 15 
  },
  location: { 
    position: 'absolute', 
    top: 5, 
    left: 5, 
    height: 40, 
    width: 100, 
    alignItems: 'center', 
    justifyContent: 'center', 
    backgroundColor: 'black', 
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
    fontWeight: '700', 
    fontSize: 15,
    marginBottom : 5,
    marginRight: 70,
    
  },
  font16: { 
    fontSize: 16,
    color: 'white'
  },
  detail:{
    position: 'relative',
    height: 40,
  }
})

export default Course;
