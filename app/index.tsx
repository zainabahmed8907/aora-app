import { Link } from 'expo-router'
import React from 'react'
import { Text, View } from 'react-native'

const Home = () => {
  return (
    <View>
        <Text className="text-pblack text-3xl font-pblack text-secondary">
            Home screen
        </Text>
        <Link href="/profile">Go to profile</Link>
    </View>
  )
}

export default Home