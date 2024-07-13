import React from 'react'
import { View } from 'react-native'

import DefaultHeader from '../components/Headers/DefaultHeader'
import MainScroll from '../components/Mains/HomeScroll'

export default function Home() {
  return (
    <View>
        <DefaultHeader/>
        <MainScroll/>
    </View>
  )
}
