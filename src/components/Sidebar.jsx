import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { getUser } from '../utils/storageUtils'

const SidebarContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: #61677A;
  color: #D8D9DA;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const LogoContainer = styled.div`
  width: 100%;
  min-height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #fff6e08d;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
`

const Logo = styled.h1`
  font-size: 2rem;
  color: #FFF6E0;
  margin: 0;
  padding: 0;
`

const Label = styled.p`
  font-size: 0.8rem;
  margin: 0;
  padding: 0px 0px 0px 20px; 
  opacity: 0.5; 
`

const MenuContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  
  & a {
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: #D8D9DA;
  }
`

const MenuItem = styled.div`
  width: 80%;
  height: 100%;
  padding: 0px 10px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: #FFF6E0;
    color: #61677A;
  }
`




function Sidebar() {
  const user = getUser()
  return (
    <SidebarContainer>
      <LogoContainer>
        <Logo>Parking</Logo>
      </LogoContainer>
      <Label>Menu</Label>
      <MenuContainer>
        <Link to='/'>
          <MenuItem>Dashboard</MenuItem>
        </Link>
        <Link to='/parking'>
          <MenuItem>Parking</MenuItem>
        </Link>
        <Link to='/booking'>
          <MenuItem>Booking</MenuItem>
        </Link>
        <Link to='/space'>
          <MenuItem>Parking Space Overview</MenuItem>
        </Link>
        <Link to='/payment'>
          <MenuItem>Payment</MenuItem>
        </Link>
        {!user &&
          <Link to='/Login'>
            <MenuItem>Login</MenuItem>
          </Link>
        }
      </MenuContainer>
    </SidebarContainer>
  )
}

export default Sidebar