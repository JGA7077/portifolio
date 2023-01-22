import styled from "styled-components";
import MenuList from "../MenuList/MenuList";

const HeaderContainer = styled.header`
  height: 60px;
`

const NavList = styled.nav`
  height: 100%;
`

const Header = () => {
  return(
    <HeaderContainer>
      <NavList>
        <MenuList />
      </NavList>
    </HeaderContainer>
  )
}

export default Header;