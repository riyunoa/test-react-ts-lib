import * as React from 'react';

export interface ButtonProps {
  label: string;
}

export class Button extends React.Component<ButtonProps> {
  render() {
    return (
      <button
        type="button"
      >
        {this.props.label}
      </button>
    );
  }
}