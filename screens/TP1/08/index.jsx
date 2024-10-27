import { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import Card from './card';

export default function TP1_08() {

    const filme = {
        titulo: 'A FORJA - O PODER DA TRANSFORMAÇÃO',
        uri: 'https://istoe.com.br/istoegeral/wp-content/uploads/2024/10/207271281-40c6ff1732fdd07759a71d63ccd47791.webp',
        horario: '22:30',
        cartaz: 'Cinema Independência Shopping'
    }
    return (
        <View style={styles.container}>
            <Card filme={filme} />
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 25,
        marginBottom: 16
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '80%',
        marginHorizontal: 'auto',
        alignContent: 'flex-start'
    },
    buttonContainer: {
        width: '100%',
        gap: 4
    },
    button: {
        borderRadius: 10
    }
});
