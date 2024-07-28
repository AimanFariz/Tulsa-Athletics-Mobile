import React from 'react'
import {ScrollView} from 'react-native'
import ResultsCard from './ResultsCard'

export default function ResultsCarousel() {
  return(
    <ScrollView horizontal={true}>
      <ResultsCard/>
      <ResultsCard/>
      <ResultsCard/>
    </ScrollView>
  )
}