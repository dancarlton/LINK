import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ 
            title: 'Home', 
            headerStyle: { backgroundColor: '#f4511e' }, 
            headerTintColor: '#fff', 
            headerTitleStyle: { fontWeight: 'bold' },
          }} 
        />
        <Stack.Screen 
          name="Profile" 
          component={ProfileScreen} 
          options={{ 
            title: 'Profile', 
            headerStyle: { backgroundColor: '#f4511e' }, 
            headerTintColor: '#fff', 
            headerTitleStyle: { fontWeight: 'bold' },
          }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
