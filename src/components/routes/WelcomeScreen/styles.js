import React from 'react'
import Button from '@material-ui/core/Button';
import styled from 'styled-components'
import Input from '@material-ui/core/Input';
import { InputLabel } from '@material-ui/core';

export const Welcome = styled.div`
  width: 500px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

export const Header = styled.h1`
  font-family: "Muli";
  text-align: center;
  font-size: 62px;
  color: white;
`

export const Form = styled.form`
  display: block;
  clear: both;
  margin-top: 35px;
`

export const StyledInputLabel = styled(InputLabel)`
  color: white;
  &.Mui-focused {
    color: white;
  }
`

export const StyledInput = styled(Input)`
  color: white;
  display: block;
  width: 350px;
  &:before,
  &:after,
  &:hover {
      border-color:white;
  }
  &:hover {
      &:before {
        border-bottom: 2px solid white !important;
      }
  }
`

export const StyledButton = styled(Button)`
  background: linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%);
  border-radius: 3px;
  border: 0;
  color: white;
  height: 48px;
  padding: 0 30px;
  box-shadow: 0 3px 5px 2px rgba(255, 105, 135, .3);
`;