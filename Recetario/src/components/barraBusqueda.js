import React, {useState} from 'react';
import {Searchbar} from 'react-native-paper';
import {TextInput, View} from 'react-native';
import style from '../assets/styles';
import Icon from 'react-native-vector-icons/MaterialIcons';

const BarraBusqueda = () => {
  const [search, setSearch] = useState('');

  const updateSearch = newValue => {
    setSearch(newValue);
  };
  const MicHandle = () => {
      console.log("Mic activado");
  }

  return (
    <View style={style.searchSection}>
      <Icon style={style.searchIcon} name="search" />
      <TextInput
        style={style.searchBar}
        placeholder="What do you want to eat?"
        placeholderTextColor="#ffffff"
        onChangeText={updateSearch}
      />

      <Icon style={style.searchIcon} name="mic" />
    </View>
  );
};

export default BarraBusqueda;
