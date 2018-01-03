/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Style from './src/Style';
import InputButton from './src/components/InputButton';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});
const inputButtons = [
    [1, 2, 3, '/'],
    [4, 5, 6, '*'],
    [7, 8, 9, '-'],
    [0, '.', '=', '+']
];

export default class App extends Component<{}> {
  constructor(props) {
    super(props);
    this.state = {
      previousInputValue: 0,
      inputValue: 0,
      selectedSymbol: null
    }
  }
  renderInputButtons() {
    let views = [];
    for (var r = 0; r < inputButtons.length; r ++) {
      let row = inputButtons[r];
      let inputRow = [];
      for (var i = 0; i < row.length; i ++) {
        let input = row[i];
        inputRow.push(
            <InputButton
              value={input}
              highlight={this.state.selectedSymbol === input}
              onPress={this.onInputButtonPressed.bind(this, input)}
              key={r + "-" + i}
            />
        );
      }
      views.push(<View style={Style.inputRow} key={"row-" + r}>{inputRow}</View>)
    }
    return views;
  }
  onInputButtonPressed(input) {
    alert(input)
  }

  onInputButtonPressed(input) {
    switch (typeof input) {
      case 'number':
        return this.handleNumberInput(input)
      case 'string':
        return this.handleStringInput(input)
    }
  }

  handleNumberInput(num) {
    let inputValue = (this.state.inputValue * 10) + num;
    this.setState({
      inputValue: inputValue
    })
  }

  handleStringInput(str) {
    switch (str) {
      case '/':
      case '*':
      case '+':
      case '-':
        this.setState({
          selectedSymbol: str,
          previousInputValue: this.state.inputValue,
          inputValue: 0
        });
        break;
      case '=':
        let symbol = this.state.selectedSymbol,
            inputValue = this.state.inputValue,
            previousInputValue = this.state.previousInputValue;
        if (!symbol) {
          return;
        }
        this.setState({
          previousInputValue: 0,
          inputValue: eval(previousInputValue + symbol + inputValue),
          selectedSymbol: null
        });
        break;
     }
   }

  render() {
    return (
      <View style={Style.rootContainer}>
        <View style={Style.displayContainer}>
          <Text style={Style.displayText}>{this.state.inputValue}</Text>
        </View>
        <View style={Style.inputContainer}>
          {this.renderInputButtons()}
        </View>
      </View>
    );
  }
}
