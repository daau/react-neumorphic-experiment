import React from 'react';
import styled from 'styled-components';

export const Button = styled.button`
  position: relative;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: none;
  outline: none;
  background: ${props => props.theme.bgColor};
  transition: all 100ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
  box-shadow: 0px -6px 10px rgba(255, 255, 255, 1), 0px 4px 15px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  &:after {
    // buttons pseudo element
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    z-index: 2;
  }
  &:active {
    // button state active
    box-shadow: 0 15px 20px rgba(0, 0, 0, 0.02);
    color: blue;
    &:after {
      box-shadow: inset 0px -2px 5px rgb(255, 255, 255),
        inset 0px 2px 5px rgba(0, 0, 0, 0.15);
    }
  }
`;

export const ButtonDigital = styled.button`
  background-color: #fbfbfb;
  width: 200px;
  height: 60px;
  outline: none;
  border: 3px solid #7b7b7b;
  border-radius: 5px;
  font-size: 20px;
  box-shadow: inset 0px 2px 0px rgb(255, 255, 255);

  &:hover {
    background-color: white;
    cursor: pointer;
  };

  &:active {
    color: #539bf7;
    background-color: #f2f2f2;
    text-shadow: 2px 2px 20px #46b2ff70;
    box-shadow: inset 0px 1px 0px 2px rgb(183, 183, 183);
  };  
`;

export const ButtonDigitalBlue = styled.button`
  background-image: linear-gradient(to right, #67b9ff 0%, #2e9bf7 100%);
  box-shadow: inset 0 1px 3px #ffffffa8, inset 0px -1px 3px #6d6d6d94;
  border: 2px solid dimgrey;
  width: 200px;
  height: 60px;
  outline: none;
  border-radius: 5px;
  font-size: 20px;
  color: white;

  &:active {
    box-shadow: inset 0px 0px 9px 0px rgb(111,111,111), inset 0px 15px 15px 0px rgba(0, 0, 0, 0.2);
  };
`;

export const ButtonDigitalBlueTwo = styled.button`
  background-image: linear-gradient(to right, #67b9ff 0%, #2e9bf7 100%);
  box-shadow: inset 0 1px 3px #ffffffa8, inset 0px -1px 3px #6d6d6d94, 0 0 1px 2px #676767;
  border: 2px solid dimgrey;
  width: 200px;
  height: 60px;
  outline: none;
  border-radius: 5px;
  border: none;
  font-size: 20px;
  color: white;

  &:active {
    box-shadow: inset 0px 0px 9px 0px rgb(111,111,111), inset 0px 15px 15px 0px rgba(0, 0, 0, 0.2), 0 0 1px 2px #676767;
  };
`;

export default Button;