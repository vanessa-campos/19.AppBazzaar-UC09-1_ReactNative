import React, { Component } from 'react';
import { Text, TouchableOpacity, View, ScrollView, Image } from 'react-native';
import { loja, topoCategoria } from '../styles';

class SobreLoja extends Component {

    render (){
        return(
            <View>
                <View style={topoCategoria.container}>
                    <Text style={topoCategoria.titulo}>Sobre a Loja</Text>
                </View>
                <View style={loja.container}>      
                    <Text style={loja.text2}>Localização</Text>                     
                    <Text style={loja.text}>
                        Rua Eusébio, 10 - Centro, Cidade das Águas
                        Aberta de segunda a sexta das 10:00 às 21:00
                    </Text> 
                    <Text style={loja.text2}>Aceitamos</Text>                     
                    <Image style={loja.image} source={{uri: 'https://loja.daten.com.br/image/catalog/forma%20de%20pagamento%20daten%20-%20logos-cartoes_.jpg'}}/>
                </View>
            </View>
        )
    }        
}

export default SobreLoja;