import React from 'react'
import FormControl from '@material-ui/core/FormControl'

import { Welcome, Header, Form, StyledInput, StyledInputLabel, StyledButton} from './styles'

const FirstRunHomeScreen = () => (
  <Welcome>
    <Header>
      Web responsive viewer
      <Form>
        <FormControl>
          <StyledInputLabel htmlFor="my-input">Website adress</StyledInputLabel>
          <StyledInput id="my-input" aria-describedby="my-helper-text" />
        </FormControl>
        <StyledButton>Start testing</StyledButton>
      </Form>
    </Header>
  </Welcome>
)


export default FirstRunHomeScreen
