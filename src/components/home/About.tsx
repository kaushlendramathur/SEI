import React, { useRef, useEffect, useState } from 'react';
import { StyleSheet, Text, View, Animated, FlatList, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const data = {
  title: '"Why SEI Education Trust Institute of Marine?"',
  description: 'For over 30 years, SEI Education Trust Institute of Marine has been a leader in marine education, offering hands-on, practical training designed to equip students with the skills they need for successful careers in the maritime industry.',
  experties: [
    {
      title: "Experienced Faculty",
      description: "Our instructors bring decades of industry experience, ensuring that you learn from the best",
    },
    {
      title: "State-of-the-Art Facilities",
      description: "Train with the latest technology and equipment in our fully equipped classrooms and labs",
    },
    {
      title: "Industry Connections",
      description: "Benefit from our strong partnerships with leading maritime companies, offering you opportunities for internships and job placements",
    },
  ],
};

const About = () => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const flatListRef = useRef<FlatList>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const nextIndex = (currentIndex + 1) % data.experties.length;
      animateScroll(nextIndex);
    }, 3000); // Scrolls every 3 seconds

    return () => clearInterval(intervalId);
  }, [currentIndex]);

  const animateScroll = (index: number) => {
    flatListRef.current?.scrollToOffset({ offset: index * width, animated: true });
    setCurrentIndex(index);
  };

  const onScroll = (event: any) => {
    const offsetX = event.nativeEvent.contentOffset.x;
    const index = Math.floor(offsetX / width) % data.experties.length;
    setCurrentIndex(index)
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{data.title}</Text>
      <Text style={styles.description}>{data.description}</Text>
      <Animated.FlatList
        ref={flatListRef}
        data={data.experties}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        
        scrollEventThrottle={16} // Ensures smooth scrolling event handling
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.cardTitle}>{item.title}</Text>
            <Text style={styles.cardDescription}>{item.description}</Text>
          </View>
        )}
      />
      {/* Point Indicator */}
      <View style={styles.indicatorContainer}>
        {data.experties.map((_, index) => (
          <View
            key={index}
            style={[
              styles.indicator,
              currentIndex === index ? styles.activeIndicator : styles.inactiveIndicator,
            ]}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    paddingVertical: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: '400',
    marginBottom: 20,
    paddingHorizontal: 25,
  },
  description: {
    fontSize: 16,
    fontWeight: '300',
    marginBottom: 20,
    textAlign: 'justify',
    paddingHorizontal: 25,
  },
  card: {
    width: width - 50, // Adjust the card width to fit within the screen with some padding
    borderRadius: 5,
    padding: 10,
    marginTop: 5,
    marginBottom: 20,
    marginRight: 25,
    marginLeft: 25,
    backgroundColor: '#fff',
    // Shadow for iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    // Shadow for Android
    elevation: 5,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '300',
    marginBottom: 10,
  },
  cardDescription: {
    fontSize: 14,
    fontWeight: '300',
  },
  indicatorContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  indicator: {
    height: 8,
    width: 8,
    borderRadius: 4,
    marginHorizontal: 4,
  },
  activeIndicator: {
    backgroundColor: '#007aff',
  },
  inactiveIndicator: {
    backgroundColor: '#d3d3d3',
  },
});

export default About;
