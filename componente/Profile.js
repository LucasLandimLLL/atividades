import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

export default function Profile({ imgUri, genero, nome, telefone, email }) {

    const pessoa = {
        imgUri: 'https://media.licdn.com/dms/image/D4D03AQE0K_uv-vq5Gw/profile-displayphoto-shrink_800_800/0/1675435827741?e=1700092800&v=beta&t=ec2EEGlVWPwjp5N495HtQBplPYQh-vNVV1KT0cG-d4w',
        genero: 'Masculino',
        nome: 'Lucas L Landim',
        email: 'lucas.landim2510@gmail.com',
        telefone: '(61)984245121'
    }

    return (
        <View style={styles.container}>
            <View style={styles.imgContainer}>
                <Image
                    source={{ uri: pessoa.imgUri }}
                    style={styles.img}
                />
            </View>

            <View style={styles.labelContainer}>
                <Text style={[styles.texto, styles.textoLabel]}>Nome</Text>
                <Text style={styles.texto}>{pessoa.nome}</Text>
            </View>

            <View style={styles.labelContainer}>
                <Text style={[styles.texto, styles.textoLabel]}>Gênero</Text>
                <Text style={styles.texto}>{pessoa.genero}</Text>
            </View>

            <View style={styles.labelContainer}>
                <Text style={[styles.texto, styles.textoLabel]}>Telefone</Text>
                <Text style={styles.texto}>{pessoa.telefone}</Text>
            </View>

            <View style={styles.labelContainer}>
                <Text style={[styles.texto, styles.textoLabel]}>Email</Text>
                <Text style={styles.texto}>{pessoa.email}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
        margin: 0
    },
    imgContainer: {
        marginTop: 50,
        borderBottomWidth: 1,
        borderBottomColor: 'purple',
        padding: 20
    },
    img: {
        width: 250,
        height: 250,
        borderWidth: 4,
        borderColor: 'purple',
        borderRadius: 20,
        padding: 20
    },
    labelContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: 'purple'
    },
    texto: {
        fontSize: 20,
        color: 'white'
    },
    textoLabel: {
        color: 'white',
        fontWeight: 'bold'
    }
})
