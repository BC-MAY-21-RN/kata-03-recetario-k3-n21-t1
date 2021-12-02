import React, {useEffect, useState} from 'react';
import {Text, Image, TouchableOpacity, FlatList} from 'react-native';
import style from "../assets/styles";
import recipesJson from '../../recipe.json';

const Recipes = (props) => {
    const [isLoading, setLoading] = useState(false);
    const [recipes, setRecipes] = useState([]);

    getRecipes = () => {
      fetch(recipesJson)
      .then((response) => response.json())
      .then((json) => setRecipes(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
    }

    useEffect (() => {
      setLoading(true);
      getRecipes();
    }, []);


    return(
      <View>
            {isLoading ? <Text>Loading</Text>:(
                <FlatList 
                    data = {recipes} keyExtractor={({id}) => id.toString()}
                    renderItem = {({item}) => <Text>{item.title}</Text>} />
            )
                
                }
      </View>
    )
}

export default Recipes;



// const RecipeList = ({recipe, cardSize}) => {
//   return (
//     <>
//       <TouchableOpacity>
//         <Image
//           source={{uri: recipe.image}}
//           style={cardSize === 'big' ? style.bigImage : style.smallImage}
//         />
//         <Text style={cardSize === 'big' ? style.bigTitle : style.smallTitle}>
//           {recipe.title}
//         </Text>
//       </TouchableOpacity>
//     </>
//   );
// };

// export default RecipeList;

