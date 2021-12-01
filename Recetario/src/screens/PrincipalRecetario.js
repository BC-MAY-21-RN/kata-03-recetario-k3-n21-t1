import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const PrincipalRecetario = () => {
  return (
    <>
      <View>
        <Text style={styles.Text}>Recetario</Text>
      </View>
    </>
  );
};
export default PrincipalRecetario;

const styles = StyleSheet.create({
    Text: {
        fontSize: 40,
        textAlign: 'center',
        marginTop: 50,
    },
});
