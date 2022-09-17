import React, { Component } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { barra } from '../styles';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHome, faHeart, faShoppingBag, faStore} from '@fortawesome/free-solid-svg-icons';

class BarraMenu extends Component {

    render (){
        return(
            <View style={barra.container}>
                <TouchableOpacity onPress={()=>{}} style={barra.iconeAtivo}>    
                    <FontAwesomeIcon icon={faHome} color={'black'} />
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{}} style={barra.icone}>
                    <FontAwesomeIcon icon={faShoppingBag} color={'#AAA9A9'} />
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{}} style={barra.icone}>
                    <FontAwesomeIcon icon={faHeart} color={'#AAA9A9'} />
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{}} style={barra.icone}>
                    <FontAwesomeIcon icon={faStore} color={'#AAA9A9'} />
                </TouchableOpacity>
            </View>
        )
    }        
}

export default BarraMenu;