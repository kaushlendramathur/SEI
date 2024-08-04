import React, { useState, useRef, useCallback, useMemo } from 'react';
import {
  Animated,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { useQuery } from '@tanstack/react-query';
import { fetchFacultyMembers, fetchStaffMembers } from '@/api/fetchTeamMembers';
import DisplayPersonnel from '@/components/team/DisplayPersonnel'; 
import { Person } from '@/types/team/Person';

const Team = () => {
  const [activeCity, setActiveCity] = useState<string>('Kolkata');
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const previousScrollY = useRef(0);
  const scrollThreshold = 200;

  const handleScroll = useCallback((event: any) => {
    const currentScrollY = event.nativeEvent.contentOffset.y;
    const scrollDifference = currentScrollY - previousScrollY.current;

    if (Math.abs(scrollDifference) > scrollThreshold) {
      if (currentScrollY > previousScrollY.current) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      previousScrollY.current = currentScrollY;
    }
  }, []);

  const facultyMembersQuery = useQuery({
    queryKey: ['facultyMembers'],
    queryFn: fetchFacultyMembers,
  });

  const staffMembersQuery = useQuery({
    queryKey: ['staffMembers'],
    queryFn: fetchStaffMembers,
  });

  const getFilteredPersonnel = useCallback((personnel: Person[], city: string): Person[] => {
    return personnel.filter(
      (person) =>
        person.Designation.includes(city) 
    );
  }, []);

  const faculties = facultyMembersQuery.data?.DataModel || [];
  const staff = staffMembersQuery.data?.DataModel || [];

  const filteredFaculties = useMemo(() => getFilteredPersonnel(faculties, activeCity), [faculties, activeCity,  getFilteredPersonnel]);

  return (
    <View style={[styles.container, !isVisible && styles.removePadding]}>
      <Animated.View style={[styles.row, !isVisible && styles.hidden]}>
        <Pressable
          onPress={() => setActiveCity('Kolkata')}
          style={[
            styles.button,
            activeCity === 'Kolkata' && styles.activeButton,
          ]}
        >
          <Text
            style={[
              styles.buttonText,
              activeCity === 'Kolkata' && styles.activeButtonText,
            ]}
          >
            Kolkata
          </Text>
        </Pressable>
        <Pressable
          onPress={() => setActiveCity('Faridabad')}
          style={[
            styles.button,
            activeCity === 'Faridabad' && styles.activeButton,
          ]}
        >
          <Text
            style={[
              styles.buttonText,
              activeCity === 'Faridabad' && styles.activeButtonText,
            ]}
          >
            Faridabad
          </Text>
        </Pressable>
      </Animated.View>

      <ScrollView onScroll={handleScroll} >
        {facultyMembersQuery.isSuccess && (
          <DisplayPersonnel
            personnel= {filteredFaculties}
            header={'Faculties:'}
          />
        )}
        {staffMembersQuery.isSuccess && (
          <DisplayPersonnel
            personnel={staff}
            header={'OFFICE EXECUTIVE & OTHERS:'}
          />
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingBottom: 80,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 25,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: 'white',
    marginHorizontal: 19,
    marginTop: 20,
    borderColor: 'rgba(0, 0, 0, 0.2)',
    borderWidth: 2,
    borderRadius: 30,
  },
  button: {
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 30,
    backgroundColor: 'white',
  },
  activeButton: {
    backgroundColor: 'black',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  activeButtonText: {
    color: 'white',
  },
  hidden: {
    display: 'none',
  },
  removePadding: {
    paddingBottom: 30,
  },
});

export default Team;
