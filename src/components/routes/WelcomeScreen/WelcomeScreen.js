import React, { useState } from 'react'
import PropTypes from 'prop-types'
import FormControl from '@material-ui/core/FormControl'
import File from 'helpers/File'

import { Welcome, Header, Form, StyledInput, StyledInputLabel, StyledButton} from './styles'

const FirstRunHomeScreen = ({ updateUrlTab }) => {
  const [search, setSearch] = useState('')

  const onSubmit = () => {
    updateUrlTab({ url: search })
    File.write('url', search)
  }

  return (
    <Welcome>
      <Header>
        Web responsive viewer
        <Form onSubmit={onSubmit}>
          <FormControl>
            <StyledInputLabel htmlFor="my-input">Website adress</StyledInputLabel>
            <StyledInput onChange={(e) => setSearch(e.target.value)} id="my-input" aria-describedby="my-helper-text" />
          </FormControl>
          <StyledButton onClick={onSubmit}>Start testing</StyledButton>
        </Form>
      </Header>
    </Welcome>
  )
}

FirstRunHomeScreen.propTypes = {
  updateUrlTab: PropTypes.func.isRequired,
}

export default FirstRunHomeScreen
