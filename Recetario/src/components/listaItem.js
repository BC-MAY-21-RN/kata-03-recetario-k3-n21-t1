import React, {useEffect, useState} from 'react';
import {
  Text,
  Image,
  FlatList,
  TouchableHighlight,
  View,
  StyleSheet,
  ScrollView,
} from 'react-native';
import style from '../assets/styles';
import {recipes} from '../../recipe.json';

const ListaItem = () => {
  const [props, setProps] = useState([]);

  const renderRecipes = ({item}) => {
    if (item.section == 'trending') {
      return (
        <TouchableHighlight>
          <View>
            <Image style={style.smallImage} source={{uri: item.image}} />
            <Text style={style.smallTitle}>{item.title}</Text>
          </View>
        </TouchableHighlight>
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

