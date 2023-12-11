import styled from "styled-components"
import { createPaymentLink } from "../api/paymentService.js"

import { useCart } from '../context/CartContext';

const Container = styled.div`
  width: 80%;
  height: 80%;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  overflow: hidden;
  background-color: #b6b2b2;
  gap: 1rem;  
  align-items: center;
  color: #000000;
`

const Left = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  flex-direction: column;
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
  width: 50%;
  display: flex;
  gap: 0px;
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: #FFF6E0;
  }
`

const Item = styled.div`
  flex: 3;
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

const CheckoutButton = styled.button`
  background-color: #000;
  color: #fff;
  padding: 10px 20px;
  border: none;
  margin-top: 20px;
  font-size: 1rem;
  font-weight: 400;
  border-radius: 1px;
  width: 25%;
  cursor: pointer;
`;

function PaymentForm() {
  const { items } = useCart();
  const totalPrice = items.reduce((total, item) => total + item.price, 0);
  console.log(items, totalPrice);
  const itemss = [
    {"id": 1, "quantity": 3},
    {"id": 2, "quantity": 2}
  ]
  const handleclick = async () => {
    console.log("clicked");
    try {
      const {data} = await createPaymentLink(itemss);
      window.location = data.url
    }catch(err) {
      console.log(err);
    }
  }

  return (
    <Container>
        <LogoContainer>
          <Logo>Payment</Logo>
        </LogoContainer>
        <Info>Download Your invoice in PDF fromat</Info>


        {items.map((item) => (
          <ItemContainer>
            <Item>
              <ItemName>{item.type} parking</ItemName>
              <ItemInfo>
                Slot no. {item.slotNumber}
              </ItemInfo>
            </Item>
            <Price>₹{item.price}.00</Price>
          </ItemContainer>
        ))}

        <ItemContainer>
          <Item>
            <ItemName>Discounts & Offers</ItemName>
          </Item>
          <Price>₹0.00</Price>
        </ItemContainer>

        <Line/>

        <ItemContainer>
          <Item>
            <ItemName>Tax</ItemName>
          </Item>
          <Price>₹0.00</Price>
        </ItemContainer>

        <ItemContainer>
          <Item>
            <ItemName>Total</ItemName>
          </Item>
          <Price>₹{totalPrice}.00</Price>
        </ItemContainer>
        <CheckoutButton onClick={handleclick}>Checkout</CheckoutButton>
    </Container>
  )
}

export default PaymentForm