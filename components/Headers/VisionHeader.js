import React from 'react'
import { View, Text, StyleSheet, Image, TextInput, Animated, TouchableOpacity} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useState, useRef } from 'react';
function VisionHeader() {
  const [showSearchBar, setShowSearchBar] = useState(false);
  const searchBarWidth = useRef(new Animated.Value(0)).current; // Initialize width animation
  const iconPosition = useRef(new Animated.Value(0)).current; // Initialize icon position animation

  const toggleSearchBar = () => {
    setShowSearchBar(!showSearchBar);
    Animated.parallel([
      // Animate search bar width
      Animated.timing(searchBarWidth, {
        toValue: showSearchBar ? 0 : 150, // Adjust the width as needed
        duration: 500,
        useNativeDriver: false,
      }),
      // Animate icon position
      Animated.timing(iconPosition, {
        toValue: showSearchBar ? 0 : 10, // Adjust the position as needed
        duration: 500,
        useNativeDriver: false,
      }),
    ]).start();
  };

  return (
    <View style={styles.headerOutRect}>
      <View style={styles.headerInRect}>
        
        {/* Hamburger Menu and Calendar Icons */}
        <View style={styles.headerInRectSmall}>
          <Ionicons style={styles.icons} size={30} name='menu'></Ionicons>
        </View>
        <View style={{flexDirection:'row', alignItems:'center'}}>
        <Image style={styles.logo} source={require('../../assets/Tulsa Logos/New_Logo_2022/No BG/Tulsa_Flags_BluBG-removebg-preview.png')}/>
        <Text style={{color:'#D0B787', fontFamily:'electrolize'}}>VISION</Text>
        </View>
        
        {/* Search and Players Icons */}
        <View style={styles.headerInRectSmall}>
          {/* <Ionicons style={styles.icons} size={30} name='search'></Ionicons> */}
          {/* Animated Search Bar */}
      <Animated.View style={[styles.searchBarContainer, { width: searchBarWidth }]}>
        <TextInput 
          style={styles.searchBar} 
          placeholder="Search..." 
        />
      </Animated.View>

      {/* Animated Search Icon */}
      <TouchableOpacity onPress={toggleSearchBar}>
        <Animated.View style={{ transform: [{ translateX: iconPosition }] }}>
          <Ionicons 
            name="search" 
            size={24} 
            color="white" 
          />
        </Animated.View>
      </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default VisionHeader;

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
  },
  searchBar: {
    flex: 1,
    marginLeft: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingLeft: 10,
    height: 40,
    color:'white'
  },
  searchBarContainer: {
    height: 40,
    overflow: 'hidden',
  },
})