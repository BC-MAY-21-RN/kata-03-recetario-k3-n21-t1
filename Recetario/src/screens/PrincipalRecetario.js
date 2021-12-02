import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import SearchBar from '../components/barraBusqueda';
import Recipes from '../components/listaItem';

// import RecipeCont from '../components/recipeCont';
// import SearchBar from '../components/barraBusqueda';
// import { recipes } from './recipe.json';

const PrincipalRecetario = () => {
  // const trending = recipes.filter(recipe => recipe.section === 'trending');
  // const recent = recipes.filter(recipe => recipe.section === 'recent');

  return (
    <>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false} >
        <View style={styles.ContainerBackG}>
          <Text style={styles.Text}>Recipe Book</Text>
          <View>
            <SearchBar />
          </View>
          <View style={styles.ContainerItems}>
            <Text style={styles.TextSub}>TRENDING</Text>
            {/* <Recipes /> */}
          </View>
          <View style={styles.ContainerItems}>
            <Text style={styles.TextSub}>RECENTS</Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </>
  );
};
export default PrincipalRecetario;

const styles = StyleSheet.create({
  ContainerBackG: {
    padding: 1,
    backgroundColor: '#121212',
    flex: 1,
  },
  Text: {
    fontSize: 40,
    textAlign: 'center',
    marginTop: 0,
    color: '#FEC260',
    fontWeight: 'bold',
  },
  ContainerItems: {
    flex: 2,
  },
  ContainerRecents: {
    flex: 3,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: 'white',
    color: '#FEC260',
  },
  TextSub: {
    fontSize: 20,
    textAlign: 'left',
    fontWeight: 'bold',
    color: '#FEC260',
  },
});
