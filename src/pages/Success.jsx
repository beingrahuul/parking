import React from 'react'
import { StyledLink, Container } from '../components/styled/FormStyles'

function Success() {
  return (
    <Container style={{
      color: 'Green',
      display: 'flex', 
      flexDirection: "column", 
      alignItems:"center", 
      justifyContent:"center"
    }}>Your booking is confirmed
      <br/>
      <br/>
      <StyledLink to="/">Back to home</StyledLink>
    </Container>
  )
}

export default Success