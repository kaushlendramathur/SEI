import React, {useEffect} from 'react';
import { Image,Text, View, ScrollView, StyleSheet } from 'react-native';
import VerticalStages from '@/components/home/VerticalStages';
import About from '@/components/home/About';
import HeroSection from '@/components/home/HeroSection';
import LatestNew from '@/components/home/LatestNew';
import SectionA from '@/components/home/SectionA';
import SectionB from '@/components/home/SectionB';
import { useGetCourses } from '@/store/useGetCourses';

const Home = () => {
  const {execute} = useGetCourses();
  
  useEffect(() => {
    execute(["1", "2"]);
  }, []);
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <HeroSection/>
      <LatestNew/>
      <About />
      <VerticalStages />
      <SectionA/>
      <Image source={require("@/assets/images/home2.png")} style={styles.img}/>
      <SectionB/>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white'
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  img:{
    width:'100%'
  }
});

export default Home;
