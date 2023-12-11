import PaymentForm from "../components/PaymentForm"
import styled from "styled-components"



const PaymentContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
`

const Title = styled.h1`
  font-size: 2rem;
  margin: 0;
  padding: 0;
  font-weight: 400;
`


function Payment() {
  return (
    <PaymentContainer>
      <Title>Payment</Title>
      <PaymentForm/>
    </PaymentContainer>
  )
}

export default Payment