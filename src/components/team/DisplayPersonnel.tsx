import React, { memo } from 'react';
import { Image, ImageSourcePropType, StyleSheet, Text, View } from 'react-native';
import icons from '@/constants/icons';
import { Person } from '@/types/team/person';

const extractName = (name: string): string => {
  const parts = name.split(/[,()]/);
  return parts[0].trim();
};

const DisplayPersonnel = memo(({ personnel, header }: { personnel: Person[]; header: string; }) => {

  return (
    <>
      <Text style={styles.header}>{header}</Text>
      <View style={styles.grid}>
        {personnel.map((person, index) => (
          <View key={index} style={styles.personContainer}>
            <Image
              source={icons.user as ImageSourcePropType}
              style={styles.image}
            />
            <Text style={styles.name}>{extractName(person.Name)}</Text>
            <Text style={styles.position}>{person.Designation}</Text>
          </View>
        ))}
      </View>
    </>
  );
});

const styles = StyleSheet.create({
  header: {
    paddingLeft: 20,
    paddingVertical: 20,
    fontSize: 20,
    fontWeight: 'bold',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 25,
  },
  personContainer: {
    width: '45%',
    alignItems: 'center',
    marginVertical: 10,
  },
  image: {
    width: 200,
    height: 160,
    borderRadius: 50,
    marginBottom: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  position: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
  },
});

export default DisplayPersonnel;
