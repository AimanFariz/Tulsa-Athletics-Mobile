import React from 'react'
import { ScrollView, View } from 'react-native'

import DefaultHeader from '../components/Headers/DefaultHeader'
import HomeScroll from '../components/Mains/HomeScroll'

export default function Home() {
  return (
    <>
        <DefaultHeader/>
        <ScrollView style={{backgroundColor:'white'}}><HomeScroll/></ScrollView>
    </>
  )
}
