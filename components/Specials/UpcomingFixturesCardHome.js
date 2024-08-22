import React from 'react'
import { View, StyleSheet, Text, Image, Pressable} from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';

export default function UpcomingFixturesCardHome() {
  return (
    <View style={styles.outerContainer}>
        <View style={styles.innerContainer}>
          {/* Kiri */}
          <View style={{gap:5}}>
            {/* Top Texts */}
            <View>
              <Text style={styles.textSports}>Sport's Name</Text>
              <Text style={styles.textDate}>Sat 16 Mar</Text>
              <Text style={styles.textVenue}>AAC Championship</Text>
            </View>
            

            {/* Logo and Nama Pasukan */}
            <View style={{flexDirection:'column'}}>
              {/* Team 1 */}
              <View style={{flexDirection:'row', alignItems:'center'}}>
                <Image style={styles.logo} source={require('../../assets/Tulsa Logos/New_Logo_2022/No BG/Tulsa_Flags_WhtBG-removebg-preview.png')}/>
                <Text style={{marginLeft:20, fontSize:12}}>Tulsa</Text>
              </View>

              {/* Team 2 */}
              <View style={{flexDirection:'row', alignItems:'center'}}>
                <Image style={styles.logo} source={require('../../assets/Tulsa Logos/New_Logo_2022/No BG/Tulsa_Flags_WhtBG-removebg-preview.png')}/>
                <Text style={{marginLeft:20, fontSize:12}}>Tulsa</Text>
              </View>
            </View>

          </View>
          {/* Line tgh */}
          <View style={{borderWidth:1,borderColor:'#9D9D9D'}}></View>
          {/* Kanan */}
          <View style={{flexDirection:'column', justifyContent:'space-between'}}>
            {/* Time, Timezone*/}
            <View>
              <View style={{flexDirection:'row', gap:5}}>
                <Text style={{fontWeight:'bold', fontSize:10}}>14:00</Text>
                <Text style={styles.text}>CST</Text>
              </View>
              <View>
                <Text style={styles.text}>Reynolds Center</Text>
              </View>
            </View>
            

            {/* Reminder and Livestream Icons */}
            <View style={{flexDirection:'column'}}>
              <Ionicons size={15} name='calendar'></Ionicons>
              <Pressable style = {{padding:10, backgroundColor:'white', borderRadius:5, borderWidth:1, borderColor:'#A8A7A7'}}>
                <Text style={{fontSize:10}}>Set Reminder</Text>
              </Pressable>
            </View>
          </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    outerContainer:{
        borderRadius:5,
        backgroundColor:'#003595',
        width:320,
        height:112,
        marginRight:5
    },
    innerContainer:{
        backgroundColor:'white',
        width:310,
        height:108,
        left:8,
        top:2,
        borderRadius:5,
        flexDirection:'row',
        justifyContent:'space-around',
        paddingVertical:7
    },
    logo:{
      width:25,
      height:25,
    },
    textDate:{
      fontSize:10,
      fontWeight:'bold'
    },
    textVenue:{
      fontSize:10,
      fontWeight:'400'
    },
    textSports:{
      fontSize:10,
      fontWeight:'200'
    }
})