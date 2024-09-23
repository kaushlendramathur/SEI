import React from 'react';
import { View, Text, StyleSheet, Pressable, ScrollView } from 'react-native';
import { useCourseStore } from '@/store/useCorseStore';
import { useRouter } from 'expo-router';

export default function Cart() {
  const router = useRouter();
  const { selectedCourses } = useCourseStore();

  // Calculate total fees and format it as a string
  const totalFees = selectedCourses.reduce((total, course) => total + Number(course.CourseFee), 0).toString();

  return (
    <View style={styles.container}>
      <Pressable style={styles.coursesButton} onPress={() => { router.push('/courses/myCart/form'); }}>
        <Text style={styles.buttonText}>Apply</Text>
      </Pressable>
      <View style={styles.totalContainer}>
          <Text style={styles.totalText}>Total Fees: Rs - {totalFees}</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        
        {selectedCourses.length > 0 ? (
          selectedCourses.map((course, index) => (
            <View key={index} style={styles.courseContainer}>
              <Text style={styles.courseName}>{course.courseName}</Text>
              <Text style={styles.courseDetails}>Starting Date - {course.CourseDate}</Text>
              <Text style={styles.courseDetails}>End Date - {course.CourseEndDate}</Text>
              <Text style={styles.courseFee}>Rs-{course.CourseFee}</Text>
            </View>
          ))
        ) : (
          <Text style={styles.emptyCart}>No courses selected.</Text>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9', // Light background for better contrast
    padding: 20,
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
  scrollContainer: {
    paddingBottom: 20, // Space at the bottom for better scroll experience
  },
  totalContainer: {
    marginTop: 20, // Space above total fees
    padding: 15,
    backgroundColor: 'white',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    alignItems: 'center', // Center total text
    marginBottom: 20, // Space below total fees
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#F1A40E', // Highlight total fees
  },
  courseContainer: {
    width: '100%',
    padding: 15,
    borderWidth: 1,
    borderColor: '#ddd', // Light border for separation
    borderRadius: 10, // Rounded corners
    backgroundColor: 'white', // White background for each course
    marginBottom: 15, // Space between course items
    shadowColor: '#000', // Shadow for elevation
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2, // Elevation for Android
  },
  courseName: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 5, // Space below course name
  },
  courseDetails: {
    fontSize: 14,
    color: '#555', // Grey color for less emphasis
  },
  courseFee: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#F1A40E', // Highlight fee
    marginTop: 5, // Space above fee
  },
  emptyCart: {
    fontSize: 16,
    color: '#888', // Grey color for empty cart message
    textAlign: 'center', // Center the text
  },
});

