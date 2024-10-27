import { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';


export default function TP1_05() {
    const [counter, setCounter] = useState(0)



    const handleIncrement = () => {
        setCounter((prev) => prev + 1)
    }
    const handleDecrement = () => {
        setCounter((prev) => prev === 0 ? 0 : prev - 1)
    }

    return (
        <View style={styles.container}>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button}  onPress={handleDecrement}>
                    <Text style={styles.buttonText}>-</Text>
                </TouchableOpacity>
                <Text style={styles.text}>{counter}</Text>
                <TouchableOpacity style={styles.button}  onPress={handleIncrement}>
                    <Text style={styles.buttonText}>+</Text>
                </TouchableOpacity>

                
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 25
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'strech',
        justifyContent: 'center',
        width: '80%',
        marginHorizontal: 'auto'
    },
    buttonContainer: {
        width: '100%',
        gap: 16,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        borderRadius: 5,
        backgroundColor: '#386bf3',
        padding: 5,
        width: 50,
        height: 50,
        flex: 0,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        fontWeight: 'bold',
        fontSize: 24,
        color: '#fff',
        textAlign: 'center'
    }
});
