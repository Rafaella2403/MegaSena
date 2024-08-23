import React, { Component } from 'react';
import { Text } from 'react-native';

import styles from './GenericText.style';

interface IGenericText {
  text: string;
}

export default class GenericText extends Component<IGenericText> {
  render() {
    return <Text style={styles.title}>{this.props.text}</Text>;
  }
}
