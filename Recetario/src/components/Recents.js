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
import {recipes} from '../../recipe.json';
import style from "../assets/styles";

const recents = () => {
  const [props, setProps] = useState([]);

  const renderRecipes = ({item}) => {
    if (item.section == 'recent') {
      return (
        <TouchableHighlight>
          <View>
            <Image style={style.bigImage} source={{uri: item.image}} />
            <Text style={style.bigTitle}>{item.title}</Text>
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

export default recents;

