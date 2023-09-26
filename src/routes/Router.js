import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// ROTAS
import Home from '../screens/Home/Home';


const Stack = createStackNavigator();

export default function Router() {
    return (
        <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Usuario" component={Usuario} /> 
        <Stack.Screen name="UserPosts" component={UserPosts} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}