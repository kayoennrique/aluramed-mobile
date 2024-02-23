import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Tab = createNativeStackNavigator();

import Onboarding from './screens/Onboarding';
import Main from './screens/Main';
import Details from './screens/Details';

export default function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Onboarding" component={Onboarding} options={{ headerShown: false }}/>
        <Tab.Screen name="Principal" component={Main} options={{ headerShown: false }}/>
        <Tab.Screen name="Detalhes" component={Details}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}