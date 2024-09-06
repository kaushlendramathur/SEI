import { useRouter } from 'expo-router';
import React from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEye } from '@fortawesome/free-regular-svg-icons';
import { fetchForms } from '@/api/fetchForms';
import { useQuery, useQueryClient } from '@tanstack/react-query';


const MyCourses = () => {
  const router = useRouter();

  const data = useQuery({
    queryKey: ['forms'],
    queryFn: fetchForms,
    refetchOnWindowFocus: false,
  }).data?.DataModel || [];
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

  return (
    <View style={styles.container}>
      <View style={styles.tableHeader}>
        <Text style={styles.idCell}>ID</Text>
        <Text style={styles.formIdCell}>Admission Form ID</Text>
        <Text style={styles.dateCell}>Date</Text>
        <Text style={styles.viewButton}>View</Text>
      </View>

      <FlatList data={data} renderItem={renderRow} showsVerticalScrollIndicator={false} keyExtractor={(item) => String(item.SLNO)} />
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
});

export default MyCourses;
