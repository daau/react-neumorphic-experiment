import React from 'react';
import styled from 'styled-components';
import Button, { ButtonDigitalBlueTwo, ButtonDigitalBlue } from './components/Button';
import Input from './components/Input';
// import TextField from './components/TextField';
// import RadioButton from './components/RadioButton';
// import Checkbox from './components/Checkbox';


const App = ({className}) => {
  return (
    <div className={className}>
      <div>
        <h1>Button</h1>
        <Button>Hello world</Button>
      </div>
      <div>
        <h1>ButtonDigital</h1>
        <ButtonDigitalBlueTwo>Hello world</ButtonDigitalBlueTwo>
      </div>
      <div>
        <h1>ButtonDigital</h1>
        <ButtonDigitalBlue>Hello world</ButtonDigitalBlue>
      </div>      
      <div>
        <h1>Input field</h1>
        <Input/>
      </div>
    </div>
  );
}

const StyledApp = styled(App)`
  padding: 100px;
  background-color: ${props => props.theme.bgColor};
`;

export default StyledApp;
