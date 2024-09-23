import React from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native'
import MyWebView from '@/components/MyWebView'

const form = () => {
  return (
    <View>
        <MyWebView 
         uri='https://www.seiedutrust.com/Home/FormFillUpMobile?id=3a830d8c-82a2-4805-ba8e-47f8243e3de0'
        />
    </View>
  )
}

export default form