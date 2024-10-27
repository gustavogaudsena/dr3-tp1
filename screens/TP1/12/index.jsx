import { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

export default function TP1_12() {
    const [birthDate, setBirthDate] = useState('')
    const [age, setAge] = useState('')
    const [isDateValid, setIsDateValid] = useState()

    const handleBirthDateInput = (inputValue) => {
        const stripedValue = String(inputValue).replaceAll('/', '').padEnd(8, '')
        const [day, month, year] = [stripedValue.substring(0, 2), stripedValue.substring(2, 4), stripedValue.substring(4)]
        const newValue = `${day}/${month}/${year}`
        setBirthDate(newValue)
    }

    const checkAge = () => {

        if (!birthDate.match(/[\d]{2}\/[\d]{2}\/[\d]{4}/g) || birthDate.replaceAll(/\/|\s|:/g, '').match(/(\D)/g)) return setIsDateValid(false)
        else setIsDateValid(true)
        const stripedValue = birthDate.trim().replaceAll(/\/|\s|:/g, '')
        const [day, month, year, hours, minutes] = [stripedValue.substring(0, 2), stripedValue.substring(2, 4), stripedValue.substring(4, 8), stripedValue.substring(8, 10), stripedValue.substring(10, 12)]
        const today = new Date();
        const dateToCalculate = new Date(year, month - 1, day, hours, minutes)

        let anos = today.getFullYear() - dateToCalculate.getFullYear();
        let meses = today.getMonth() - dateToCalculate.getMonth();
        let dias = today.getDate() - dateToCalculate.getDate();
        let horas = today.getHours() - dateToCalculate.getHours();
        let minutos = today.getMinutes() - dateToCalculate.getMinutes();

        if (meses < 0) {
            anos--;
            meses += 12;
        }

        if (dias < 0) {
            meses--;
            const ultimoDiaMesAnterior = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
            dias += ultimoDiaMesAnterior;
        }

        if (horas < 0) {
            dias--;
            horas += 24;
        }

        if (minutos < 0) {
            horas--;
            minutos += 60;
        }

        setAge(`Idade: ${anos} anos, ${meses} meses, ${dias} dias, ${horas} horas e ${minutos} minutos.`)
    }

    useEffect(() => {
        checkAge()
    }, [birthDate])

    return (
        <View style={styles.container}>
            <View style={styles.containerFormulario}>
                <Text style={styles.text}>Insira a data de nascimento com as horas e minutos (dd/mm/yyyy hh:mm )</Text>
                <TextInput
                    placeholder='Data de aniversário'
                    keyboardType='numeric'
                    value={birthDate}
                    onChangeText={setBirthDate} />
                <Text style={styles.text}>
                    {
                        birthDate &&
                        <>
                            {isDateValid ? age : 'Insira uma data válida'}
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
