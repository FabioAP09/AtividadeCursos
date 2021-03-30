import React,{Component} from 'react';
import {View,Image} from 'react-native';

class Imagem extends Component{
    render(){
     let imagem='https://www.efecadepatos.com.br/wp-content/uploads/2013/08/A312.jpg'
      return(
          <View>
       <Image
       source={{uri:imagem}}
       style={{width: this.props.largura ,height:this.props.altura}}
       
       />
       
       </View>
      )
    }
}

export default Imagem;