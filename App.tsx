import React, {useEffect} from 'react';
import RootNavigator from './src/navigation/RootNavigator';
import BootSplash from 'react-native-bootsplash';
import {AuthProvider} from './src/context/AuthContext';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const App = () => {
  useEffect(() => {
    setTimeout(async () => {
      await BootSplash.hide({fade: true});
    }, 3000);
  }, []);
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Root" component={RootNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
