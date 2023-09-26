import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, FlatList, TouchableOpacity } from 'react-native';
import { List } from 'react-native-paper';
import Api from '../../services/Api'

export default function Home({ navigation }) {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        Api.get('https://dummyjson.com/users') 
        .then(response => {
            setUsers(response.data)  
        })
        .catch(err => {
            console.log('erro', err) 
        })
    }, [])

    return (
        <View style={styles.container}>
            <FlatList
                data={users}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Usuario', { userId: item.id })}
                    >
                        <List.Item title={`${item.firstName} ${item.lastName}`} />
                    </TouchableOpacity>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
    },
});
