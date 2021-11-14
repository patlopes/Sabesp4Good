import React from 'react';
import { StyleSheet, Text, View, Button, Image} from 'react-native';

export default function Home({ navigation }) {

    const pressHandler = () => {
        navigation.navigate('Report');
    }

    return(
        <View style={styles.container}>
            <Image source={require('../assets/SabespLogo.png')} style={styles.logo}/>
            <Button color='#3382C3' title='Ir para a area de relatórios' onPress={pressHandler} />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    textStyles: {
        marginBottom: '1%',
        color: 'black',
        alignSelf: 'center'
    },
    logo: {
        marginTop: 60,
        marginBottom: 60,
        width: '30%',
        height: '30%',
        alignSelf: 'center'

    },
    separator: {
        marginVertical: 4,
        borderBottomColor: '#737373',
        padding: 20
    },

});


