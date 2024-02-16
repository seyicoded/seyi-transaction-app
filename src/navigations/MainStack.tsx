import { View, Text, StyleSheet, Dimensions, Platform } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import SignIn from '../screens/guest/signin/Signin';
import ROUTE, { route } from '../constants/route/route';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { useDispatch, useSelector } from 'react-redux';
import { ActivityIndicator } from 'react-native-paper';
import { Color } from '../constants/color/color';
import Toast from 'react-native-toast-message'
import Onboarding from '../screens/guest/onboarding/Onboarding';

const screen = Dimensions.get("screen")


const Stack = createStackNavigator();
export default function MainStack() {
  const [preLoader, setPreLoader] = useState(true);
  const [defaultRoute, setDefaultRoute] = useState(route.ONBOARDING);
  const selector: any = useSelector(state => state)
  const selectorRef = useRef(selector)
  const dispatch = useDispatch()

  useEffect(()=>{
    // load something

    setPreLoader(false);
  }, [])

  if(preLoader){
    return (
      <View style={styles.loaderCover}>
        <ActivityIndicator color={Color.PRIMARY} />
      </View>
    )
  }

  // console.log('reachaa')

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      {
        ((selector.appLoading) && (
          <View style={styles.loader}>
            <ActivityIndicator color={Color.PRIMARY} />
          </View>
        ))
      }
      {
        ((selector.appLoadingCover) && (
          <View style={styles.loaderCover}>
            <ActivityIndicator color={Color.PRIMARY} />
            {/* <DoubleBounce size={24} color={Color.PRIMARY} /> */}
          </View>
        ))
      }


      <NavigationContainer>
        <Stack.Navigator initialRouteName={defaultRoute} screenOptions={{ headerShown: false, cardStyle: {backgroundColor: 'white'} }}>

          {/* guest route only */}
          <Stack.Screen name={route.ONBOARDING} component={Onboarding} />
          <Stack.Screen name={route.SIGNIN} component={SignIn} />
        </Stack.Navigator>
      </NavigationContainer>
      <Toast visibilityTime={4000} topOffset={60} />
    </View>
  )
}

const styles = StyleSheet.create({
  loader: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: getStatusBarHeight(true)+80,
    justifyContent: 'flex-end',
    alignItems: 'center',
    zIndex: 999
  },
  loaderCover: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: screen.height,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 999,
    backgroundColor: 'rgba(0, 0, 0, 0.1)'
  }
})