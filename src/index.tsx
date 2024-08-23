import React, { Component } from 'react';
import { TextInput, View, Text } from 'react-native';

import { Title, ContainerScreen, GenericText, Button } from './components';
import styles from './index.style';

//TODO: Colocar regra para o limite na quantidade
//TODO: Colocar regra para número o input
//TODO: Separar o inputText em um componente global
//TODO: Criar testes unitários
//TODO: Separar a tela na pasta screens
//TODO: Colocar validação para habilitar o botão caso o input não seja um número
//TODO: Separar a regra de negócio

interface IAppState {
  qtdNumbers: string;
  numbers: number[];
}

export default class App extends Component<{}, IAppState> {
  state: IAppState = {
    qtdNumbers: '',
    numbers: [],
  };

  changeQtdNumber = (qtd: string) => {
    this.setState({ qtdNumbers: qtd });
  };

  numberGeneratorValid = (numbers: number[]): number => {
    const newNumber = Math.floor(Math.random() * 60) + 1;
    return numbers.includes(newNumber) ? this.numberGeneratorValid(numbers) : newNumber;
  };

  numbersGenerator = () => {
    const count = parseInt(this.state.qtdNumbers, 10);
    if (!isNaN(count)) {
      const newNumbers: number[] = [];
      for (let i = 0; i < count; i++) {
        newNumbers.push(this.numberGeneratorValid(newNumbers));
      }
      this.setState({ numbers: newNumbers });
    }
  };

  renderNumbers = () => {
    return this.state.numbers.map((number, index) => (
      <Text key={index} style={styles.number}>
        {number}
      </Text>
    ));
  };

  render() {
    return (
      <ContainerScreen>
        <Title text={`Gerador de Palpites ${this.state.qtdNumbers}`} />
        <View style={styles.wrapper}>
          <GenericText text="Quantidade de números a jogar:" />
          <TextInput
            value={this.state.qtdNumbers}
            autoFocus
            keyboardType="numeric"
            multiline={false}
            style={styles.textInput}
            onChangeText={this.changeQtdNumber}
          />
        </View>
        <View style={styles.numbers}>
          {this.renderNumbers()}
        </View>
        <Button label="Gerar palpite" onPress={this.numbersGenerator} disabled={!this.state.qtdNumbers} />
      </ContainerScreen>
    );
  }
}
