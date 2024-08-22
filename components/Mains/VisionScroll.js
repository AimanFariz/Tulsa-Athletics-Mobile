import React from 'react'
import { ScrollView, Text, View} from 'react-native'

export default function VisionScroll() {
  return (
    <ScrollView style={{backgroundColor:'#003595', height:'100%'}}>
        {/* Highlight event */}
        <View style={{height:250, width:'100%',backgroundColor:'blue', justifyContent:'flex-end'}}>
          <Text>April 1 2025, 6:30pm</Text>
        </View>
        {/* Media Gallery */}
        <View>
          {/* Trending Now */}
          <View>

          </View>
          {/* Live Schedule */}
          <View>

          </View>
          {/* Hurricane Originals */}
          <View>

          </View>
          {/* Hurricane Podcast */}
          <View>

          </View>
          {/* Interviews and Post Conferences */}
          <View>

          </View>
        </View>
    </ScrollView>
  )
}
