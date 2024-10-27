import { useState } from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';

export default function Card({ filme }) {
    return (
        <View style={styles.card}>
            <Text style={styles.titulo}>{filme.titulo}</Text>
            <Image source={{ uri: filme.uri }} style={styles.imagem}/>
            <Text style={styles.cartaz}>{filme.cartaz}</Text>
            <Text style={styles.horario}>{filme.horario}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        flex: 0,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        marginTop: 5,
        width: '100%',
        padding: 10,
        borderRadius: 10,
        borderWidth: 0.5,
        backgroundColor: '#f1f1f1',
        borderColor: '#5d5d5d',
        shadowColor: '#5d5d5d',
        shadowOpacity: 0.3,
        shadowRadius: 10,
        elevation: 3, 
    },
    titulo: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 25,
        marginBottom: 16,
        textAlign: 'center'
    },
    cartaz: {
        textAlign: 'right',
        fontSize: 16
    },
    horario: {
        textAlign: 'right',
        fontSize: 16
    },
    imagem: {
        width: '100%',
        height: 250,
        resizeMode: 'cover',
        marginBottom: 20,
    }
});
