import { Alert, Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import styles from './styles';
import VectorIcon from '../../../utils/VectorIcon';
import { IconsType } from '../../../utils/constants';
import images from '../../../assets/images';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AuthStackParamList } from '../../../navigation/types';
import fonts from '../../../assets/fonts';

type NavigationProp = NativeStackNavigationProp<AuthStackParamList>;

const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
    const [secureTextEntry, setSecureTextEntry] = useState(true);
  const navigation = useNavigation<NavigationProp>();


    const handleLogin = () => {
        // Reset error
        setErrorMsg('');
    
        // Validation checks
        if (!email.trim() || !password.trim()) {
          setErrorMsg('Please enter both email and password.');
          return;
        }
    
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.trim())) {
          setErrorMsg('Please enter a valid email address.');
          return;
        }
    
        // Success action (e.g., API call)
        Alert.alert('Login Successful', `Welcome, ${email}!`);
      };
    const onSignupPress = () => {
        navigation.navigate('Signup')
    }
  return (
    <SafeAreaView style={styles.container}>
       <View style={styles.container}>
      <Text style={styles.welcome}>Welcome{'\n'}Back!</Text>

      <View style={styles.inputBox}>
        <VectorIcon
              type={IconsType.FontAwesome6}
              name={'user-large'}
              color={'#555'}
              size={20}
            />
        <TextInput placeholder="Username or Email" style={styles.input} onChangeText={val => setEmail(val)} />
      </View>

      <View style={styles.inputBox}>
        <VectorIcon
              type={IconsType.MaterialIcons}
              name={'lock'}
              color={'#555'}
              size={24}
            />
        <TextInput 
         placeholder="Password" 
         secureTextEntry={secureTextEntry} 
         style={styles.input} onChangeText={val => setPassword(val)} />
            <TouchableOpacity onPress={() => {
                setSecureTextEntry(!secureTextEntry)
            }}>
            <VectorIcon
              type={IconsType.Feather}
              name={secureTextEntry ? 'eye' : 'eye-off'}
              color={'#555'}
              size={20}
            />
            </TouchableOpacity>
        
      </View>

      {errorMsg !== '' && (
          <Text style={{ color: 'red', marginBottom: 20, fontFamily: fonts.montserratRegular }}>{errorMsg}</Text>
        )}

      <TouchableOpacity>
        <Text style={styles.forgot}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>

      <Text style={styles.orText}>- OR Continue with -</Text>

      <View style={styles.socialContainer}>
        <TouchableOpacity style={styles.socialCircle}>
          <Image source={images.auth.google}/>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.socialCircle, {marginHorizontal: 10}]}>
          <Image source={images.auth.apple}/>

        </TouchableOpacity>
        <TouchableOpacity style={styles.socialCircle}>
          <Image source={images.auth.facebook}/>
        </TouchableOpacity>
      </View>

<View style={styles.createAccountView}>

      <Text style={styles.signupText}>
        Create An Account
      </Text>
      <TouchableOpacity onPress={onSignupPress}><Text style={styles.signUp}>Sign Up</Text></TouchableOpacity>
</View>
    </View>

</SafeAreaView>
  )
}

export default LoginScreen;
