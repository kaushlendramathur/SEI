import React, { useEffect } from 'react';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { ScrollView, StyleSheet, View, Text, Pressable, ActivityIndicator } from 'react-native';
import Course from '@/components/courses/Course';
import { useGetCourses } from '@/store/useGetCourses';
import SkeletonLoader from '@/components/team/SkeletonLoader';
import { useCourseStore } from '@/store/useCorseStore';

export default function AddCourse() {
  const router = useRouter();
  const { data, execute, loading } = useGetCourses();
  const {courseIndexMap} = useCourseStore();

  const params = useLocalSearchParams(); // Fetch all query params
  const locationString = Array.isArray(params.location)
    ? params.location[0]
    : params.location || '';

  useEffect(() => {
    if(locationString) {
      execute(locationString);
    }
  }, [locationString, execute]);
  
  return (
    <View style={styles.container}>
      <Pressable style={styles.coursesButton} onPress={() => router.push('/courses/cart')}>
        <Text style={styles.buttonText}>Apply Courses</Text>
      </Pressable>
      <ScrollView showsVerticalScrollIndicator={false}>
        {loading ? (
          <SkeletonLoader />
        ) : (
          data
            ?.filter(course => course.CourseScheduleDetails && course.CourseScheduleDetails.length > 0)
            .map((course, index) => (
              <Course key={index} course={course} location = {locationString} courseIndexMap ={courseIndexMap} />
            ))
        )}
        {!loading && data?.length === 0 && (
          <Text style={styles.noCoursesText}>No courses available.</Text>
        )}
      </ScrollView>
    </View>
  );
}

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
  noCoursesText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
    color: 'gray',
  },
});
