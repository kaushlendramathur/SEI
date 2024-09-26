import React from 'react';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { FlatList, StyleSheet, View, Text, Pressable } from 'react-native';
import Course from '@/components/courses/Course';
import { useGetCourses } from '@/store/useGetCourses';
import SkeletonLoader from '@/components/team/SkeletonLoader';

export default function AddCourse() {
  const router = useRouter();
  const { data, loading } = useGetCourses();

  const params = useLocalSearchParams(); // Fetch all query params
  const locationString = Array.isArray(params.location)
    ? params.location[0]
    : params.location || '';
  const location = Number(locationString);

  // Filter courses based on location and condition
  const filteredCourses = data[location - 1]?.filter(
    (course) => course.CourseScheduleDetails && course.CourseScheduleDetails.length > 0
  ) || [];

  // Function to render each course item
  const renderCourseItem = ({ item, index }: { item: any; index: number }) => (
    <Course key={index} course={item} location={locationString} index={index} />
  );

  return (
    <View style={styles.container}>
      <Pressable style={styles.coursesButton} onPress={() => router.push('/courses/cart')}>
        <Text style={styles.buttonText}>Apply Courses</Text>
      </Pressable>
      {loading[location - 1] ? (
        <SkeletonLoader />
      ) : (
        <FlatList
          data={filteredCourses}
          renderItem={renderCourseItem}
          keyExtractor={(_, index) => index.toString()}
          ListEmptyComponent={<Text style={styles.noCoursesText}>No courses available.</Text>}
          showsVerticalScrollIndicator={false}
        />
      )}
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
