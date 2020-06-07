import React from 'react';
import styled from 'styled-components';

export const Input = styled.input`
  height: 0.5rem;
  border: none;
  outline: none;
  padding: 18.5px 14px;
  width: 100%;
  background-color: ${props => props.theme.bgColor};
  box-shadow: 0 15px 20px rgba(0, 0, 0, 0.02);
    box-shadow: inset 0px -2px 5px rgb(255, 255, 255),
      inset 0px 2px 5px rgba(0, 0, 0, 0.15);
`;

export default Input;