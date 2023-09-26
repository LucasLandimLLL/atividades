import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, } from 'react-native';
import { Avatar, Card, IconButton } from 'react-native-paper';
import Api from '../services/Api';

export default function UserPosts(props) {
  const idUser = props.route.params.userId;

  const [usuario, setUsuario] = useState({});
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    Api.get(`/users/${idUser}`)
      .then(resultado => {
        setUsuario(resultado.data);
      })
      .catch(error => {
        console.log('DEU ERRO NA CHAMADA DE USUÁRIOS:', error);
      });

    Api.get(`/users/${idUser}/posts`)
      .then(response => {
        setPosts(response.data.posts);
      })
      .catch(error => {
        console.log('DEU ERRO NA CHAMADA DE POSTS:', error);
      });
  }, [idUser]); 

  const avatar = () => {
    return <Avatar.Image size={48} source={{ uri: usuario.image }} />;
  };

  return (
    <View style={{ gap: 10, paddingHorizontal: 10 }}>
      <Card.Title
        title={`${usuario.firstName} ${usuario.lastName}`} 
        subtitle={`Sexo: ${usuario.gender}`}
        left={avatar}/>
      <FlatList
        style={styles.peopleList}
        data={posts}
        renderItem={({ item }) => (
          <Card mode="contained" style={styles.Test}>
            <Card.Title title={item.title} />
            <Card.Content>
              <Text>{item.body}</Text>
            </Card.Content>
          </Card>
        )}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()} // Adicionamos um keyExtractor
      />
    </View>
  );
}

const styles = StyleSheet.create({
  peopleList: { width: '100%' },
  Test: { marginBottom: 10 },
});
