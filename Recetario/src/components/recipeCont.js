import React from 'react';
import { View, Text, FlatList } from 'react-native';
import RecipeItem from './RecipeItem';
import style from "../assets/styles";

const RecipeCont = ({ recipes, cardSize, listTitle }) => {
  return (
    <View>
      <Text style={style.listTitle}>{listTitle}</Text>
      <FlatList
        data={recipes}
        renderItem={({ item }) => <RecipeItem
          recipe={item}
          cardSize={cardSize} />}
        keyExtractor={(item) => item.id}
        horizontal
      />
    </View>
  );
};
export default RecipeCont;