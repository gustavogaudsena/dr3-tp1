import { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';

export default function TP1_10() {
    const [number, setNumber] = useState()
    const [isPrime, setIsPrime] = useState()

    const checkPrimeNumber = (number) => {
        if (number <= 1) return false

        const half = Math.floor(number / 2)
        for (let i = 2; i <= half; i++) {
            const isDivisible = number % i === 0;
            if (isDivisible) return false;
        }
        return true;
    }

    useEffect(() => {
        const isNumberPrime = checkPrimeNumber(number);
        setIsPrime(!!isNumberPrime)
    }, [number])
    return (
        <View style={styles.container}>
            <View style={styles.containerFormulario}>
                <Text style={styles.text}>Insira um número</Text>
                <TextInput
                    placeholder='Número'
                    keyboardType='decimal-pad'
                    onChangeText={setNumber} />
                <Text style={styles.text}>
                    {
                        number &&
                        <>
                            {isPrime ? 'O número é primo' : 'O número não é primo'}
                        </>
                    }
                </Text>
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
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
    buttonContainer: {
        width: '100%',
        gap: 4
    },
    button: {
        borderRadius: 10
    }
});
