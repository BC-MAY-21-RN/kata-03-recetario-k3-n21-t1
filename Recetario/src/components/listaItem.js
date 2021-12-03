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
    console.log(item);
    return (
      <TouchableHighlight>
        <View style={styles.BoxContainer}>
          <Image style={styles.stretch} source={{uri: item.image}} />
          <Text style={styles.Text}>{item.title}</Text>
        </View>
      </TouchableHighlight>
    );
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

const styles = StyleSheet.create({
  Text: {
    color: '#fff',
    fontSize: 20,
    marginTop: -20
  },
  BoxContainer: {
    width: 200,
    marginRight: 15
  },
  stretch: {
    width: 180,
    height: 180,
    resizeMode: 'center',
  },
});
