import React, { Component } from 'react';
import {StyleSheet, Text,TextInput,View,ScrollView} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import Logo from './src/components/imagem'


export default class App extends Component {
  constructor(props){
    super(props);
    this.state={
      curso:0,
      nomeAluno:'',
      cursos:[
          {key:1,nome:"Administração"},
          {key:2,nome:"Sistemas de Informação"},
          {key:3,nome:"Biologia"},
          {key:4,nome:"Arquitetura e Urbanismo"},
          {key:5,nome:"Medicina"},
          {key:6,nome:"Direito"},
          {key:7,nome:"Psicologia"},
          {key:8,nome:"Letras"},
          {key:9,nome:"Enfermagem"},
          {key:10,nome:"Fisioterapia"}
      ],
      periodos:[
        {key:1,periodo:"1º periodo"},
        {key:2,periodo:"2º periodo"},
        {key:3,periodo:"3º periodo"},
        {key:4,periodo:"4º periodo"},
        {key:5,periodo:"5º periodo"},
        {key:6,periodo:"6º periodo"},
        {key:7,periodo:"7º periodo"},
        {key:8,periodo:"8º periodo"},
        {key:9,periodo:"9º periodo"},
        {key:10,periodo:"10º periodo"}
      ],
      turnos:[
        {key:1,turno:"Diurno"},
        {key:2,turno:"Noturno"},
        {key:3,turno:"Diurno"},
        {key:4,turno:"Noturno"},
        {key:5,turno:"Diurno"},
        {key:6,turno:"Noturno"},
        {key:7,turno:"Diurno"},
        {key:8,turno:"Noturno"},
        {key:9,turno:"Diurno"},
        {key:10,turno:"Diurno"}
      ],
      

    }
    this.pegaNome=this.pegaNome.bind(this);
  }
  pegaNome(texto){
    this.setState({nomeAluno:texto});
  }

  render(){
    let cursosItens=this.state.cursos.map((v,k)=>{
      return <Picker.Item key={k} value={k} label={v.nome}/>
    
    })
    let periodosItens=this.state.periodos.map((v,k)=>{
      return <Picker.Item key={k} value={k} label={v.periodo}/>
    })
    let turnosItens=this.state.turnos.map((v,k)=>{
      return <Picker.Item key={k} value={k} label={v.turno}/>
    }
    
    )
  return (
    
    <ScrollView>
      <View style={styles.bloco1}>
        <Logo largura={50} altura={50}/>
      </View>
      <Text>Selecione os parâmetros:</Text><br></br>
      <TextInput
      style={styles.input}
      placeholder='Digite seu nome'
      onChangeText={this.pegaNome}
      />
      <Picker
      selectedValue={this.state.curso}
      onValueChange={(itemValue, itemIndex)=> this.setState({curso:itemValue})}
      >
        
        {cursosItens}
        
      </Picker><br></br>
      <Picker selectedValue={this.state.curso}
      onValueChange={(itemValue, itemIndex)=>this.setState({curso:itemValue})}
      >
        {periodosItens}
      </Picker><br></br>
      <Picker selectedValue={this.state.curso}
      onValueChange={(itemValue,itemIndex)=>this.setState({curso:itemValue})}>
        {turnosItens}
      </Picker><br></br>
      
      <Text style={styles.cursos}>Informações Inseridas:</Text><br></br>
      <Text style={styles.texto}>Nome: {this.state.nomeAluno}</Text>
      <Text style={styles.cursos}>Curso: {this.state.cursos[this.state.curso].nome}{styles.negrito}</Text>
      <Text style={styles.cursos}>Período: {this.state.periodos[this.state.curso].periodo}     Turno: {this.state.turnos[this.state.curso].turno}</Text>    
      
      </ScrollView>
      
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:28,
    flex:1,
    margin:10
  },
  cursos:{
    marginTop:15,
    fontSize:15,
  }, 
  input:{
    height:20,
    borderWidth:1,
    borderColor:'#222',
    fontSize:15,
    padding:10,
    margin:10
  }, 
  texto:{
    fontSize:15,
  },
  bloco1:{
    backgroundColor:'#2696F7',
    height:70,
    padding:10,
    
  },
  bloco1:{
    backgroundColor:'#2696F7',
    height:70,
    padding:10
  },
  bloco2:{
    backgroundColor:'white',
    height:500
  },
  bloco3:{
    backgroundColor:"#515151",
    height:40
  },
  rodape:{
    color:'white'
  }, 
  cursos:{
    marginTop:15,
    fontSize:15,
    
  },
});
