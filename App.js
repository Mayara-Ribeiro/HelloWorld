import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{color: 'black', fontSize: 22}}>Hello, World!{'\n'}</Text>
      <Text style={{color: 'black', fontSize: 15}}>Meu primeiro app em expo.{'\n'}</Text>
      <Text style={{fontSize: 15}}>Em breve próximas atualizaçôes.{'\n'}</Text>

      <StatusBar style="auto" />
    </View>
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
