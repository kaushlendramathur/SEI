import React from 'react';
import { View, Text, StyleSheet, Pressable, ScrollView } from 'react-native';
import { useCourseStore } from '@/store/useCorseStore';
import { useRouter } from 'expo-router';
import { setAllCoursesByCart } from '@/api/setAllCoursesByCart';
import { AntDesign } from '@expo/vector-icons'; // Import AntDesign icons from expo vector icons

export default function Cart() {
  const router = useRouter();
  const { selectedCourses, removeCourse, setSelectedCoursesIndex } = useCourseStore(); // Assuming removeCourse is a function in the store to remove a course

  const handleApply = async () => {
    try {
      router.push('/courses/form');
      const filteredCourses = selectedCourses.map(({ courseName, Id, CouresKey, ...course }) => course);
      await setAllCoursesByCart({ carts: filteredCourses });
    } catch (error) {
      console.error('Error applying courses:', error);
    }
  };

  const handleRemoveCourse = (courseId: number, courseKey: number) => {
     setSelectedCoursesIndex(courseKey, 0, 0);
     removeCourse(courseId);
  }

  // Calculate total fees and format it as a string
  const totalFees = selectedCourses.reduce((total, course) => total + Number(course.CourseFee), 0).toString();

  return (
    <View style={styles.container}>
      <Pressable style={styles.coursesButton} onPress={handleApply}>
        <Text style={styles.buttonText}>Apply</Text>
      </Pressable>
      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Total Fees: Rs - {totalFees}</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        {selectedCourses.length > 0 ? (
          selectedCourses.map((course, index) => (
            <View key={index} style={styles.courseContainer}>
              <Pressable style={styles.deleteButton} onPress={() => handleRemoveCourse(course.CourseID, course.CouresKey)}>
                <AntDesign name="delete" size={20} color='#F44336' />
              </Pressable>

              <Text style={styles.courseName}>{course.courseName}</Text>
              <Text style={styles.courseDetails}>Starting Date - {course.CourseDate}</Text>
              <Text style={styles.courseDetails}>End Date - {course.CourseEndDate}</Text>
              <Text style={styles.courseFee}>Rs - {course.CourseFee}</Text>
            </View>
          ))
        ) : (
          <Text style={styles.emptyCart}>No courses selected.</Text>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    padding: 20,
  },
  coursesButton: {
    backgroundColor: 'black',
    paddingVertical: 15,
    width: '100%',
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  scrollContainer: {
    paddingBottom: 20,
  },
  totalContainer: {
    marginTop: 20,
    padding: 15,
    backgroundColor: 'white',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    alignItems: 'center',
    marginBottom: 20,
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#F1A40E',
  },
  courseContainer: {
    width: '100%',
    padding: 15,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    backgroundColor: 'white',
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
    position: 'relative',
  },
  deleteButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 10,
  },
  courseName: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 5,
    marginRight: 30,
  },
  courseDetails: {
    fontSize: 14,
    color: '#555',
  },
  courseFee: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#F1A40E',
    marginTop: 5,
  },
  emptyCart: {
    fontSize: 16,
    color: '#888',
    textAlign: 'center',
  },
});
