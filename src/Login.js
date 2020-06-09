import React from 'react';
import styled from 'styled-components';
import Input from './components/Input';
import FormField from './components/FormField';

const Button = styled.button`
  position: relative;
  width: 250px;
  height: 40px;
  border-radius: 20px;
  border: none;
  outline: none;
  color: white;
  background-image: linear-gradient(135deg, #a5cdff, #4b7eda);
  transition: all 100ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
  box-shadow: -5px -5px 13px 0px rgba(255,255,255,1), 2px 2px 9px rgba(21, 34, 111, 0.5);
  cursor: pointer;
  transition: box-shadow ease-in 100ms;
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
    box-shadow: none;
    transition: box-shadow ease-in 100ms;
  }
`;

const Login = ({className}) => {
  return(
    <div className={className}>
      <div className="container">
        <div className="panel">
          <div className="title">
            <h1>Sco</h1>
          </div>
          <div className="header">
            <h1>Hello!</h1>
            <p>Welcome back</p>
          </div>
          <div className="form-fields">
            <FormField>
              <Input placeholder="Email Address"/>
            </FormField>
            <FormField>
              <Input placeholder="Password" type="password"/>
            </FormField>
          </div>
          <div className="button-group">
            <Button>
              Login
            </Button>
            <p>
              Don't have an account? <a>Sign up.</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export const StyledLogin = styled(Login)`
  display: flex;
  align-items: center;
  height: 100%;

  .title {
    margin-bottom: 3em;
    text-align: right;
    h1 {
      background-image: linear-gradient(45deg, #99c3fa, #5b8ce1);
      display: inline-block;
      padding: 20px;
      margin-right: -20px;
      border-radius: 15px;
      color:white;
    }
  }

  .container {
    width: 100%;
    max-width: 1140px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    justify-content: center;
  }

  .header {
    margin-bottom: 3em;
  }

  .form-fields {
    margin-bottom: 3em;
  }

  .button-group {
    button {
      width: 100%;
      display: block;
    }

    p {
      margin-top: 1.5em;
      font-size:12px;
      text-align: center;
    }
  }

  a {
    color: #2367d0;
    font-weight: bold;
  }

  h1 {
    margin: 0.2em 0;
  }

  p {
    margin: 0;
  }

  .panel {
    width:100%;
    max-width: 33%;
    background-color: rgb(235, 235, 240);
    padding: 80px 50px;
    padding-top: 20px;
    border-radius: 20px;
  }
`;

export default StyledLogin