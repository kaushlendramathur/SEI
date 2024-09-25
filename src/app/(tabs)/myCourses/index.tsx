import { useRouter } from 'expo-router';
import React from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet, ActivityIndicator } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEye } from '@fortawesome/free-regular-svg-icons';
import { fetchForms } from '@/api/fetchForms';
import { useQuery } from '@tanstack/react-query';
import SkeletonLoader from '@/components/team/SkeletonLoader';

const MyCourses = () => {
  const router = useRouter();

  // Use the useQuery hook to fetch data and manage loading state
  const { data, isLoading, isError } = useQuery({
    queryKey: ['forms'],
    queryFn: fetchForms,
    refetchOnWindowFocus: false,
  });

  // Extract DataModel from data or set as empty array if undefined
  const formsData = data?.DataModel || [];

  const handleViewClick = (Id: string) => {
    // Navigate to the dynamic route with 'link' parameter
    router.push(`/myCourses/form/${Id}`);
  };

  const renderRow = ({ item }: { item: any }) => (
    <View style={styles.row}>
      <Text style={styles.idCell}>{item.SLNO}</Text>
      <Text style={styles.formIdCell}>{item.FormNameID}</Text>
      <Text style={styles.dateCell}>{item.Date}</Text>
      <TouchableOpacity style={styles.viewButton} onPress={() => handleViewClick(item.ID)}>
        <FontAwesomeIcon icon={faEye} />
      </TouchableOpacity>
    </View>
  );

  // Render loading indicator when fetching data
  if (isLoading) {
    return (
      <SkeletonLoader/>
    );
  }

  // Render error message if fetching fails
  if (isError) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Failed to load forms. Please try again later.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.tableHeader}>
        <Text style={styles.idCell}>ID</Text>
        <Text style={styles.formIdCell}>Admission Form ID</Text>
        <Text style={styles.dateCell}>Date</Text>
        <Text style={styles.viewButton}>View</Text>
      </View>

      <FlatList
        data={formsData}
        renderItem={renderRow}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => String(item.SLNO)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: 'white',
    paddingHorizontal: 20,
  },
  tableHeader: {
    flexDirection: 'row',
    marginBottom: 10,
    backgroundColor: '#f0f0f0',
    paddingVertical: 10,
  },
  row: {
    flexDirection: 'row',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  idCell: {
    flex: 1,
    textAlign: 'center',
  },
  formIdCell: {
    flex: 5,
  },
  dateCell: {
    flex: 3,
    textAlign: 'center',
  },
  viewButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    color: 'red',
    fontSize: 16,
  },
});

export default MyCourses;
