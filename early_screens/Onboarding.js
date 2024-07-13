import React, { useEffect, useRef, useState } from 'react';
import { View, Image, StyleSheet, Text, Animated } from 'react-native';

function Onboarding() {
  const [showText, setShowText] = useState(false);
  const imageTranslateY = useRef(new Animated.Value(0)).current;
  const textTranslateY = useRef(new Animated.Value(-100)).current; // Start from above the screen
  const textOpacity = useRef(new Animated.Value(0)).current; // Start with opacity 0

  useEffect(() => {
    // Display the image immediately, then delay the animations by 3 seconds
    const delayDuration = 1500; // 3 seconds

    setTimeout(() => {
      // Start the image animation
      Animated.timing(imageTranslateY, {
        toValue: -10,
        duration: 1000,
        useNativeDriver: true,
      }).start();

      // Show the text and start its animation at the same time
      setShowText(true);
      Animated.parallel([
        Animated.timing(textTranslateY, {
          toValue: 10, // Move to its original position
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(textOpacity, {
          toValue: 1, // Fade in the text
          duration: 1000,
          useNativeDriver: true,
        }),
      ]).start();
    }, delayDuration);
  }, [imageTranslateY, textTranslateY, textOpacity]);

  return (
    <View style={styles.container}>
      <Animated.View style={{ transform: [{ translateY: imageTranslateY }] }}>
        <Image
          style={styles.logoInitial}
          source={require('../assets/Tulsa Logos/New_Logo_2022/No BG/Tulsa_Flags_BluBG-removebg-preview.png')}
        />
      </Animated.View>
      {showText && (
        <Animated.View style={{ transform: [{ translateY: textTranslateY }], opacity: textOpacity, justifyContent:'center', alignItems:'center',gap:10}}>
          <Text style={styles.textHead}>Good evening, Aiman Fariz Zaqwan!</Text>
          <Text style={styles.textName}>Welcome back</Text>
        </Animated.View>
      )}
    </View>
  );
}

export default Onboarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#003595',
    width: '100%'
  },
  logoInitial: {
    width: 200,
    height: 200,
  },
  textHead: {
    marginTop: 20,
    fontSize: 18,
    textAlign: 'center',
    color: 'white',
    fontWeight:'bold'
  },
  textName:{
    fontSize:18,
    color:'white'
  },
  animatedContainer:{
    
  }
});
