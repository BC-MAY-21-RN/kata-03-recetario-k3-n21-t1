import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PrincipalRecetario from './src/screens/PrincipalRecetario';
import style from './src/assets/styles';
import RecipeDetails from './src/screens/RecipeDetails';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Recipe Book">
        <Stack.Screen
          name="Recipe Book"
          component={PrincipalRecetario}
        />
        <Stack.Screen 
        name = "recipeDetails"
        component = {RecipeDetails}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
