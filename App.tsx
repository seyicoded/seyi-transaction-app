import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
} from 'react-native';
import SplashScreen from './src/screens/splash/SplashScreen';
import {Provider as PaperProvider, ActivityIndicator, Text, DefaultTheme, MD3LightTheme, Card} from 'react-native-paper'
import { Provider as ReduxProvider } from "react-redux";
import { reduxStore } from './src/store/redux/store';
import MainStack from './src/navigations/MainStack';

function App(): React.JSX.Element {

  const [ showSplash, setShowSplash ] = useState(true)

  useEffect(()=>{
    setTimeout(()=>{
      setShowSplash(false)
    }, 5000)
  }, [])

  if(showSplash){
    return (<SplashScreen />)
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <PaperProvider theme={{ ...MD3LightTheme, dark: false }}>
      <ReduxProvider store={reduxStore}>
        <MainStack />
      </ReduxProvider>
      </PaperProvider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default App;
