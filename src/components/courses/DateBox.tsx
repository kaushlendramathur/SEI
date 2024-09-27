import React from 'react';
import { Pressable, Text, View, StyleSheet, FlatList } from 'react-native';
import { useCourseStore } from '@/store/useCorseStore'; // Update the path as needed

const DateBox = ({
  CourseScheduleDetails,
  courseName,
  CourseId,
  courseKey,
}: {
  CourseScheduleDetails: any[];
  courseName: string;
  CourseId: number;
  courseKey: number;
}) => {
  const { addCourse, removeCourse, setSelectedCoursesIndex, selectedCoursesIndex } = useCourseStore();

  const handleSelectDate = (index: number, details: any, type: number) => {
    if (type === 1) {
      setSelectedCoursesIndex(courseKey, index, 1);
      addCourse({
        CouresKey: courseKey,
        Id: details.Id,
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
      setSelectedCoursesIndex(courseKey, index, 0);
      removeCourse(details.CourseID);
    }
  };

  // Render each date item
  const renderDateItem = ({ item, index }: { item: any; index: number }) => {
    const isSelected =
      selectedCoursesIndex?.[courseKey] && selectedCoursesIndex?.[courseKey]?.[index] === 1;

    return (
      <Pressable
        style={[styles.dateBox, isSelected && styles.selectedButton]}
        onPress={() =>
          handleSelectDate(index, item, isSelected ? 0 : 1)
        }
      >
        <Text style={isSelected ? { color: 'white' } : {}}>{item.CourseDate}</Text>
      </Pressable>
    );
  };

  return (
    <View>
      <Text style={[styles.font16, { paddingVertical: 5 }]}>
        Select a Date to Add your Course to Cart
      </Text>
      <FlatList
        data={CourseScheduleDetails}
        renderItem={renderDateItem}
        keyExtractor={(_, index) => index.toString()}
        horizontal={false}
        numColumns={3} // Adjust the number of columns as per your design
        columnWrapperStyle={styles.dateContainer} // Apply styles to each row
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1 }}
      />
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
    justifyContent: 'flex-start', // Ensures items align left
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
