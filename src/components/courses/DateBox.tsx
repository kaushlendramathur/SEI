import React, {useState} from 'react';
import { Pressable, Text, View, StyleSheet, FlatList } from 'react-native';
import { useCourseStore } from '@/store/useCorseStore';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronDown, faChevronRight } from '@fortawesome/free-solid-svg-icons';

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
  const [isVisible, setIsVisible] = useState<boolean>(false);


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
    <View style={styles.spoilerContainer}>
      <Pressable
        style={styles.spoiler}
        onPress={() => {
          setIsVisible((prev) => !prev);
        }}
      >
        <FontAwesomeIcon
          icon={isVisible ? faChevronDown : faChevronRight}
          style={styles.chevronIcon}
        />
        <Text style={styles.font16}>Select a Date to Add your Course to Cart</Text>
      </Pressable>
      <View style={styles.elementContainer}>
        {isVisible &&
            <View>
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
          }
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
    justifyContent: 'flex-start',
  },
  selectedButton: {
    backgroundColor: 'black',
  },
  font16: {
    fontSize: 16,
  },
  spoiler: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  chevronIcon: {
    marginRight: 10,
  },
  spoilerContainer: {
    paddingVertical: 3,
  },
  elementContainer: {
    paddingVertical: 2,
  },
});

export default DateBox;
