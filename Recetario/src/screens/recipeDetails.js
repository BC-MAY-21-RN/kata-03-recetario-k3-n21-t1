import React from 'react'
import {View, Image, Text, useState, useEffect} from 'react-native'
import style from '../assets/styles';
import { Table, Row, Rows } from 'react-native-table-component';


export default RecipeDetails = (recipe)=>{
    const [ingredients,setIngredients] = useState([])
    const [titleTable, setTitleTable] = useState(['Ingredients','Size'])
    
    const formatIngredients = recipe => {
        recipe.ingredients.map(objIngredient => {
            let ingredientAndSize = []
            ingredientAndSize.push(objIngredient.ingredient)
            ingredientAndSize.push(objIngredient.size)
            setIngredients(ingredients.concat(ingredientAndSize))
        })
    }

    useEffect(() => {
        formatIngredients()  
    }, [])

    return(
        <>
        <View style={style.containerTop}>
            <View>
                <Image style={style.imageBackground} source={{uri: recipe.image}}/>
                <Text>{recipe.title}</Text>
            </View>
            
            <View>
                <Text className="ingrdients">Ingredients</Text>
                <Text>for {recipe.servings} servings</Text>
            </View>

            <View style={styles.container}>
                <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
                    <Row data={titleTable} style={styles.head} textStyle={styles.text}/>
                    <Rows data={ingredients} textStyle={styles.text}/>
                </Table>
            </View>
        </View>
        </>
    )

    const styles = StyleSheet.create({
        container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
        head: { height: 40, backgroundColor: '#f1f8ff' },
        text: { margin: 6 }
      });
}