import React, { Component, ReactNode } from 'react';
import { View } from 'react-native';

import styles from './ContainerScreen.style';

interface IContainerScreen {
  children: ReactNode;
}

export default class ContainerScreen extends Component<IContainerScreen> {
  render() {
    return <View style={styles.container}>{this.props.children}</View>;
  }
}
