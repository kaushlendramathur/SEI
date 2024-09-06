import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FormData } from '@/types/myCourses/formDetails';

interface TopSectionProps {
  formData: FormData | null;
}

const TopSection: React.FC<TopSectionProps> = ({ formData }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>SEI EDUCATIONAL TRUST, FARIDABAD</Text>

      <View style={styles.detailRow}>
        <Text style={styles.label}>FORM ID:</Text>
        <Text style={styles.value}>{formData?.ID}</Text>
      </View>

      <View style={styles.detailRow}>
        <Text style={styles.label}>FORM Status:</Text>
        <Text style={styles.value}>{formData?.Status}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#f9f9f9',
    marginBottom: 24,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  value: {
    fontSize: 16,
  },
});

export default TopSection;
