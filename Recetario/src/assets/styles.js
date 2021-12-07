import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
    
      TextMain: {
        fontSize: 40,
        textAlign: 'center',
        marginTop: 0,
        color: '#FEC260',
        fontWeight: 'bold',
      },
      ContainerRecents: {
        flex: 3,
      },
     
      input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        backgroundColor: 'white',
        color: '#FEC260',
      },
      TextSub: {
        marginLeft: 15,
        marginBottom: 5,
        marginTop: 10,
        fontSize: 20,
        textAlign: 'left',
        fontWeight: 'bold',
        color: '#FEC260',
      },



    home: {
        padding: 1,
        flex: 1,
        backgroundColor: '#121212',
    },

    searchSection: {
        flex: 0,
        flexDirection: 'row',
        marginTop: 30,
        marginBottom: 15,
        marginHorizontal: 7,
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#5e5e5e',
    }, 
    searchIcon: {
        fontSize: 24,
        color: 'white',
        padding: 10,
    },
    searchBar: {
        flex: 1,
        paddingTop: 10,
        paddingRight: 10,
        paddingBottom: 10,
        paddingLeft: 0,
        fontSize: 18,
        color: 'white',
        borderRadius: 4,
    },
    listTitle: {
        marginLeft: 10,
        marginTop: 60,
        fontSize: 24,
        color: '#f40083',
    },
    bigImage: {
        width: 150,
        height: 200,
        borderRadius: 10,
        margin: 10,
    },
    smallImage: {
        width: 110,
        height: 110,
        borderRadius: 10,
        margin: 10,
    },
    smallTitle: {
        color: 'white',
        fontSize: 14,
        maxWidth: 110,
        marginLeft: 12,
        textAlign: 'center'
    },
    bigTitle: {
        color: 'white',
        fontSize: 18,
        maxWidth: 150,
        marginLeft: 12,
        textAlign: 'center'
    },
    containerTop: {
        flex: 1,
        flexDirection: 'column',
    },
    imageBackground: {
        flex: 1,
        resizeMode: 'contain',
        justifyContent: 'center',
    },

});

export default style;