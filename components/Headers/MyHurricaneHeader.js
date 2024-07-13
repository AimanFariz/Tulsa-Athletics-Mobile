import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';


function MyHurricaneHeader() {
  return (
    <View style={styles.headerOutRect}>
      <View style={styles.headerInRect}>
        
        {/* Hamburger Menu and Calendar Icons */}
        <View style={styles.headerInRectSmall}>
          <Ionicons style={styles.icons} size={30} name='mail-outline'></Ionicons>
        </View>
        <Text style={{color:'white'}}>MY HURRICANE</Text>
        {/* Search and Players Icons */}
        <View style={styles.headerInRectSmall}>
          <Ionicons style={styles.icons} size={30} name='settings-outline'></Ionicons>
        </View>
      </View>
    </View>
  )
}

export default MyHurricaneHeader;

const styles = StyleSheet.create({
  headerOutRect:{
    width:'100%',
    maxHeight:110,
    height:'100%',
    backgroundColor:'#003595',
    justifyContent:'flex-end',
    alignItems:'center',
  },
  headerInRect:{
    justifyContent:'space-between',
    alignItems:'center',
    flexDirection:'row',
    width: 430,
    paddingHorizontal:30
  },
  headerInRectSmall:{
    flexDirection:'row',
    gap:10,
    alignItems:'flex-end',
    justifyContent:'center'
  },
  icons:{
    color:'white'
  },
  logo:{
    width:60,
    height:50,
  },
  headerText:{
    color:'white'
  }
})