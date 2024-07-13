import React, { useState } from 'react'
import { Text, View, ScrollView, StyleSheet} from 'react-native'
import { SelectList } from 'react-native-dropdown-select-list'
import Ionicons from '@expo/vector-icons/Ionicons';
import UpcomingFixturesCarousel from '../Specials/UpcomingFixturesCarouselBlue';
import NewsCard from '../Specials/NewsCard';

export default function HomeScroll() {

    const [selected, setSelected] = useState("");
    const sportsLists = [
        {key:'1', value:"Men's Soccer"},
        {key:'2', value:"Women's Soccer"},
        {key:'3', value:"Men's Basketball"},
        {key:'4', value:"Women's Basketball"},
        {key:'5', value:"Football"},
        {key:'6', value:"Men's Tennis"},
        {key:'7', value:"Women's Tennis"},
        {key:'8', value:"Golf"},
        {key:'9', value:"Rowing"},
        {key:'10', value:"Track and Field"},
    ]

  return (
    <ScrollView style={{padding:20}} >

        {/* Upcoming and Results --> do ternary operator, display based on Upcoming OR Results*/}
        <View>
            {/* Links */}
            <View style={{flexDirection:'row', gap:20}}>
                <Text style={{textDecorationLine:'underline'}}>Upcoming</Text>
                <Text>Results</Text>
            </View>

            {/*Sports Filter and Calendar */}
            <View style={{flex:1, flexDirection:'row', gap:20, alignItems:'flex-start', marginVertical:20}}>
                <View style={{maxWidth:150}}>
                    <SelectList data={sportsLists} search={false} setSelected={setSelected} placeholder='All Sports' maxHeight={200}/>

                </View>
                <View>
                <Ionicons style={styles.icons} size={30} name='calendar'></Ionicons>

                </View>
            </View>

            {/* Horizontal Scrollview --> Fixtures and Results */}
            <ScrollView horizontal={true}>
                <UpcomingFixturesCarousel/>
                <UpcomingFixturesCarousel/>
                <UpcomingFixturesCarousel/>
            </ScrollView>
        </View>
        {/* What's New section */}
        <View>
            {/* Title and Ze Icons */}
            <View style={{flexDirection:'row',borderWidth:1, borderColor:'red',justifyContent:'space-between'}}>
                {/* Title */}
                <View style={{borderWidth:1, borderColor:'red', padding:5,marginTop:5}}>
                    <Text style={{fontSize:18}}>What's New</Text>
                </View>
                {/* Icons , 3+1*/}
                <View style={{flexDirection:'row', gap:30, justifyContent:'flex-start',borderWidth:1, borderColor:'red'}}>
                    {/* 3 Icons - News format selector */}
                    <View style={{flexDirection:'row', gap:5}}>
                        <Ionicons style={styles.icons} size={20} name='calendar'></Ionicons>
                        <Ionicons style={styles.icons} size={20} name='calendar'></Ionicons>
                        <Ionicons style={styles.icons} size={20} name='calendar'></Ionicons>
                    </View>
                    {/* 1 icon - three dots - Filter */}
                        <Ionicons style={styles.icons} size={20} name='calendar'></Ionicons>
                </View>
            </View>
            {/* News Cards */}
            <View style={{flexDirection:'column'}}>
                <NewsCard/>
                <NewsCard/>
                <NewsCard/>
            </View>
        </View>

    </ScrollView>
  )
}


const styles = StyleSheet.create({
    icons:{
        color:'#003595',
        top:10
    },
})