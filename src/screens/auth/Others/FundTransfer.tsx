import { View, Text, StatusBar, StyleSheet } from 'react-native'
import React from 'react'
import { Color } from '../../../constants/color/color'
import Header from '../../../components/headers/Header'

type Props = {}

const FundTransfer = (props: Props) => {
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={"white"} barStyle={'dark-content'} />
            <Header title='Fund Transfer' />
            <Text>FundTransfer</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: 20
    }
})

export default FundTransfer