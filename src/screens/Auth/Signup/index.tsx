import { Alert, Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import styles from './styles';
import VectorIcon from '../../../utils/VectorIcon';
import { IconsType } from '../../../utils/constants';
import images from '../../../assets/images';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { AuthStackParamList } from '../../../navigation/types';
import { register } from '../../../api/auth';
type NavigationProp = NativeStackNavigationProp<AuthStackParamList>;

const SignupScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [errorMsg, setErrorMsg] = useState('');
    const [secureTextEntry, setSecureTextEntry] = useState(true);
    const [secureTextEntryConfirm, setSecureTextEntryConfirm] = useState(true);
    const navigation = useNavigation<NavigationProp>();

    const checkValidation = () => {
        // Reset error
        setErrorMsg('');
      
        // Basic empty checks
        if (!email.trim() || !password.trim() || !confirmPassword.trim()) {
          setErrorMsg('All fields are required.');
          return;
        }
      
        // Email format validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.trim())) {
          setErrorMsg('Please enter a valid email address.');
          return;
        }
      
        // Password length
        if (password.length < 6) {
          setErrorMsg('Password must be at least 6 characters long.');
          return;
        }
      
        // Password match
        if (password !== confirmPassword) {
          setErrorMsg('Passwords do not match.');
          return;
        }
      
        // If all checks pass
        setErrorMsg('');
        // proceed with registration API
      };
      

    const handleLogin = async () => {

        checkValidation();
        const params = {
            email,
            password,
            confirmPassword
        }
        const res = await register(params);
        console.log('result', res)

    
        // Success action (e.g., API call)
        Alert.alert('Login Successful', `Welcome, ${email}!`);
      };

      const onSignupPress = () => {
        navigation.navigate('Login')
    }
    
  return (
    <SafeAreaView style={styles.container}>
       <View style={styles.container}>
      <Text style={styles.welcome}>Create an {"\n"}account</Text>

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
         value={password}
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

      <View style={styles.inputBox}>
        <VectorIcon
              type={IconsType.MaterialIcons}
              name={'lock'}
              color={'#555'}
              size={24}
            />
        <TextInput 
         placeholder="Confirm Password" 
         value={confirmPassword}
         secureTextEntry={secureTextEntryConfirm} 
         style={styles.input} onChangeText={val => setConfirmPassword(val)} />
            <TouchableOpacity onPress={() => {
                setSecureTextEntryConfirm(!secureTextEntryConfirm)
            }}>
            <VectorIcon
              type={IconsType.Feather}
              name={secureTextEntryConfirm ? 'eye' : 'eye-off'}
              color={'#555'}
              size={20}
            />
            </TouchableOpacity>
        
      </View>

      {errorMsg !== '' && (
          <Text style={{ color: 'red', marginBottom: 10 }}>{errorMsg}</Text>
        )}

     <View>
        <Text style={styles.signupTextDescription}>By clicking the Register button, you agree to the public offer</Text>
        </View>

      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginText}>Create Account</Text>
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
      I Already Have an Account
      </Text>
      <TouchableOpacity onPress={onSignupPress}><Text style={styles.signUp}>Login</Text></TouchableOpacity>
</View>
    </View>

</SafeAreaView>
  )
}

export default SignupScreen;
