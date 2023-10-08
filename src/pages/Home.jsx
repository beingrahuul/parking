import styled from "styled-components"
import Card from "../components/Card"
import Table from "../components/Table"


const Container = styled.div`
  width: 100%;
  height: 100%;
  color: #D8D9DA;
  background-color: #272829;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`

const CardContainer = styled.div`
  margin-top: 1rem;
  width: 100%;
  color: #D8D9DA;
  display: flex;
  justify-content: space-around;
`

const Heading = styled.h1`
  margin: 20px;
  padding: 0;
  font-size: 1.8rem;
  font-weight: 400;
  margin-bottom: 1rem;
  color: #ffffff;
`

function Home() {
  return (
    <Container>
      <CardContainer>
        <Card number={126} title={"Avaliable Parking Space"} info={"Information Today"}/>
        <Card number={84} title={"Occupied Parking Space"} info={"Information Today"}/>
        <Card number={126} title={"Payment Pending"} info={"Information Today"}/>
      </CardContainer>
      <Heading>Recent Parking</Heading>
      <Table />
    </Container>
  )
}

export default Home