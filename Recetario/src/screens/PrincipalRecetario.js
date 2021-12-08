import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import BarraBusqueda from '../components/BarraBusqueda';
import ListaItem from '../components/listaItem';
import Recents from '../components/Recents';
import style from '../assets/styles';

const PrincipalRecetario = () => {
  return (
    <View style={style.home}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View>
          <Text style={style.TextMain}>Recipe Book</Text>
          <View>
            <BarraBusqueda />
          </View>
          <View style={style.ContainerItems}>
            <Text style={style.TextSub}>TRENDING</Text>
            <TouchableWithoutFeedback
              onPress={() => navigation.navigate('recipeDetails')}>
              <ListaItem />
            </TouchableWithoutFeedback>
          </View>
          <View style={style.ContainerItems}>
            <Text style={style.TextSub}>RECENTS</Text>
            <Recents />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};
export default PrincipalRecetario;
