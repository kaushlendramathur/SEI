import { useRouter } from 'expo-router';
import React from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEye } from '@fortawesome/free-regular-svg-icons';

const data = [
  {
    id: '1',
    formId: 'KOL/FORM/2018/0086411',
    date: '2023-09-01',
    pdfUrl: 'https://www.seiedutrust.com/Home/ShowForm?id=8516',
  },
  {
    id: '2',
    formId: 'KOL/FORM/2018/0086412',
    date: '2023-09-02',
    pdfUrl: 'https://www.seiedutrust.com/Home/ShowForm?id=8516',
  },
];

const MyCourses = () => {
  const router = useRouter();

  const handleViewClick = (pdfUrl: string) => {
    // Navigate to the dynamic route with 'link' parameter
    router.push(`/myCourses/form/${encodeURIComponent(pdfUrl)}`);
  };

  const renderRow = ({ item }: { item: any }) => (
    <View style={styles.row}>
      <Text style={styles.idCell}>{item.id}</Text>
      <Text style={styles.formIdCell}>{item.formId}</Text>
      <Text style={styles.dateCell}>{item.date}</Text>
      <TouchableOpacity style={styles.viewButton} onPress={() => handleViewClick(item.pdfUrl)}>
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

      <FlatList data={data} renderItem={renderRow} keyExtractor={(item) => item.id} />
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
