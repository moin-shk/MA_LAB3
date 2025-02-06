// DecrementButton.tsx
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface DecrementButtonProps {
  onDecrement: () => void;
}

const DecrementButton: React.FC<DecrementButtonProps> = ({ onDecrement }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onDecrement}>
      <Text style={styles.buttonText}>Decrement</Text>
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

export default DecrementButton;