import React from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';

export default function Home({ navigation }) {

    const pressHandler = () => {
        navigation.navigate('Report');
    }

    return(
        <view>
            <Text>Home Test</Text>
            <Button title='Selecione seu municipio' onPress={pressHandler} />
        </view>
    )
}
