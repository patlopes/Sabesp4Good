import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import {Picker} from '@react-native-picker/picker';

export default function Report({ navigation }) {
  
    //let reportRequest = new Request('../assets/db.json');
    const db =  require('../assets/db-new.json')
    const [sistema] = useState(['Selecione um sistema', 'Guarapiranga', 'Cantareira', 'Alto Tietê', 'Marsilac', 'Oriental', 'Rio Claro'])
    const [sistemaSelecionado, setsistemaSelecionado] = useState([])
    const [periodo] = useState(['Selecione o periodo', 'JAN', 'FEV'])
    const [periodoSelecionado, setperiodoSelecionado] = useState([])
    const [selectedData, setSelectedData] = useState('{}')
    const pressHandler = () => {
      navigation.goBack();
    }

    useEffect(() => {
      let data = db
      let filteredData = data.filter(function(item) {
        return item.data === periodoSelecionado && item.nome === sistemaSelecionado
      })

      setSelectedData(JSON.stringify(filteredData, null, 2))
    }, [periodoSelecionado, sistemaSelecionado])
    
    return (
      <View style={styles.container}>
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
        <Text>{selectedData}</Text>
      </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
  },
  logo: {
    marginTop: 30,
    marginBottom: 30,
    width: '12%',
    height: '12%',
    alignSelf: 'flex-start'

  },
});
