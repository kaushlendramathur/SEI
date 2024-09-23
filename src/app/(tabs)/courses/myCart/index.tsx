import React, { useState } from 'react';
import { useRouter } from 'expo-router';
import { ScrollView, StyleSheet, View, Text, Pressable } from 'react-native';
import Course from '@/components/courses/Course';
import { courses } from '@/constants/courses';

export default function AddCourse () {
  const router = useRouter();
 
  return (
    <View style={styles.container}>
      <Pressable style={styles.coursesButton} onPress={()=>{router.push('/courses/myCart/cart')}}>
        <Text style={styles.buttonText}>Appply Courses</Text>
      </Pressable>
      <ScrollView showsVerticalScrollIndicator={false}>
        {courses.filter(course => course.CourseScheduleDetails.length).map((course, index) => (
          <Course key={index} course={course}  />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: 'white', 
    paddingHorizontal: 20, 
    paddingVertical: 10,
  },
  coursesButton: {
    backgroundColor: 'black',
    paddingVertical: 15,
    width: '100%', // Full width
    alignItems: 'center',
    borderRadius: 5, // Optional: adds rounded corners
    marginBottom: 10, // Space below the button
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});


