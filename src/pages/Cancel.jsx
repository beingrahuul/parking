import React from 'react'
import { StyledLink, Container } from '../components/styled/FormStyles'

function Cancel() {
  return (
    <Container style={{
      color: 'red',
      display: 'flex', 
      flexDirection: "column", 
      alignItems:"center", 
      justifyContent:"center"
    }}>Your booking got cancelled
      <br/>
      <br/>
      <StyledLink to="/">Back to home</StyledLink>
    </Container>
  )
}

export default Cancel