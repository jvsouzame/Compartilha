import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TrashScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lixeira</Text>
      <Text>Itens deletados</Text>
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

export default TrashScreen;