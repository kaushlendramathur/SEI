import React, { useState } from 'react';
import { View, Pressable, Text, StyleSheet } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronDown, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Spoiler = ({
  description,
  label,
}: {
  description: string[];
  label: string;
}) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  return (
    <View style={styles.spoilerContainer}>
      <Pressable
        style={styles.spoiler}
        onPress={() => {
          setIsVisible((prev) => !prev);
        }}
      >
        <FontAwesomeIcon
          icon={isVisible ? faChevronDown : faChevronRight}
          style={styles.chevronIcon}
        />
        <Text style={styles.font16}>{label}</Text>
      </Pressable>
      <View style={styles.elementContainer}>
        {isVisible &&
           <View >
            <Text style={styles.bulletPoint}>{description[0]} </Text>  
            </View>
          }
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  spoiler: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  chevronIcon: {
    marginRight: 10,
  },
  spoilerContainer: {
    paddingVertical: 3,
  },
  font16: {
    fontSize: 16,
  },
  elementContainer: {
    paddingVertical: 2,
    paddingHorizontal: 25,
  },
  bulletPoint: {
    fontSize: 16,
    paddingVertical: 2, // Optional: add some vertical spacing
  },
});

export default Spoiler;
