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
    &:after {
      box-shadow: inset 0px -2px 5px rgb(255, 255, 255),
        inset 0px 2px 5px rgba(0, 0, 0, 0.15);
    }
  }
`;

export default Button;