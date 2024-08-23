import React, { Component } from 'react';
import { Button as ButtonDefault } from 'react-native';

interface IButton {
  onPress: () => void;
  label: string;
  disabled: boolean;
}
export default class Button extends Component<IButton> {
  render() {
    return (
      <ButtonDefault
        title={this.props.label}
        onPress={this.props.onPress}
        color={'green'}
        disabled={this.props.disabled}
      />
    );
  }
}
