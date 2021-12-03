import React, {useState} from 'react';
// import Icon from 'react-native-vector-icons/MaterialIcons';
import {Searchbar} from 'react-native-paper';


const barraBusqueda = () => {
    const [search, setSearch] = useState('');

    const updateSearch = (newValue) => {
        setSearch(newValue);
    }

    return(
        <Searchbar 
        placeholder="what do you want to eat"
        onChangeText={updateSearch} 
        value={search} 
        />
    )
}

export default barraBusqueda;