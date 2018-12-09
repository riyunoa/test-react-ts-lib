import * as React from 'react';
export interface ButtonProps {
    label: string;
}
export default class Button extends React.Component<ButtonProps> {
    render(): JSX.Element;
}
