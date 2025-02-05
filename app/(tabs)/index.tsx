import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './components/homescreen';
import Apple from './components/apple';
import Orange from './components/orange';
import Mango from './components/mango';

// Define the type for our navigation stack parameters
export type RootStackParamList = {
  Home: undefined;
  Apple: undefined;
  Orange: undefined;
  Mango: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const App = () => {
  return (
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#fff',
            elevation: 0, // Remove shadow on Android
            shadowOpacity: 0, // Remove shadow on iOS
          },
          headerTitleStyle: {
            fontSize: 20,
            fontWeight: 'bold',
            color: '#333',
          },
          headerTintColor: '#FFA500',
          cardStyle: { backgroundColor: '#fff' },
        }}
      >
        <Stack.Screen 
          name="Home" 
          component={HomeScreen}
          options={{
            title: 'Fresh Fruits',
            headerShown: true,
          }}
        />
        <Stack.Screen 
          name="Apple" 
          component={Apple}
          options={{
            headerShown: false, // Hide header as we have custom back button
          }}
        />
        <Stack.Screen 
          name="Orange" 
          component={Orange}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen 
          name="Mango" 
          component={Mango}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
  );
};

export default App;