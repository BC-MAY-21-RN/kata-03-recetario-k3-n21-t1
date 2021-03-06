import React, {useEffect, useState} from 'react';
import {
  Text,
  Image,
  FlatList,
  TouchableWithoutFeedback,
  View,
  StyleSheet,
  ScrollView,
} from 'react-native';
import style from '../assets/styles';
import {recipes} from '../../recipe.json';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import recipeDetails from '../screens/recipeDetails';

const ListaItem = ({navigation}) => {
  // const Stack = createNativeStackNavigator();

  const [props, setProps] = useState([]);

  const renderRecipes = ({item}) => {
    if (item.section == 'trending') {
      return (
        <TouchableWithoutFeedback>
          <View >
            <Image style={style.smallImage} source={{uri: item.image}} />
            <Text style={style.smallTitle}>{item.title}</Text>
          </View>
        </TouchableWithoutFeedback >
      );
    }
  };

  return (
    <View>
      <ScrollView>
        <FlatList
          data={recipes}
          horizontal={true}
          renderItem={renderRecipes}
          keyExtractor={item => item.id}
        />
      </ScrollView>
    </View>
  );
};

export default ListaItem;
