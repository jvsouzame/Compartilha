import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ShoppingListScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Compras</Text>
      <Text>Itens da lista de compras</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default ShoppingListScreen;