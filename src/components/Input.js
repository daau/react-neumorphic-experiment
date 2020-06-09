import React from 'react';
import styled from 'styled-components';

export const Input = styled.input`
  height: 0.5rem;
  border: none;
  outline: none;
  padding: 18.5px 14px;
  font-size: 14px;
  width: 100%;
  box-sizing: border-box;
  background-image: linear-gradient(to right, #ebebf0, #e5e5e8);
  border-radius: 10px;
  box-shadow: inset -3px -3px 6px 0px rgba(255, 255, 255, 0.95), inset 2px 2px 5px rgba(42, 86, 125, 0.37);

  ::placeholder {
    color: #b7b7b7;
  }
`;

export default Input;