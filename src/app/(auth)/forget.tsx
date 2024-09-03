import React from 'react'
import {
  Text,
  View,
  StyleSheet
} from 'react-native'
import { Link } from 'expo-router'

const forget = () => {
  return (
    <View style={{}}>
        <Text>This is upcoming feature</Text>
        <Link href={'/login'}>Go back to login page</Link>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default forget