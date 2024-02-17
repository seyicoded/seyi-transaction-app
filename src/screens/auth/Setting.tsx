import { View, Text, StyleSheet, StatusBar } from 'react-native'
import React from 'react'
import { Color } from '../../constants/color/color'

type Props = {}

const Setting = (props: Props) => {
  return (
    <View style={styles.container}>
        <StatusBar backgroundColor={Color.PRIMARY} />
        <Text>Setting</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20
    }
})

export default Setting