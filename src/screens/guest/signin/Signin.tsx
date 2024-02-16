import { View, StyleSheet, SafeAreaView } from 'react-native'
import React from 'react'
import { Color } from '../../../constants/color/color'
import { Button, Text, TextInput } from 'react-native-paper'

type Props = {}

const Signin = (props: Props) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{ color: Color.TEXT_P1, fontWeight: '600' }} variant='headlineMedium'>Welcome To Seyi-TFX</Text>
      <Text style={{ marginVertical: 16 }} variant='labelLarge'>Complete the sign in by providing your information</Text>

      <TextInput style={{ backgroundColor: 'white' }} theme={{ colors: {primary: Color.PRIMARY_LIGHT} }} mode='outlined' placeholder='Name' label={"Email"} />
      <Text>{'\n'}</Text>
      <TextInput style={{ backgroundColor: 'white' }} theme={{ colors: {primary: Color.PRIMARY_LIGHT} }} mode='outlined' placeholder='Name' label={"Password"} />
      <Text>{'\n'}</Text>
      <Button mode='contained' theme={{ colors: {primary: Color.PRIMARY_LIGHT} }}>Login</Button>
      
      <Text>{'\n'}</Text>
      <Text style={{ textAlign: 'center' }}>OR</Text>
      <Text>{'\n'}</Text>

    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        paddingTop: 50
    },
})


export default Signin