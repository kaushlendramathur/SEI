import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FormDetails } from '@/types/myCourses/formDetails';

interface RefresherCoursesFormProps { formDetails: FormDetails | null; }

const RefresherCoursesForm :React.FC<RefresherCoursesFormProps> = ({ formDetails }) => {
  return (
    <View style={styles.section}>
      <Text style={styles.heading}>Refresher Courses Information</Text>

      <Text style={styles.label}>8. Number of the Cert. which is being refreshed :</Text>
      <Text style={styles.value}>{formDetails?.NoofCert}</Text>

      <Text style={styles.label}>Issued by (name of the Institute) :</Text>
      <Text style={styles.value}>{formDetails?.IssuedBy}</Text>

      <Text style={styles.label}>INDoS No :</Text>
      <Text style={styles.value}>{formDetails?.IssuedINDosNo}</Text>

      <Text style={styles.heading}>Declaration</Text>
      <Text style={styles.value}>
        I hereby declare that the particulars furnished above are correct and true to the best of my knowledge and belief. I further indemnify the institute against the consequences resulting from my submission of false or untrue statements/documents.
      </Text>

      <Text style={styles.label}>Signature of the Applicant:</Text>
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

export default RefresherCoursesForm;
