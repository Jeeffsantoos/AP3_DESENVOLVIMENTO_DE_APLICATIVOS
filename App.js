import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Pressable } from 'react-native';

export default function App() {
  const [height, setHeight] = useState('');
  const [gender, setGender] = useState('male');
  const [result, setResult] = useState(null);

  const calculateIdealWeight = () => {
    if (!height) {
      setResult('Por favor, insira uma altura válida.');
      return;
    }

    const h = parseFloat(height);

    if (isNaN(h)) {
      setResult('Altura inválida. Use números válidos.');
      return;
    }

    let idealWeight;
    let selectedGender = gender === 'Masculino' ? 'Masculino' : 'Feminino';

    if (gender === 'Masculino') {
      idealWeight = (72.7 * h) - 58;
    } else {
      idealWeight = (62.1 * h) - 44.7;
    }

    setResult(`Seu peso ideal como ${selectedGender} é aproximadamente ${idealWeight.toFixed(2)} kg.`);
  };

  return (
    <View style={styles.container}>
      <Text >Calcule o peso ideal</Text>
      <TextInput
        style={styles.input}
        placeholder="Altura (em metros)"
        onChangeText={(text) => setHeight(text)}
        value={height}
        keyboardType="numeric"
      />
      <Text style={styles.texto}>Selecione o gênero: {gender}</Text>

      <View style={styles.botoes}>

        <Pressable style={styles.button} title="Masculino" onPress={() => setGender('Masculino')}>
          <Text style={styles.text}>Masculino</Text>
        </Pressable>
        <Pressable title="Feminino" style={styles.button} onPress={() => setGender('Feminino')}>
          <Text style={styles.text}>Feminino</Text>
        </Pressable>
        <Pressable title="Calcular" style={styles.button} onPress={calculateIdealWeight}>
          <Text style={styles.text}>Calcular</Text>

        </Pressable>

      </View>
        {result && <Text>{result}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },
  input: {
    width: 200,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 5,
    marginBottom: 10,
  },
  texto: {
    margin: 5
  },
  botoes: {
    display: 'flex',
    margin: 10
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    marginTop: 4,
    backgroundColor: 'black',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },

})
