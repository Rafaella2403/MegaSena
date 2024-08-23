import React, { Component } from 'react';
import { Text } from 'react-native';

import styles from './Title.style';

interface ITitle {
  text: string;
}

export default class Title extends Component<ITitle> {
  render() {
    return <Text style={styles.title}>{this.props.text}</Text>;
  }
}
