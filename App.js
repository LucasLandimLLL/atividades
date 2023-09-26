import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import UsersListScreen from './src/screens/UsersListScreen';
import UserDetailsScreen from './src/screens/UserDetailsScreen';
import UserPostsScreen from './src/screens/UserPostsScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="UsersList"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#9c11a2',
          },
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen name="Lista de Usuários" component={UsersListScreen} options={{ title: 'Lista de Usuários'}}  />
        <Stack.Screen name="UserDetails" component={UserDetailsScreen} options={{ title: 'Detalhe de Usuário'}} />
        <Stack.Screen name="UserPostsScreen" component={UserPostsScreen} options={{ title: 'Posts do Usuário'}} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
