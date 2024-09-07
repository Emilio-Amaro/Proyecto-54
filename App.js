import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'lightgray' }}>
        <Text style={{
          marginTop: 50,
          color: 'white',
          textAlign: 'center',
          fontWeight: 'bold',
          fontSize: 50,
          backgroundColor: 'pink',
          width: 350,
          height: 350,
          borderTopLeftRadius: 30, // Radio de borde para la esquina superior izquierda
          borderTopRightRadius: 30, // Radio de borde para la esquina superior derecha
          fontFamily: 'Times New Roman', // Cambiar la fuente a Times New Roman
          textShadowColor: 'black', // Color de la sombra
          textShadowOffset: { width: 10, height: 10 }, // Desplazamiento de la sombra
          textShadowRadius: 8 // Radio de la sombra
        }}>
          FELIZ CUMPLEAÑOS QUERIDO AMIGO :)
        </Text>
      </View>
    );
  }
}


