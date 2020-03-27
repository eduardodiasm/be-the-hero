import React, { useState, useEffect} from 'react'
import { useNavigation } from '@react-navigation/native'
import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons'

import logoImage from '../../assets/logo.png'

import styles from './styles'
import api from '../../services/api'

export default function Incidents() {

    const [incidents, setIncidents] = useState([])

    const navigation = useNavigation()

    function navigateToDetail() {
        navigation.navigate('Detail')
    }

    async function loadIncidents() {
        const response = await api.get('incidents')

        setIncidents(response.data)

    }

    useEffect(() => {
        loadIncidents()
    }, [])

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
            data={incidents}
            showsVerticalScrollIndicator={false}
            style={styles.incidentsList}
            keyExtractor={incident => String(incident.id)}
            renderItem={({ item: incident }) => (
                <View style={styles.incident}>

                    <Text style={styles.incidentProperty}>NGO:</Text>
                    <Text style={styles.incidentValue}>{incident.name}</Text>

                    <Text style={styles.incidentProperty}>INCIDENT:</Text>
                    <Text style={styles.incidentValue}>{incident.title}</Text>

                    <Text style={styles.incidentProperty}>VALUE:</Text>
                    <Text style={styles.incidentValue}>
                    {Intl.NumberFormat('en-US',
                    { style: 'currency', currency: 'USD' }
                    ).format(incident.value)}</Text>

                    <TouchableOpacity 
                    style={styles.detailsButton}
                    onPress={navigateToDetail}>
                        <Text style={styles.detailsButtonText}>See details</Text>
                        <Feather name="arrow-right" size={16} color="#E02041" />
                    </TouchableOpacity>

                </View>

            )}
            />

        </View>

    )

}
