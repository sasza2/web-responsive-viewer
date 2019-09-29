import React from 'react'
import { Link } from 'react-router-dom'
import FormControl from '@material-ui/core/FormControl';
import { history } from 'react-router-dom'
import { Welcome, Header, Form, StyledInput, StyledInputLabel, StyledButton} from './styles'

const WelcomeScreen = () => {
  const [values, setValues] = React.useState({
    url: '',
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  }

  return (
  <Welcome>
    <Header>
      Web responsive viewer
      <Form onSubmit={handleSubmit}>
        <FormControl>
          <StyledInputLabel htmlFor="my-input">Website adress</StyledInputLabel>
          <StyledInput id="my-input" onChange={handleChange('url')} aria-describedby="my-helper-text"/>
        </FormControl>
        <StyledButton type="submit" disabled={!values.url}>Start testing</StyledButton>
      </Form>
    </Header>
  </Welcome>
  )
}


export default WelcomeScreen
