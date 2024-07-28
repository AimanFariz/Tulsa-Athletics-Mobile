import React from 'react'
import { View, Text, ScrollView} from 'react-native'

import DefaultHeader from '../components/Headers/DefaultHeader'
import VisionScroll from '../components/Mains/VisionScroll'

export default function Vision() {
  return (
    <>
        <DefaultHeader/>
        <ScrollView><VisionScroll/></ScrollView>
    </>
  )
}
