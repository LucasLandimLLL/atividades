import React, { useEffect, useState } from 'react';
import { Text, ScrollView, TouchableOpacity, Button } from 'react-native';
import { Card, Paragraph } from 'react-native-paper';
import Api from '../services/Api';
import Icon from 'react-native-vector-icons/FontAwesome'; 


const TelaDetalhesUsuario = ({ route, navigation }) => {
  const { userId } = route.params;
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    Api.get(`/users/${userId}`)
      .then(response => {
        setUsuario(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, [userId]);

  const irParaPostsDoUsuario = () => {
    navigation.navigate('UserPostsScreen', { userId });
  };

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={irParaPostsDoUsuario} style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text style={{ color: 'white', fontSize: 16, marginRight: 8 }}>Posts</Text>
          <Icon
            name="angle-right"
            size={40}
            color="white"
            style={{ marginRight: 10 }}
          />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', padding: 16 }}>
      {usuario && (
        <Card>
          <Card.Content style={{ alignItems: 'center' }}>
            <Card.Cover source={{ uri: usuario.image }} style={{ width: 150, height: 150, borderRadius: 75, marginBottom: 10 }} />
            <Text>ID: {usuario.id}</Text>
          <Text>Primeiro Nome: {usuario.firstName}</Text>
          <Text>Último Nome: {usuario.lastName}</Text>
          <Text>Nome de Solteira: {usuario.maidenName}</Text>
          <Text>Idade: {usuario.age}</Text>
          <Text>Gênero: {usuario.gender}</Text>
          <Text>Email: {usuario.email}</Text>
          <Text>Telefone: {usuario.phone}</Text>
          <Text>Nome de Usuário: {usuario.username}</Text>
          <Text>Data de Nascimento: {usuario.birthDate}</Text>
          <Text>Tipo Sanguíneo: {usuario.bloodGroup}</Text>
          <Text>Altura: {usuario.height} cm</Text>
          <Text>Peso: {usuario.weight} kg</Text>
          <Text>Cidade: {usuario.address.city}</Text>
          <Text>Estado: {usuario.address.state}</Text>
          <Text>Universidade: {usuario.university}</Text>
          <Text>Nome da Empresa: {usuario.company.name}</Text>
          <Text>Departamento da Empresa: {usuario.company.department}</Text>
          <Text>Título na Empresa: {usuario.company.title}</Text>
            <Button title="Ver Posts" onPress={irParaPostsDoUsuario} />
          </Card.Content>
        </Card>
      )}
    </ScrollView>
  );
};

export default TelaDetalhesUsuario;
