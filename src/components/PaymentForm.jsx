import styled from "styled-components"
import CreditCard from "./CC/CreditCard"

const Container = styled.div`
  width: 80%;
  height: 80%;
  display: flex;
  border-radius: 10px;
  overflow: hidden;
  background-color: #fff;
  color: #000000;
`

const Left = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  background-color: #b6b2b2;
`

const LogoContainer = styled.div`
  width: 100%;
  margin-top: 0.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Logo = styled.h1`
  font-size: 1.4rem;
  color: #FFF6E0;
  margin: 0;
  padding: 0;
`

const Info = styled.div`
  width: 100%;
  height: 20px;
  font-size: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    text-decoration: underline;
    color: aliceblue;
  }
`

const ItemContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 0px;
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: #FFF6E0;
  }
`

const Item = styled.div`
  flex: 2;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-decoration: none;
  color: #000000;
  cursor: pointer;
  
`

const ItemName = styled.p`
  font-size: 1rem;
  margin: 0;
  padding: 0px 0px 0px 20px;
  opacity: 1;
`

const ItemInfo = styled.div`
  width: 100%;
  font-size: 0.6rem;
  color: #000000;
  display: flex;
  align-items: center;
  padding: 0px 0px 0px 20px;
`

const Price = styled.div`
  flex: 1;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Line = styled.div`
  width: 90%;
  background-color: #000000;
  border-bottom: 1px solid #000000;
  opacity: 0.2;
`


const Right = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
`


function PaymentForm() {
  return (
    <Container>
      <Left>
        <LogoContainer>
          <Logo>Payment</Logo>
        </LogoContainer>
        <Info>Download Your invoice in PDF fromat</Info>
        <ItemContainer>
          <Item>
            <ItemName>Demo Item</ItemName>
            <ItemInfo>
              1 hour
            </ItemInfo>
          </Item>
          <Price>$0.00</Price>
        </ItemContainer>

        <ItemContainer>
          <Item>
            <ItemName>Demo Item</ItemName>
            <ItemInfo>
              1 hour
            </ItemInfo>
          </Item>
          <Price>$0.00</Price>
        </ItemContainer>

        <ItemContainer>
          <Item>
            <ItemName>Demo Item</ItemName>
            <ItemInfo>
              1 hour
            </ItemInfo>
          </Item>
          <Price>$0.00</Price>
        </ItemContainer>

        <ItemContainer>
          <Item>
            <ItemName>Discounts & Offers</ItemName>
          </Item>
          <Price>$0.00</Price>
        </ItemContainer>

        <Line/>

        <ItemContainer>
          <Item>
            <ItemName>Tax</ItemName>
          </Item>
          <Price>$0.00</Price>
        </ItemContainer>

        <ItemContainer>
          <Item>
            <ItemName>Total</ItemName>
          </Item>
          <Price>$0.00</Price>
        </ItemContainer>
      </Left>
      <Right>
        <CreditCard />
      </Right>
    </Container>
  )
}

export default PaymentForm