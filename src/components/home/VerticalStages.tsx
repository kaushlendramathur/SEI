import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const VerticalStages = () => {
  const stages = [
    { title: 'Explore our Course', description: `"Browse our extensive list of marine courses and choose the one that best fits your career goals."` },
    { title: 'Register Online or Visit Our Campus', description: `"Complete the registration process through our app or visit us in person to secure your place."` },
    { title: 'Make a Payment', description: `"Choose from a variety of payment options to complete your enrollment."` },
    { title: 'Begin Your Journey', description: `"Attend your first class and start your path toward a rewarding maritime career."` },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>"How to Get Started"</Text>
      <View style={styles.lineContainer}>
        <View style={styles.fullLine} />
        {stages.map((stage, index) => (
          <View
            key={index}
            style={[
              styles.stageContainer,
              index === 0 && { marginTop: 0 }, // Small top margin for the first point
              index === stages.length - 1 && { marginBottom: 0 }, // Small bottom margin for the last point
            ]}
          >
            <View style={styles.pointContainer}>
              <View style={styles.point} />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.pointTitle}>{stage.title}</Text>
              <Text style={styles.description}>{stage.description}</Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  lineContainer: {
    position: 'relative',
    alignItems: 'flex-start',
  },
  fullLine: {
    position: 'absolute',
    left: 14, // Adjust to center the line under the points
    top: 0,
    bottom: 0,
    width: 2,
    backgroundColor: 'black',
  },
  stageContainer: {
    flexDirection: 'row',
    alignItems: 'center', // Center the point vertically with the text
    marginBottom: 20, // Default space between stages
  },
  pointContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 30, // Adjust width to give space for the point
    marginRight:5
  },
  point: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'black',
  },
  textContainer: {
    flex: 1,
  },
  pointTitle: {
    fontSize: 18,
    fontWeight: '300',
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: '#555',
  },
  title: {
    fontSize: 20,
    fontWeight: '400',
    marginBottom: 20
  }
});

export default VerticalStages;
