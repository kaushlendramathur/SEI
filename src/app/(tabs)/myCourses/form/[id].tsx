import React, { useState, useEffect } from 'react';
import { useLocalSearchParams } from 'expo-router';
import { ScrollView, StyleSheet, ActivityIndicator, View, Text } from 'react-native';
import TopSection from '@/components/myCourses/TopSection';
import CoursesAppliedForm from '@/components/myCourses/CoursesAppliedForm';
import EmergencyInfoForm from '@/components/myCourses/EmergencyInfoForm';
import RefresherCoursesForm from '@/components/myCourses/RefresherCoursesForm';
import { fetchFormDetails } from '@/api/fetchFormDetails';
import { FormData } from '@/types/myCourses/formDetails';

const AdmissionForm: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<FormData | null>(null);
  const { id } = useLocalSearchParams();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetchFormDetails(Number(id) || 7910);
        setFormData(response.DataModel[0]);
      } catch (error) {
        console.error('Error fetching form details:', error);
      } finally {
        setLoading(false);
      }
    };
  
    fetchData();
  }, [id]);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Loading form data...</Text>
      </View>
    );
  }
  
  return (
    <ScrollView style={styles.container}>
      <TopSection formData={formData} />
      <View style={styles.horizontalLine} />
      <View style={styles.section}>
        <CoursesAppliedForm formDetails={formData?.FormDetails ?? null} />
        <View style={styles.horizontalLine} />
      </View>
      <View style={styles.section}>
        <EmergencyInfoForm formDetails={formData?.FormDetails  ?? null} />
        <View style={styles.horizontalLine} />
      </View>
      <View style={styles.section}>
        <RefresherCoursesForm formDetails={formData?.FormDetails  ?? null} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f9f9f9',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  section: {
    marginBottom: 16,
  },
  horizontalLine: {
    height: 1,
    backgroundColor: '#ddd',
    marginVertical: 16,
  },
});

export default AdmissionForm;
