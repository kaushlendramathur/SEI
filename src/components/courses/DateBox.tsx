import React, { useState } from 'react';
import { Pressable, Text, View, StyleSheet } from 'react-native';
import { CartCourse } from '@/types/courses/cartCourse';
import { useCourseStore } from '@/store/useCorseStore'; // Update the path as needed

const DateBox = ({
  CourseScheduleDetails,
  courseName,
}: {
  CourseScheduleDetails: any[];
  courseName: string;
}) => {
  const [selectedButtonIndex, setSelectedButtonIndex] = useState(-1);
  const addCourse = useCourseStore((state:any) => state.addCourse);
  const removeCourse = useCourseStore((state:any) => state.removeCourse);

  const handleSelectDate = (index: number, details: any) => {
    if (index !== selectedButtonIndex) {
      setSelectedButtonIndex(index);
      addCourse({
        CourseID: details.CourseID,
        courseName: courseName,
        CourseDate: details.CourseDate,
        CourseEndDate: details.CourseEndDate,
        CourseFee: details.CourseFee,
        SeatAvaiable: details.SeatAvaiable,
        isEarlyBirdDiscountEligible: details.isEarlyBirdDiscountEligible,
        isPreviousStudent: details.isPreviousStudent,
      });
    } else {
      setSelectedButtonIndex(-1);
      removeCourse(details.CourseID);
    }
  };

  return (
    <View>
      <Text style={[styles.font16, { paddingVertical: 5 }]}>Select a Date to Add your Course to Cart</Text>
      <View style={styles.dateContainer}>
        {CourseScheduleDetails.map((details, index) => (
          <Pressable
            key={index}
            style={[styles.dateBox, index === selectedButtonIndex && styles.selectedButton]}
            onPress={() => handleSelectDate(index, details)}
          >
            <Text style={index === selectedButtonIndex ? { color: 'white' } : {}}>{details.CourseDate}</Text>
          </Pressable>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  dateBox: {
    borderWidth: 1,
    borderColor: 'black',
    width: 96,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 8,
    borderRadius: 5,
    marginHorizontal: 5,
    padding: 3,
  },
  dateContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  selectedButton: {
    backgroundColor: 'black',
  },
  font16: {
    fontSize: 16,
    paddingHorizontal: 5,
  },
});

export default DateBox;
