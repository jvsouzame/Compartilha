import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const AddListScreen = ({ navigation }) => {
  const [listName, setListName] = useState('');

  const handleAddList = () => {
    // Lógica para adicionar uma nova lista
    console.log('Lista adicionada:', listName);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add List</Text>

      <TextInput
        style={styles.input}
        placeholder="New list"
        value={listName}
        onChangeText={setListName}
        placeholderTextColor="#8E8E93"
      />

      <TouchableOpacity style={styles.button} onPress={handleAddList}>
        <Text style={styles.buttonText}>Done</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'flex-start',
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'left',
    marginBottom: 24,
    color: '#000000',
  },
  input: {
    height: 50,
    borderColor: '#D1D1D6',
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 10,
    marginBottom: 20,
    fontSize: 17,
    color: '#000000',
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '600',
  },
});

export default AddListScreen;