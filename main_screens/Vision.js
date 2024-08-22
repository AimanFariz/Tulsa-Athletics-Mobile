import React from 'react'
import { View, Text, ScrollView} from 'react-native'

import VisionScroll from '../components/Mains/VisionScroll'
import VisionHeader from '../components/Headers/VisionHeader'

export default function Vision() {
  return (
    <>
        <VisionHeader/>
        <ScrollView>
          <VisionScroll/>
        </ScrollView>
    </>
  )
}
