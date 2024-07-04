import React, { useState } from 'react'
import { View,Text,TextInput, Image, StyleSheet, Pressable} from 'react-native';
import Checkbox from 'expo-checkbox';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isChecked, setChecked] = useState(false);
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../assets/Tulsa Logos/New_Logo_2022/No BG/Tulsa_Flags_BluBG-removebg-preview.png')}/>
      {/* Title and Inputs */}
      <View style={styles.signin}>
        <Text style={styles.title}>Sign In</Text>
        <TextInput style={styles.input} placeholder='Username or Email' placeholderTextColor={'#667085'}/>
        <TextInput style={styles.input} placeholder='Password' placeholderTextColor={'#667085'}/>
        
        {/* checkbox Remember Me */}
        <View style={styles.checkboxContainer}>
        <Checkbox
          value={isChecked}
          onValueChange={setChecked}
          color={isChecked ? '#D0B787' : undefined}
        />
        <Text style={{color:'white'}}>Remember Me</Text>
        </View>
        {/* Sign In Button */}
      <Pressable style={styles.button}>
        <Text style={styles.signInText}>Sign In</Text>
      </Pressable>
      
      </View>
      {/* Forgot password and create account*/}
      <Text style={{color:'white',marginTop:5}}>Forgot password?</Text>
      <Text style={{color:'white',marginTop:5}}>Don't have an account yet? <Text>Register Now</Text> </Text>

      {/* Or line */}
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
      
        
        <View style={styles.line} />
        <View>
          <Text style={{width: 50, textAlign: 'center', color:'white', margin:10}}>or</Text>
        </View>
        <View style={styles.line} />
      </View>

      {/* Sign In Buttons */}
      <View style={{flexDirection: 'column', alignItems: 'center', gap:20}}>

        {/* TU ID Sign In Button */}
        <Pressable style={styles.signInOptionButton}>
          <Image style={styles.signInLogo} source={require('../assets/Tulsa Logos/New_Logo_2022/No BG/TU-Bell.png')}/>
          <Text>Sign in with TUID</Text>
        </Pressable>
        {/* Google Sign In Button */}
        <Pressable style={styles.signInOptionButton}>
          <Image style={styles.signInLogo} source={require('../assets/Tulsa Logos/New_Logo_2022/No BG/Google-Logo.png')}/>
          <Text>Sign in with Google</Text>
        </Pressable>
        {/* FB Sign In */}
        <Pressable style={styles.signInOptionButton}>
          <Image style={styles.signInLogo} source={require('../assets/Tulsa Logos/New_Logo_2022/No BG/Meta-Symbol.png')}/>
          <Text>Sign in with Meta</Text>
        </Pressable>
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
  checkboxContainer:{
    flexDirection:'row',
    gap:10
  },
  logo:{
    width:140,
    height:120,
    bottom:50
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
    width:355
  },
  signin:{
    alignItems:'flex-start',
    gap:20
  },
  signInText:{
    color:'#D0B787'
  },
  signInLogo:{
    width:24,
    height:24,
    margin:50
  },
  signInOptionButton:{flexDirection:'row', backgroundColor:'white', width:355, alignItems:'center', height:44, borderRadius:8},
  line:{
    flex: 0.4,
    height: 1,
    backgroundColor: 'white'
  },
  checkbox: {
    margin: 8,
  },
  button:{
    height: 40,
    borderRadius:8,
    padding: 10,
    width:355,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#787878',
  }
})
