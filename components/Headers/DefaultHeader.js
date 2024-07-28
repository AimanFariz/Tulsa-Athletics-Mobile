import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

function DefaultHeader() {
  return (
    <View style={styles.headerOutRect}>
      <View style={styles.headerInRect}>
        
        {/* Hamburger Menu and Calendar Icons */}
        <View style={styles.headerInRectSmall}>
          <Ionicons style={styles.icons} size={30} name='menu'></Ionicons>
          <Ionicons style={styles.icons} size={30} name='calendar'></Ionicons>
        </View>
        <Image style={styles.logo} source={require('../../assets/Tulsa Logos/New_Logo_2022/No BG/Tulsa_Flags_BluBG-removebg-preview.png')}/>
        {/* Search and Players Icons */}
        <View style={styles.headerInRectSmall}>
          <Ionicons style={styles.icons} size={30} name='search'></Ionicons>
          <Ionicons style={styles.icons} size={30} name='people'></Ionicons>
        </View>
      </View>
    </View>
  )
}

export default DefaultHeader;

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