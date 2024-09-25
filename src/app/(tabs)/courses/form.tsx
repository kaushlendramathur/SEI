import React, {useEffect, useState} from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native'
import MyWebView from '@/components/MyWebView'
import { getToken } from '@/utils/authStore'
import { apiBaseURL } from '@/constants/url'

const form = () => {
  const [token, setToken] = useState('')
  const fetchToken = async () => {
    const token = await getToken()
    if(token) {
      setToken(token)
    }
  }
  useEffect(() => {
    fetchToken()
  }, [])
  return (
    <View>
        <MyWebView 
           uri={`${apiBaseURL}/Home/FormFillUpMobile?id=${token}`}
        />
    </View>
  )
}

export default form