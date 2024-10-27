import { View, Text, StyleSheet} from 'react-native';

export default function TP1_01() {
    const date = new Date()
    const horaAtual = `${date.getHours().toString().padStart(2, 0)}:${date.getMinutes().toString().padStart(2, 0)}`
    const name = 'Gustavo Sena'
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Olá, {name}! Agora são {horaAtual}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alingItems: 'center',
        justifyContent: 'center'
    },
    text: {
        textAlign: 'center'
    }
})