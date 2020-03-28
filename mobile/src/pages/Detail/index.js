import React from 'react'
import { Feather } from '@expo/vector-icons'
import { View, Text, Image, TouchableOpacity, Linking } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import  * as MailComposer from 'expo-mail-composer'

import styles from './styles'
import logoImage from '../../assets/logo.png'

export default function Details() {

    const navigation = useNavigation()

    const route = useRoute()

    const incident = route.params.incident

    const message = `Hello, ${incident.name}. I am texting you, because I wanna help  with "${incident.title}" with the value of ${Intl.NumberFormat('en-US',{ style: 'currency', currency: 'USD' }).format(incident.value)}`

    function navigateBack() {
        navigation.goBack()
    }

    function sendMail() {
        MailComposer.composeAsync({
            subject: `Hero of the case: ${incident.title}.`,
            recipients: [incident.email],
            body: message
        })
    }

    function sendWhatsApp() {
        Linking.openURL(`whatsapp://send?phone=${incident.whatsapp}&text=${message}`)
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

                <Text style={styles.incidentProperty, {marginTop: 0}}>NGO:</Text>
                <Text style={styles.incidentValue}>{incident.name} from {incident.city} ({incident.state})</Text>

                <Text style={styles.incidentProperty}>INCIDENT:</Text>
                <Text style={styles.incidentValue}>{incident.title}</Text>

                <Text style={styles.incidentProperty}>VALUE:</Text>
                <Text style={styles.incidentValue}>
                {Intl.NumberFormat('en-US',
                { style: 'currency', currency: 'USD' }
                ).format(incident.value)}</Text>

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
