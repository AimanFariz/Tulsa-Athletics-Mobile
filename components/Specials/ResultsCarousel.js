import React from 'react'
import {ScrollView} from 'react-native'
import ResultsCardAway from './ResultsCardAway'
import ResultsCardHome from './ResultsCardHome'

export default function ResultsCarousel() {
  return(
    <ScrollView horizontal={true}>
      <ResultsCardHome/>
      <ResultsCardAway/>
      <ResultsCardHome/>
    </ScrollView>
  )
}