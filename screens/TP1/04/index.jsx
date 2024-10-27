import { useState } from 'react';
import { View, Text, Button, StyleSheet, Image, Dimensions } from 'react-native';


const IMAGENS = [
    { uri: 'https://picsum.photos/id/237/200', title: 'Cachorro' },
    { uri: 'https://picsum.photos/id/28/200', title: 'Floresta' },
    { uri: 'https://picsum.photos/id/29/200', title: 'Montanha' },
    { uri: 'https://picsum.photos/id/33/200', title: 'Urso Curioso' }
];

const randomNumber = (max) => {
    const random = Math.floor(Math.random() * max);
    return random
}

export default function TP1_04() {
    const [imagePool, setImagePool] = useState(IMAGENS)
    const [selectedIndex, setSelectedIndex] = useState(randomNumber(imagePool.length))
    const [image, setImage] = useState(imagePool[selectedIndex])

 

    const handleRandomImage = () => {
        const index = randomNumber(imagePool.length);
        if (selectedIndex === index) return handleRandomImage()
        setSelectedIndex(index)
        setImage(imagePool[selectedIndex]);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>{image.title}</Text>
            <Image source={{ uri: image.uri }} style={styles.imagem} />
            <View style={styles.buttonContainer}>
                <Button style={styles.button} title='Nova imagem'  onPress={handleRandomImage} />
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
        marginHorizontal: 'auto'
    },
    imagem: {
        width: '100%',
        height: 250,
        resizeMode: 'contain',
        marginBottom: 20,
    },
    buttonContainer: {
        width: '100%',
        gap: 4
    },
    button: {
        borderRadius: 10
    }
});
