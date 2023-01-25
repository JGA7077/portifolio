import styled from "styled-components";
import MenuList from "../MenuList/MenuList";
import { useMobile } from "../../hooks/use-mobile";
import { useState } from "react";

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
  width: 100%;
  position: relative;
`

const MenuContainer = styled.div`
  display: inline-block;
  cursor: pointer;
  position: absolute;
  top: 10px;

  .menu-bar {
    width: 35px;
    height: 5px;
    background-color: #fff;
    margin: 6px 0;
    transition: 0.4s;
    border-radius: 8px;
  }

  &.open {
    .first-bar {
      transform: translate(0, 11px) rotate(-45deg);
    }

    .second-bar {
      opacity: 0;
    }

    .third-bar {
      transform: translate(0, -11px) rotate(45deg);
    }
  }

  @media (min-width: 1024px) {
    display: none;
  }
`

const Header = () => {
  const isMobile = useMobile();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <HeaderContainer>
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-12">
            <NavList>
              <MenuList isMenuOpen={isMenuOpen} />
            </NavList>

            {isMobile && (
              <MenuContainer className={isMenuOpen ? 'open' : ''} onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <div className="menu-bar first-bar"></div>
                <div className="menu-bar second-bar"></div>
                <div className="menu-bar third-bar"></div>
              </MenuContainer>
            )}
          </div>
        </div>
      </div>
    </HeaderContainer>
  )
}

export default Header;