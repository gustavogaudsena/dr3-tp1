import { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';

export default function TP1_11() {
    const [word, setWord] = useState('t')
    const [isPalindrome, setIsPalindrome] = useState()

    const checkPalindrome = (text) => {
        if (!text) return false;
        const normalizedText = text.trim().toUpperCase().replaceAll(' ', '')
        const revertedText = String(normalizedText).trim().split('').reverse().join('');
        return revertedText.toUpperCase() === normalizedText
    }

    useEffect(() => {
        const isWordPalindrome = checkPalindrome(word);
        setIsPalindrome(!!isWordPalindrome)
    }, [word])
    return (
        <View style={styles.container}>
            <View style={styles.containerFormulario}>
                <Text style={styles.text}>A palavra é um palíndromo?</Text>
                <TextInput
                    placeholder='Texto'
                    keyboardType='default'
                    onChangeText={setWord} />
                <Text style={styles.text}>
                    {
                        word &&
                        <>
                            {isPalindrome ? 'A palavra é um palíndromo' : 'A palavra NÃO é um palíndromo'}
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
