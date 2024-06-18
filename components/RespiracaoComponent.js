import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet, Alert } from 'react-native';
import * as Location from 'expo-location';

const Respiracao = ({navigation}) => {
  /*Contéudo das telas*/
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Respiração</Text>
      <Button title="Próxima Tela" onPress={() => {navigation.navigate("Respiracao")}}/>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
  },
  title: {
    fontSize: 18,
  },
});

export default Respiracao;
