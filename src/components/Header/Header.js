import styled from "styled-components";
import MenuList from "../MenuList/MenuList";

const HeaderContainer = styled.header`
  height: 60px;
  position: fixed;
  top: 0;
  width: 100%;
  background-color: #182434f5;
  z-index: 2;
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