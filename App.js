// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import CabsList from './screens/CabsList';
import CabDetail from './screens/CabDetail';
import MyCabs from './screens/MyCabs';
import { CabProvider } from './context/CabContext';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="CabsList" component={CabsList} options={{ title: 'Available Cabs' }} />
      <Stack.Screen name="CabDetail" component={CabDetail} options={{ title: 'Cab Detail' }} />
    </Stack.Navigator>
  );
}

function App() {
  return (
    <CabProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === 'Home') {
                iconName = focused ? 'home' : 'home-outline';
              } else if (route.name === 'My Cabs') {
                iconName = focused ? 'car' : 'car-outline';
              }

              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',
          })}
        >
          <Tab.Screen name="Home" component={HomeStack} />
          <Tab.Screen name="My Cabs" component={MyCabs} />
        </Tab.Navigator>
      </NavigationContainer>
    </CabProvider>
  );
}

export default App;
