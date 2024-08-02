import React,{useEffect} from 'react';
import { Text, View, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { NavigationProp } from '@/types/interfaces';
import { navigationOptions } from './navigationOptions';
import NavigationIcon from '@/assets/icons/profile-screen/Navigate.svg'; // Import navigation arrow icon
import ProfileImage from '@/assets/icons/profile-screen/Profile.svg'; // Import profile image

const Profile: React.FC<NavigationProp> = ({ navigate }) => {

 
  return (
    <View style={styles.container}>
      <View style={styles.profileHeader}>
        <ProfileImage width={100} height={100} style={styles.profileImage} />
        <Text style={styles.profileName}>John Doe</Text>
      </View>
      <View style={styles.navigationContainer}>
        <View style={styles.scrollContainer}>
          <ScrollView style={styles.scrollViewContainer} showsVerticalScrollIndicator={false}>
            {navigationOptions.map((item) => (
              <TouchableOpacity key={item.name} style={styles.optionContainer} onPress={() => navigate(item.name)}>
                <item.icon width={24} height={24} style={styles.icon} />
                <Text style={styles.optionText}>{item.displayName}</Text>
                <NavigationIcon width={24} height={24} style={styles.navigationIcon} />
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff'
  },
  profileHeader: {
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f0f0f0'
  },
  profileImage: {
    marginBottom: 8
  },
  profileName: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  scrollViewContainer: {
    width:300,
    height:470,
    borderRadius:30
  },
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    marginBottom: 8
  },
  navigationContainer :{
    backgroundColor: '#f0f0f0',
    alignItems:'center'
  },
  icon: {
    marginRight: 16,
  },
  optionText: {
    flex: 1,
    fontSize: 14,
  },
  navigationIcon: {
  },
  scrollContainer:{
    alignItems:'center',
    width:320,
    paddingVertical:10,
    overflow:'hidden',
    borderRadius:20,
    backgroundColor:'#ffffff'
  }
});

export default Profile;
