import styled from "styled-components"

const CardContainer = styled.div`
  height: 200px;
  width: 360px;
  background-color: #FFF6E0;
  color: #272829;
  display: flex;
  flex-direction: column;
  gap: 5px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`

const Number = styled.h1`
  width: 80%;
  font-size: 3rem;
  margin: 0;
  padding: 0;
`

const Title = styled.h2`
  width: 80%;
  font-size: 1rem;
  margin: 0;
  padding: 0;
`

const Info = styled.p`
  width: 80%;
  font-size: 0.8rem;
  margin: 0;
  padding: 0;
  color: #61677A;
`

function Card({number, title, info}) {
  return (
    <CardContainer>
      <Number>{number}</Number>
      <Title>{title}</Title>
      <Info>{info}</Info>
    </CardContainer>
  )
}

export default Card