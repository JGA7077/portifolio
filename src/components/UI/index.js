import styled from "styled-components";

// Mixins

export const FlexboxContainer = (justify = 'center', align = 'center', direction = 'row') => `
  display: flex;
  justify-content: ${justify};
  align-items: ${align};
  flex-direction: ${direction};
`

// Components

export const List = styled.ul`
  ${FlexboxContainer()}
  height: 100%;
  gap: 50px;
`

export const ListItem = styled.li`
  position: relative;
  color: #ede9e8;
  
  &::after {
    right: 25px;
    transition: right 200ms linear;
    content: "";
    position: absolute;
  }

  &:hover::after {
    bottom: -19px;
    width: 100%;
    height: 6px;
    right: 0;
    background: #89b6c6;
    /* background: #6d829b; */
    border-radius: 3px;
  }
`

export const LinkItem = styled.a`
  font-weight: 700;
`