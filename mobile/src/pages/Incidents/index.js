import React from 'react'
import { View, Image, Text } from 'react-native'

import logoImage from '../../assets/logo.png'

import styles from './styles'

export default function Incidents() {

    return(

        <View style={styles.container}>

            <View style={styles.header}>
                <Image source={logoImage} />
                <Text style={styles.headerTexts}>
                    A total of <Text style={styles.headerTextBold}>0 incidents</Text>.
                </Text>
            </View>

            <Text style={styles.title}>
                Welcome!
            </Text>

            <Text style={styles.description}>
                Choose one of the incidents below to help and save the day of someone!
            </Text>

        </View>

    )

}
