import styled from "styled-components";
import { blueBabe } from "./variables";

// Mixins

export const FlexboxContainer = (props) => `
  display: flex;
  justify-content: ${props?.justify || 'center'};
  align-items: ${props?.align || 'center'};
  flex-direction: ${props?.direction || 'row'};
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
  cursor: pointer;
  
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
    background: ${blueBabe};
    border-radius: 3px;
  }

  a {
    font-weight: 700;
  }
`

export const AboutMeSection = styled.section`
  height: 100vh;
  padding: 0 20px;
  position: relative;
`

export const MainTitle = styled.h1`
  font-family: 'Playfair Display', serif;
  width: 100%;
  font-size: 48px;
  text-align: center;
`

export const Subtitle = styled.h2`
  font-family: 'Playfair Display', serif;
  width: 100%;
  font-size: 38px;
  text-align: center;
`

export const TextParagraph = styled.p`
  font-size: 24px;
`