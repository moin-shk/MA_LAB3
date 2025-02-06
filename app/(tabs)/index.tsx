import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import IncrementButton from './components/IncrementButton';
import DecrementButton from './components/DecrementButton';

export default function Lab3Page() {
  // State management for the counter
  const [counter, setCounter] = useState<number>(0);

  // Handler functions to modify state
  const handleIncrement = (): void => {
    setCounter(prevCount => prevCount + 1);
  };

  const handleDecrement = (): void => {
    setCounter(prevCount => prevCount - 1);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lab 3: Counter App</Text>
      
      <View style={styles.counterContainer}>
        <Text style={styles.counterText}>Counter Value: {counter}</Text>
      </View>

      <View style={styles.buttonContainer}>
        <IncrementButton onIncrement={handleIncrement} />
        <DecrementButton onDecrement={handleDecrement} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  counterContainer: {
    marginBottom: 30,
  },
  counterText: {
    fontSize: 20,
  },
  buttonContainer: {
    gap: 10,
  }
});