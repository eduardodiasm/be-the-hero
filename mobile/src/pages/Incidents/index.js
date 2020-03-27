import React from 'react'
import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons'

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

            <Text style={styles.title}>Welcome!</Text>
            <Text style={styles.description}>Choose one of the incidents below to help, and save the day of someone!</Text>


            <FlatList 
            showsVerticalScrollIndicator={false}
            style={styles.incidentsList}
            data={[1,2,3,4,5]}
            keyExtractor={incident => String(incident)}
            renderItem={() => (
                <View style={styles.incident}>

                    <Text style={styles.incidentProperty}>NGO:</Text>
                    <Text style={styles.incidentValue}>APAD</Text>

                    <Text style={styles.incidentProperty}>INCIDENT:</Text>
                    <Text style={styles.incidentValue}>Little dog was run over by a car.</Text>

                    <Text style={styles.incidentProperty}>VALUE:</Text>
                    <Text style={styles.incidentValue}>$120</Text>

                    <TouchableOpacity 
                    style={styles.detailsButton}
                    onPress={() => {}}>
                        <Text style={styles.detailsButtonText}>See details</Text>
                        <Feather name="arrow-right" size={16} color="#E02041" />
                    </TouchableOpacity>

                </View>

            )}
            />

        </View>

    )

}
