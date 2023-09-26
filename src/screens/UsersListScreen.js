import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { Card, Avatar, IconButton } from 'react-native-paper'; 
import Api from '../services/Api';

const UsersListScreen = ({ navigation }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    Api.get('/users')
      .then(response => {
        setUsers(response.data.users);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const navigateToUserDetails = (userId) => {
    navigation.navigate('UserDetails', { userId });
  };

  return (
    <View style={{ padding: 10 }}>
      <FlatList
        data={users}
        keyExtractor={user => user.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigateToUserDetails(item.id)}>
            <Card style={styles.card}>
              <Card.Content style={styles.cardContent}>
                <Avatar.Image 
                  size={70} 
                  source={{ uri: item.image }} 
                  style={styles.avatar} 
                />
                <Text style={styles.userName}>{item.firstName} {item.lastName}</Text>
                <IconButton
                  icon="chevron-right-circle"
                  size={24}
                  marginRight={0}
                  onPress={() => navigateToUserDetails(item.id)}
                />
              </Card.Content>
            </Card>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = {
  card: {
    marginBottom: 16,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#ccc',
    padding: 16,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    marginRight: 10, 
  },
  userName: {
    fontSize: 20,
    fontWeight: 'bold',
    flex: 1,
  },
};

export default UsersListScreen;
