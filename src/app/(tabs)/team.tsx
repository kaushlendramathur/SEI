import React, { useState, useRef, useCallback, useMemo } from 'react';
import {
  Animated,
  Pressable,
  StyleSheet,
  Text,
  View,
  FlatList,
} from 'react-native';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { fetchFacultyMembers, fetchStaffMembers } from '@/api/fetchTeamMembers';
import DisplayPersonnel from '@/components/team/DisplayPersonnel'; 
import SkeletonLoader from '@/components/team/SkeletonLoader'; // Import the SkeletonLoader component
import { Person } from '@/types/team/Person';

const Team: React.FC = () => {
  const [activeCity, setActiveCity] = useState<string>('Kolkata');
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const previousScrollY = useRef(0);
  const scrollThreshold = 200;

  const queryClient = useQueryClient();

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
    refetchOnWindowFocus: false,
  });

  const staffMembersQuery = useQuery({
    queryKey: ['staffMembers'],
    queryFn: fetchStaffMembers,
    refetchOnWindowFocus: false,
  });

  const getFilteredPersonnel = useCallback((personnel: Person[], city: string): Person[] => {
    return personnel.filter(
      (person) =>
        person.Designation.includes(city) 
    );
  }, []);

  const faculties = facultyMembersQuery.data?.DataModel || [];
  const staff = staffMembersQuery.data?.DataModel || [];

  const filteredFaculties = useMemo(() => getFilteredPersonnel(faculties, activeCity), [faculties, activeCity, getFilteredPersonnel]);

  const data = [
    {
      header: 'Faculties:',
      personnel: filteredFaculties,
    },
    {
      header: 'OFFICE EXECUTIVE & OTHERS:',
      personnel: staff,
    },
  ];

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    queryClient.invalidateQueries({queryKey:['facultyMembers']});
    queryClient.invalidateQueries({queryKey:['staffMembers']});
    setRefreshing(false);
  }, [queryClient]);

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

      {facultyMembersQuery.isLoading || staffMembersQuery.isLoading ? (
        <SkeletonLoader />
      ) : facultyMembersQuery.isError || staffMembersQuery.isError ? (
        <Text style={styles.errorText}>Failed to load data. Please try again later.</Text>
      ) : (
        <FlatList
          data={data}
          keyExtractor={(item) => item.header}
          renderItem={({ item }) => (
            <DisplayPersonnel
              personnel={item.personnel}
              header={item.header}
            />
          )}
          ListEmptyComponent={<Text style={styles.errorText}>No data available.</Text>}
          onScroll={handleScroll}
          refreshing={refreshing}
          onRefresh={onRefresh}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingBottom: 80,
    minWidth: '100%',
    minHeight: '100%'
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
  errorText: {
    textAlign: 'center',
    marginTop: 20,
    color: 'red',
  },
});

export default Team;
