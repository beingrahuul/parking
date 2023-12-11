import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from './context/CartContext';

//pages
import Home from "./pages/Home";
import Booking from "./pages/Booking";
import Payment from "./pages/Payment";
import Space from "./pages/Space";
import Registration from "./pages/Register";
import Login from "./pages/Login";
import Parking from "./pages/Parking";
import Success from "./pages/Success";
import Cancel from "./pages/Cancel";

//components
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import ManageParking from "./pages/ManageParking";


const Container = styled.div`
  display: flex;
  width: 100%;
  background-color: #272829;
  color: #D8D9DA;
`;

const Left = styled.div`
  min-width: 250px;
  max-width: 250px;
  border-right: 1px solid #FFF6E0;
  height: 100vh;
`;

const Right = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;


function App() {
  return (
    <CartProvider>
    <BrowserRouter>
    <Container>
      <Left>
        <Sidebar />
      </Left>
      <Right>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/space" element={<Space />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/register" element={< Registration/>} />
          <Route path="/login" element={< Login/>} />
          <Route path="/parking" element={< Parking/>} />
          <Route path="/parking/manage/:id" element={< ManageParking/>} />
          <Route path="/success" element={< Success/>} />
          <Route path="/cancel" element={< Cancel/>} />
        </Routes>
      </Right>
    </Container>
    </BrowserRouter>
    </CartProvider>
  );
}

export default App;
