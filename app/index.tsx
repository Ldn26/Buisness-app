import { View, Text } from 'react-native'
import React from 'react'
import { Redirect } from 'expo-router'

const Home = () => {
  return (
   <Redirect  href={'/home'}/>   
  )
}

export default Home