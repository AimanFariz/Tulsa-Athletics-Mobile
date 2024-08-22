import React from 'react'
import {ScrollView} from 'react-native'
import UpcomingFixturesCardHome from './UpcomingFixturesCardHome';
import UpcomingFixturesCardAway from './UpcomingFixturesCardAway';

export default function () {
  return(
    <ScrollView horizontal={true}>
      <UpcomingFixturesCardAway/>
      <UpcomingFixturesCardAway/>
      <UpcomingFixturesCardHome/>
    </ScrollView>
  )
}