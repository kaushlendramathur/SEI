import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FormDetails } from '@/types/myCourses/formDetails';

interface EmergencyInfoFormProps { formDetails: FormDetails | null; }

const EmergencyInfoForm :React.FC<EmergencyInfoFormProps>= ({ formDetails }) => {
  return (
    <View style={styles.section}>
      <Text style={styles.heading}>We want you safe - Emergency Information</Text>

      <Text style={styles.label}>Blood Group :</Text>
      <Text style={styles.value}>{formDetails?.BloodGroup}</Text>

      <Text style={styles.label}>Whether allergic to any medication (Y/N) :</Text>
      <Text style={styles.value}>{formDetails?.Allergic ? 'Yes' : 'No'}</Text>

      <Text style={styles.label}>Next of Kin Name :</Text>
      <Text style={styles.value}>{formDetails?.Nextofkin}</Text>

      <Text style={styles.label}>Relation to Self :</Text>
      <Text style={styles.value}>{formDetails?.Relationtoself}</Text>

      <Text style={styles.label}>Telephone Contact Nos. in Emergency :</Text>
      <Text style={styles.value}>{formDetails?.EmergencyPhoneNumber}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    marginBottom: 24,
    paddingHorizontal: 16,  
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  value: {
    fontSize: 16,
    marginBottom: 8,
  },
});

export default EmergencyInfoForm;
