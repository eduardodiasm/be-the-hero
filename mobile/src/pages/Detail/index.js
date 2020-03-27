import React from 'react'
import { Feather } from '@expo/vector-icons'
import { View, Text, Image, TouchableOpacity, Linking } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import  * as MailComposer from 'expo-mail-composer'

import styles from './styles'
import logoImage from '../../assets/logo.png'

export default function Details() {

    const navigation = useNavigation()
    const message = 'Hello, NGO. I am texting you, because I wanna help "little dog runned over" with $120'

    function navigateBack() {
        navigation.goBack()
    }

    function sendMail() {
        MailComposer.composeAsync({
            subject: 'Incident hero: Little dog runned over',
            recipients: ['eduardodiasprog@gmail.com'],
            body: message
        })
    }

    function sendWhatsApp() {
        Linking.openURL(`whatsapp://send?phone=555196438400&text=${message}`)
    }

    return(

        <View style={styles.container}>

            <View style={styles.header}>
                <Image source={logoImage} />
                <TouchableOpacity onPress={navigateBack}>
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

                    <TouchableOpacity style={styles.action} onPress={sendWhatsApp}>
                        <Text style={styles.actionText}>Whatsapp</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.action} onPress={sendMail}>
                        <Text style={styles.actionText}>Email</Text>
                    </TouchableOpacity>

                </View>

            </View>

        </View>

    )

}
