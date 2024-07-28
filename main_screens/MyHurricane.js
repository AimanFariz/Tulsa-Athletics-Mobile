import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import MyHurricaneHeader from '../components/Headers/MyHurricaneHeader'
import MyHurricaneScroll from '../components/Mains/MyHurricaneScroll'


export default function MyHurricane() {
  return (
    <>
        <MyHurricaneHeader/>
        <ScrollView><MyHurricaneScroll/></ScrollView>
    </>
  )
}
