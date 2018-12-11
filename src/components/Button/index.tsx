import * as React from 'react';
import './style.scss';

export interface ButtonProps {
  label: string;
}

export class Button extends React.Component<ButtonProps> {
  render() {
    return (
      <button
        type="button"
        className="btn"
      >
        {this.props.label}
      </button>
    );
  }
}