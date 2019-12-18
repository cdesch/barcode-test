import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BarcodeComponent from './src/BarcodeComponent';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      
      <BarcodeComponent 
        value="12341231231"
        format="CODE128"
        flat
        text="12341231231"/>
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
