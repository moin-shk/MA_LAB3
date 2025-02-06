// IncrementButton.tsx
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface IncrementButtonProps {
  onIncrement: () => void;
}

const IncrementButton: React.FC<IncrementButtonProps> = ({ onIncrement }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onIncrement}>
      <Text style={styles.buttonText}>Increment</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 5,
    marginVertical: 5,
    width: 200,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default IncrementButton;