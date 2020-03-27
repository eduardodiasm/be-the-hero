import React from 'react'
import { Feather } from '@expo/vector-icons'
import { View, Text, Image, TouchableOpacity } from 'react-native'

import styles from './styles'
import logoImage from '../../assets/logo.png'

export default function Details() {

    return(

        <View style={styles.container}>

            <View style={styles.header}>
                <Image source={logoImage} />
                <TouchableOpacity>
                    <Feather name="arrow-left" size={28} color="#E82041"/>
                </TouchableOpacity>
            </View>

            <View style={styles.incident}>

                <Text style={[styles.incidentProperty, { marginTop: 0 }]}>NGO:</Text>
                <Text style={styles.incidentValue}>APAD</Text>

                <Text style={styles.incidentProperty}>INCIDENT:</Text>
                <Text style={styles.incidentValue}>Little dog was run over by a car.</Text>

                <Text style={styles.incidentProperty}>VALUE:</Text>
                <Text style={styles.incidentValue}>$120</Text>

            </View>

            <View style={styles.contactBox}>
                <Text style={styles.heroTitle}>Save the day!</Text>
                <Text style={styles.heroTitle}>Be the hero behind this incident!</Text>

                <Text style={styles.heroDescription}>Get in touch!</Text>

                <View style={styles.actions}>

                    <TouchableOpacity style={styles.action} onPress={() => {}}>
                        <Text style={styles.actionText}>Whatsapp</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.action} onPress={() => {}}>
                        <Text style={styles.actionText}>Email</Text>
                    </TouchableOpacity>

                </View>

            </View>

        </View>

    )

}
