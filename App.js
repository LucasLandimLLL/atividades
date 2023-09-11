import React from 'react';
import { StyleSheet } from 'react-native';
import Profile from './componente/Profile';


export default function App() {
  return (
    <Profile/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
