import React, {useEffect} from 'react';
import RootNavigator from './src/navigation/RootNavigator';
import BootSplash from 'react-native-bootsplash';

const App = () => {
  useEffect(() => {
    setTimeout(async () => {
      await BootSplash.hide({fade: true});
    }, 3000);
  }, []);
  return (
  <RootNavigator />
  );
};

export default App;
