import React, { memo } from 'react';
import { FlatList, Image, ImageSourcePropType, StyleSheet, Text, View } from 'react-native';
import icons from '@/constants/icons';
import { Person } from '@/types/team/Person';

const extractName = (name: string): string => {
  const parts = name.split(/[,()]/);
  return parts[0].trim();
};

const DisplayPersonnel = memo(({ personnel, header }: { personnel: Person[]; header: string; }) => {
  const renderItem = ({ item }: { item: Person }) => (
    <View style={styles.personContainer}>
      <Image
        source={icons.user as ImageSourcePropType}
        style={styles.image}
      />
      <Text style={styles.name}>{extractName(item.Name)}</Text>
      <Text style={styles.position}>{item.Designation}</Text>
    </View>
  );

  return (
    <>
      <Text style={styles.header}>{header}</Text>
      <FlatList
        data={personnel}
        renderItem={renderItem}
        keyExtractor={(item) => item.Name} // Use a unique identifier for the key
        numColumns={2} // Adjust for grid layout
        columnWrapperStyle={styles.grid} // Apply grid styles
      />
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
    justifyContent: 'space-between',
    paddingHorizontal: 25,
  },
  personContainer: {
    width: '45%',
    alignItems: 'center',
    marginVertical: 10,
  },
  image: {
    width: 100, // Adjusted size for consistency
    height: 100, // Adjusted size for consistency
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
