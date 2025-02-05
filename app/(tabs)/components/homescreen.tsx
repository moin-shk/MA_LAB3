import React from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  StyleSheet, 
  Animated, 
  SafeAreaView,
  Platform,
} from 'react-native';
import { NavigationProp, ParamListBase } from '@react-navigation/native';

type Props = {
  navigation: NavigationProp<ParamListBase>;
};

const fruits = [
  { 
    name: 'Apple', 
    screen: 'Apple',
    color: '#ffebee',
    borderColor: '#ff1744',
  },
  { 
    name: 'Orange', 
    screen: 'Orange',
    color: '#fff3e0',
    borderColor: '#ff9100',
  },
  { 
    name: 'Mango', 
    screen: 'Mango',
    color: '#fffde7',
    borderColor: '#ffd600',
  },
] as const;

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  // Create animated values for each fruit item
  const scaleValues = React.useRef(
    fruits.map(() => new Animated.Value(1))
  ).current;

  const handlePressIn = (index: number) => {
    Animated.spring(scaleValues[index], {
      toValue: 0.95,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = (index: number) => {
    Animated.spring(scaleValues[index], {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Fresh Fruits</Text>
        <Text style={styles.subtitle}>Select a fruit to learn more</Text>
        
        {fruits.map((fruit, index) => (
          <Animated.View
            key={fruit.name}
            style={[
              styles.fruitItemContainer,
              { transform: [{ scale: scaleValues[index] }] }
            ]}
          >
            <TouchableOpacity 
              style={[
                styles.fruitItem,
                { 
                  backgroundColor: fruit.color,
                  borderColor: fruit.borderColor,
                }
              ]}
              onPressIn={() => handlePressIn(index)}
              onPressOut={() => handlePressOut(index)}
              onPress={() => navigation.navigate(fruit.screen)}
              accessible={true}
              accessibilityLabel={`Navigate to ${fruit.name} details`}
              accessibilityRole="button"
            >
              <Text style={[styles.fruitText, { color: fruit.borderColor }]}>
                {fruit.name}
              </Text>
            </TouchableOpacity>
          </Animated.View>
        ))}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 40,
  },
  fruitItemContainer: {
    width: '100%',
    marginVertical: 8,
  },
  fruitItem: {
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 15,
    width: '100%',
    alignItems: 'center',
    borderWidth: 2,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  fruitText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default HomeScreen;