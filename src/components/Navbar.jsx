import styled from "styled-components"

//icons
import SearchSVG from "../icons/search.svg"
import settingSVG from "../icons/setting.svg"
import NotificationSVG from "../icons/notification.svg"
import HelpSVG from "../icons/help.svg"

//user
import { getUser } from "../utils/storageUtils"


const NavbarContainer = styled.div`
  width: 100%;
  min-height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #fff6e08d;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  background-color: #61677A;
  overflow: hidden;
`

const SearchContainer = styled.div`
  width: 40%;
  height: 60%;
  display: flex;
  align-items: center;
  margin: 0rem 1rem;
  background-color: #ffffff67;
  border-bottom: 1px solid #fff6e08d;
  border-radius: 5px;
  gap: 0.5rem;

`

const SearchIcon = styled.div`
  width: 50px;
  height: 50px;
  color: #FFF6E0;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.4;
  & img { 
    width: 70%;
    height: 70%;
  }
`

const SearchInput = styled.input` 
  width: 100%;
  height: 100%;
  background-color: transparent;
  border: none;
  outline: none;
  color: #ffffff;
  font-size: 0.9rem;
  font-weight: 400;
  font-family: 'poppins', sans-serif;
  &::placeholder {
    color: #ffffff;
    opacity: 0.8;
  }
  &focus {
    border: none;
    outline: none;
  }
`

const ProfileContainer = styled.div`
  height: 100%;
  display: flex;
  gap: 30px;
  align-items: center;
  margin: 0rem 1rem;
`

const MenuContainer = styled.div`
  height: 100%;
  display: flex;
  gap: 10px;
  align-items: center;
`

const MenuItem = styled.div`
  width: 24px;
  height: 24px;
  padding: 0px 10px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  cursor: pointer;
  opacity: 0.6;
  & img {
    width: 100%;
    height: 100%;
  }  
`

const Profile = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  & img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
`

const Name = styled.p`
  font-size: 0.9rem;
  font-weight: 500;
  color: #ffffff;
  margin: 0;
  padding: 0;
  margin-right: 1rem;
`




function Navbar() {
  const user = getUser()
  return (
    <NavbarContainer>
      <SearchContainer>
        <SearchIcon>
          <img src={SearchSVG} alt="search" />
        </SearchIcon>
        <SearchInput placeholder="Registration number or booking name" />
      </SearchContainer>
      <ProfileContainer>
        <MenuContainer>
          <MenuItem>
            <img src={NotificationSVG} alt="Notification" />
          </MenuItem>
          <MenuItem>
            <img src={settingSVG} alt="Setting" />
          </MenuItem>
          <MenuItem>
            <img src={HelpSVG} alt="Help" />
          </MenuItem>
        </MenuContainer>
        {user && 
          <Name>{user.name}</Name>
        }
      </ProfileContainer>
    </NavbarContainer>
  )
}

export default Navbar