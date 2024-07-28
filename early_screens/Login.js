import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Image, StyleSheet, Pressable, Alert, Button } from 'react-native';
import Checkbox from 'expo-checkbox';
import { useNavigation } from '@react-navigation/native';
import { FIREBASE_AUTH } from '../Firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

function Login() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isChecked, setChecked] = useState(false);
  const [loading,setLoading] = useState(false)
  const [isLogin, setIsLogin] = useState(true)
  const auth = FIREBASE_AUTH
  

  const navigation = useNavigation();

  // const handleLogin = () => {
  //   if (username === 'admin' && password === '123') {
  //     navigation.replace('Tabs');
  //   } else {
  //     Alert.alert('Invalid credentials', 'Please enter the correct username and password');
  //   }
  // };
  const handleEmailSignIn = async()=>{
    setLoading(true)
    try{
      const response = await signInWithEmailAndPassword(auth,email,password)
      navigation.navigate('Tabs')
    }catch(error){
      console.log(error)
      alert('Registration failed for some reason: ' + error.message)
    }finally{
      setLoading(false)
    }
  }
  const handleEmailSignUp = async()=>{
    setLoading(true)
    try{
      const response = await createUserWithEmailAndPassword(auth,email,password)
      console.log(response)
      alert('Check your emails! You created an account!')
    }catch(error){
      console.log(error)
      alert('Registration failed for some reason: ' + error.message)
    }finally{
      setLoading(false)
    }
  }

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../assets/Tulsa Logos/New_Logo_2022/No BG/Tulsa_Flags_BluBG-removebg-preview.png')} />
      {/* Title and Inputs */}
      <View style={styles.signin}>
        <Text style={styles.title}>{isLogin?"Sign In":"Sign Up"}</Text>
        <TextInput
          style={styles.input}
          placeholder='Username or Email'
          placeholderTextColor={'#667085'}
          value={email}
          onChangeText={(text)=>setEmail(text)}
          autoCapitalize='none'
        />
        <TextInput
          style={styles.input}
          placeholder='Password'
          placeholderTextColor={'#667085'}
          secureTextEntry
          value={password}
          onChangeText={(katalaluan)=>setPassword(katalaluan)}
        />
        
        {/* checkbox Remember Me */}
        <View style={styles.checkboxContainer}>
          <Checkbox
            value={isChecked}
            onValueChange={setChecked}
            color={isChecked ? '#D0B787' : undefined}
          />
          <Text style={{ color: 'white' }}>Remember Me</Text>
        </View>
        {/* Sign In Button */}
{isLogin?
<Pressable
  style={[
    styles.button,
    (username.length > 0 || password.length > 0) && { backgroundColor: '#D0B787' }
  ]}
  onPress={handleEmailSignIn}
>
  <Text style={[styles.signInText,(username.length > 0 || password.length > 0) && { color: 'black' }]}>Sign In</Text>
</Pressable>:
<Pressable
  style={[
    styles.button,
    (username.length > 0 || password.length > 0) && { backgroundColor: '#D0B787' }
  ]}
  onPress={handleEmailSignUp}
>
  <Text style={[styles.signInText,(username.length > 0 || password.length > 0) && { color: 'black' }]}>Sign Up</Text>
</Pressable>}
        

      </View>
      {/* Forgot password and create account */}
      <Text style={{ color: 'white', marginTop: 5 }}>Forgot password?</Text>
      <Pressable onPress={()=>setIsLogin(state1=>!state1)}>
        <Text style={{ color: 'white', marginTop: 5 }}>{isLogin?"Don't have an account yet?":"Already have an account?"} <Text style={{textDecorationLine:'underline'}}>{isLogin?"Sign Up":"Sign In"}</Text> </Text>
      </Pressable>

      {/* Or line */}
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <View style={styles.line} />
        <View>
          <Text style={{ width: 50, textAlign: 'center', color: 'white', margin: 10 }}>or</Text>
        </View>
        <View style={styles.line} />
      </View>

      {/* Sign In Buttons */}
      <View style={{ flexDirection: 'column', alignItems: 'center', gap: 20 }}>
        {/* TU ID Sign In Button */}
        <Pressable style={styles.signInOptionButton}>
          <Image style={styles.signInLogo} source={require('../assets/Tulsa Logos/New_Logo_2022/No BG/TU-Bell.png')} />
          <Text>Sign in with TUID</Text>
        </Pressable>
        {/* Google Sign In Button */}
        <Pressable style={styles.signInOptionButton}>
          <Image style={styles.signInLogo} source={require('../assets/Tulsa Logos/New_Logo_2022/No BG/Google-Logo.png')} />
          <Text>Sign in with Google</Text>
        </Pressable>
        {/* FB Sign In */}
        <Pressable style={styles.signInOptionButton}>
          <Image style={styles.signInLogo} source={require('../assets/Tulsa Logos/New_Logo_2022/No BG/Meta-Symbol.png')} />
          <Text>Sign in with Meta</Text>
        </Pressable>
      </View>
    </View>
  );
}

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#003595',
    justifyContent: 'center',
    alignItems: 'center'
  },
  checkboxContainer: {
    flexDirection: 'row',
    gap: 10
  },
  logo: {
    width: 140,
    height: 120,
    bottom: 50
  },
  title: {
    fontSize: 20,
    color: 'white',
    fontFamily: 'Inter'
  },
  input: {
    height: 40,
    borderWidth: 1,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 8,
    width: 355
  },
  signin: {
    alignItems: 'flex-start',
    gap: 20
  },
  signInText: {
    color: '#D0B787'
  },
  signInLogo: {
    width: 24,
    height: 24,
    margin: 50
  },
  signInOptionButton: {
    flexDirection: 'row',
    backgroundColor: 'white',
    width: 355,
    alignItems: 'center',
    height: 44,
    borderRadius: 8
  },
  line: {
    flex: 0.4,
    height: 1,
    backgroundColor: 'white'
  },
  checkbox: {
    margin: 8
  },
  button: {
    height: 40,
    borderRadius: 8,
    padding: 10,
    width: 355,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#787878'
  }
});
