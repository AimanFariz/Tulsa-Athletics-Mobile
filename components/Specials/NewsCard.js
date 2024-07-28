import React from 'react'
import { View,Text, StyleSheet, ImageBackground} from 'react-native'

export default function NewsCard() {
  return (
    <View style={styles.bigContainer}>
        <View style={styles.outerContainer}>
          {/* Upper Part */}
          <ImageBackground style={{height:270, flexDirection:'column',alignItems:'flex-start', justifyContent:'flex-end', padding:20, gap: 10}} source={require('../../assets/Tulsa Logos/New_Logo_2022/JPG/Tulsa_Script_BluBG.jpg')}>
              <Text style={styles.title}>The Most Amazing Breaking News</Text>
              <Text style={styles.subTitle}>MEN'S SOCCER / July 14, 2024</Text>
            </ImageBackground>
          {/* Lower Part */}
          <View style={{maxWidth:396, height:87, backgroundColor:'gray', flexDirection:'column',justifyContent:'flex-end', padding:10, gap: 10}}>
            <Text><Text style={{fontWeight:'bold'}}>Tulsa, Okla.</Text> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </Text>
            <View style={{flexDirection:'row', justifyContent:'space-between'}}>
              <Text>7h</Text>
              <Text>7h</Text>
              <Text>7h</Text>
            </View>
          </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  bigContainer:{
    width:'100%',
    flexDirection:'column',
    marginVertical:5,
  },
  outerContainer:{
        width:396,
        height:354,
        borderCurve:5,
        flexDirection:'column',

    },
    title:{
      color:'#FFFFFF',
      fontSize:19
    },
    subTitle:{
      fontSize:10,
      color:'#FFFFFF'
    }
})