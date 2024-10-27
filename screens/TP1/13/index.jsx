import { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function TP1_13() {
    const [rotulo, setRotulo] = useState('')
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{rotulo}</Text>
            <View style={styles.buttonContainer}>
                <Button style={styles.button} title='Vermelho' color='red' onPress={() => setRotulo('Vermelho')} />
                <Button style={styles.button} title='Verde' color='green' onPress={() => setRotulo('Verde')} />
                <Button style={styles.button} title='Azul' color='blue' onPress={() => setRotulo('Azul')} />
            </View>
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
        alignItems: 'strech',
        justifyContent: 'center',
        width: '80%',
    },
    buttonContainer: {
        width: '100%',
        gap: 4
    },
    button: {
        borderRadius: 10
    }
});
