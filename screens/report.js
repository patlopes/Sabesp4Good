import React, {useState} from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import {Picker} from '@react-native-picker/picker';

export default function Report({ navigation }) {

    const [sistema] = useState(['Selecione um sistema', 'Guarapiranga', 'Cantareira'])
    const [sistemaSelecionado, setsistemaSelecionado] = useState([])

    const [periodo] = useState(['Selecione o periodo', 'Outubro', 'Novembro'])
    const [periodoSelecionado, setperiodoSelecionado] = useState([])

    const pressHandler = () => {
      navigation.goBack();
    }
    
    return (
      <View style={styles.container}>
        <Image source={require('../assets/SabespLogo.png')} style={styles.logo}/>
        <Picker
          selectedValue={sistemaSelecionado}
          style={{height:30, width: 150, alignSelf:'center'}}
          onValueChange={(itemValue) =>
            setsistemaSelecionado(itemValue)
          }>
            {
              sistema.map(cr =>{
                return <Picker.Item label={cr} value={cr} />
              })
            }
        </Picker>
        <Picker
          selectedValue={periodoSelecionado}
          style={{height:30, width: 150, alignSelf:'center'}}
          onValueChange={(itemValue) =>
            setperiodoSelecionado(itemValue)
          }>
            {
              periodo.map(cr =>{
                return <Picker.Item label={cr} value={cr} />
              })
            }
        </Picker>
      </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'left',
  },
  logo: {
    marginTop: 30,
    marginBottom: 30,
    width: '10%',
    height: '10%',
    alignSelf: 'left'

  },
});
