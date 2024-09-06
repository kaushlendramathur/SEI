import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FormDetails } from '@/types/myCourses/formDetails';

interface CoursesAppliedFormProps { formDetails: FormDetails | null; }

const CoursesAppliedForm : React.FC<CoursesAppliedFormProps>= ({ formDetails }: any) => {
  if (!formDetails) {
    return (
      <View style={styles.section}>
        <Text style={styles.errorText}>Form details not available</Text>
      </View>
    );
  }

  return (
    <View style={styles.section}>
      <Text style={styles.heading}>Courses Applied for</Text>

      <Text style={styles.label}>1. Full Name* : (Block Letters)</Text>
      <View style={styles.inlineView}>
        <Text style={styles.labelInline}>Surname :</Text>
        <Text style={styles.valueInline}>{formDetails.Surname}</Text>
      </View>
      <View style={styles.inlineView}>
        <Text style={styles.labelInline}>Other Names :</Text>
        <Text style={styles.valueInline}>{formDetails.OtherNames}</Text>
      </View>

      <Text style={styles.label}>2. Rank / Designation :</Text>
      <Text style={styles.value}>{formDetails.RankDesignations}</Text>

      <Text style={styles.label}>3. InDoS No* :</Text>
      <Text style={styles.value}>{formDetails.InDoSNo}</Text>

      <Text style={styles.label}>4. Date of Birth :</Text>
      <Text style={styles.value}>{formDetails.DateofBirthshow}</Text>

      <Text style={styles.label}>5. Nationality :</Text>
      <Text style={styles.value}>{formDetails.Nationality}</Text>

      <Text style={styles.label}>6. Employer :</Text>
      <Text style={styles.value}>{formDetails.Employer}</Text>

      <Text style={styles.label}>7. Permanent Address :</Text>
      <Text style={styles.value}>{formDetails.PermanentAddress}</Text>

      <Text style={styles.label}>8. Present Address :</Text>
      <Text style={styles.value}>{formDetails.PresentAddress}</Text>

      <Text style={styles.label}>9. Email ID* :</Text>
      <Text style={styles.value}>{formDetails.Email}</Text>

      <Text style={styles.label}>10. Phone Number :</Text>
      <Text style={styles.value}>{formDetails.PhoneNumber}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    marginBottom: 24,
    paddingHorizontal: 16,  // Adding padding for better readability
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,  // Adding margin to separate the labels and values
  },
  value: {
    fontSize: 16,
    fontWeight: 'medium',
    marginBottom: 12, // Adding margin to separate sections
  },
  inlineView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8, // Adding spacing between inline items
  },
  labelInline: {
    fontSize: 16,
    fontWeight: 'semibold',
    width: '40%',
  },
  valueInline: {
    fontSize: 16,
    flex: 1,  // Allowing value to take the remaining space
  },
  errorText: {
    fontSize: 16,
    color: 'red',
  },
});

export default CoursesAppliedForm;
