import { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';

export default function TP1_09() {
    const [numero, setNumero] = useState()
    const [isOdd, setIsOdd] = useState()

    useEffect(() => {
        const resto = numero % 2;
        setIsOdd(!!resto)
    }, [numero])
    return (
        <View style={styles.container}>
            <View style={styles.containerFormulario}>
                <Text style={styles.text}>Insira um número</Text>
                <TextInput
                    placeholder='Número'
                    keyboardType='decimal-pad'
                    onChangeText={setNumero} />
                <Text style={styles.text}>
                    {
                        numero &&
                        <>
                            {isOdd ? `O número ${numero} é impar` : `O número ${numero} é par`}
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
