import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';
import React, { useState, useEffect } from 'react';

export default function App() {
  const [number, setNumber] = useState(0);
  const [guess, setGuess] = useState('');
  const [times, setTimes] = useState(0);
  const [title, setTitle] = useState("Guess a number between 1-100");

  useEffect(() => {
    setNumber(Math.floor(Math.random() * 100) + 1);
  }, []);

  const MakeGuess = () => {
    const intGuess = parseInt(guess);
    setTimes(times + 1);
    if (intGuess === number) {
      Alert.alert("You guessed the number in " + times + " guesses");
    } else if (intGuess > number) {
      setTitle("Your guess " + intGuess + " is too high");
    } else if (intGuess < number) {
      setTitle("Your guess " + intGuess + " is too low")
    }
  }

  return (
    <View style={styles.container}>
      <Text style={{ fontWeight: "bold" }}>{title}</Text>
      <TextInput style={{ width: 300, borderColor: 'black', borderWidth: 1 }} onChangeText={guess => setGuess(guess)} value={guess} keyboardType="numeric"></TextInput>
      <View style={{ flexDirection: 'row' }}>
        <Button onPress={MakeGuess} title="Make a Guess"></Button>
      </View>
    </View >
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