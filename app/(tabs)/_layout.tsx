import { Tabs } from 'expo-router'
import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import icons from '../../constants/icons'

const TabIcon = ({
  icon,
  color,
  name,
  focused,
}: {
  icon: any
  color: string
  name: string
  focused: boolean
}) => {
  return (
    <View
      style={[
        styles.TabIconContainer,
        focused ? styles.Focused : styles.Normal,
      ]}
    >
      <Image
        source={icon}
        resizeMode='contain'
        tintColor={color}
        style={styles.TabIconImage}
      />
      <Text>{name}</Text>
    </View>
  )
}

const TabLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          tabBarStyle: {
            height: 80,
            borderRadius: 20,
          },
        }}
      >
        <Tabs.Screen
          name='home'
          options={{
            title: 'home',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.home}
                color={color}
                focused={focused}
                name='Home'
              />
            ),
          }}
        />
        <Tabs.Screen
          name='courses'
          options={{
            title: 'courses',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.courses}
                color={color}
                focused={focused}
                name='Courses'
              />
            ),
          }}
        />
        <Tabs.Screen
          name='myCourses'
          options={{
            title: 'myCourses',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.myCourses}
                color={color}
                focused={focused}
                name='My Course'
              />
            ),
          }}
        />
        <Tabs.Screen
          name='team'
          options={{
            title: 'team',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.team}
                color={color}
                focused={focused}
                name='Team'
              />
            ),
          }}
        />
        <Tabs.Screen
          name='profile'
          options={{
            title: 'profile',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.profile}
                color={color}
                focused={focused}
                name='Profile'
              />
            ),
          }}
        />
      </Tabs>
    </>
  )
}

const styles = StyleSheet.create({
  TabIconImage: {
    height: 20,
    width: 20,
  },
  TextBold: {
    fontWeight: 'bold',
  },
  Normal: {
    opacity: 100,
  },
  TabIconContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 2,
    borderRadius: 10,
    height: 50,
    width: 80,
    marginTop: 15,
  },
  Focused: {
    backgroundColor: '#e8ecfc',
  },
})

export default TabLayout
