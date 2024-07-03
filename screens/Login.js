import React, { useState } from 'react'
import { View,Text,TextInput, Image, StyleSheet} from 'react-native';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../assets/Tulsa Logos/New_Logo_2022/No BG/Tulsa_Flags_BluBG-removebg-preview.png')}/>
      {/* Title and Inputs */}
      <View style={styles.signin}>
        <Text style={styles.title}>Sign In</Text>
        <TextInput style={styles.input} placeholder='Username or Email' placeholderTextColor={'#667085'}/>
        <TextInput style={styles.input} placeholder='Password' placeholderTextColor={'#667085'}/>
        {/* Insert checkbox using react native community component */}
      </View>
      


    </View>
  )
}

export default Login;

const styles = StyleSheet.create({
  container:{
    flex:1,
    width:'100%',
    backgroundColor:'#003595',
    justifyContent:'center',
    alignItems:'center'
  },
  logo:{
    width:100,
    height:100,
  },
  title:{
    fontSize:20,
    color:'white',
    fontFamily:'Inter'
  },
  input:{
    height: 40,
    borderWidth: 1,
    padding: 10,
    backgroundColor:'white',
    borderRadius:8,
    width:343
  },
  signin:{
    alignItems:'flex-start',
    gap:20
  }
})
