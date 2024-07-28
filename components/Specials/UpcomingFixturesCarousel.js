import React from 'react'
import {ScrollView} from 'react-native'
import UpcomingFixturesCard from './UpcomingFixturesCard';

export default function () {
  return(
    <ScrollView horizontal={true}>
      <UpcomingFixturesCard/>
      <UpcomingFixturesCard/>
      <UpcomingFixturesCard/>
    </ScrollView>
  )
}