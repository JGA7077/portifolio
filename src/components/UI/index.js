import styled from "styled-components";
import { blueBabe, blackestBlueTransp, navyBlue, silverFont } from "./variables";

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
  background-image: linear-gradient(#182434f5,#799cbff0,#d4e4ed);
`

export const MainTitle = styled.h1`
  font-family: 'Playfair Display', serif;
  width: 100%;
  font-size: 48px;
  text-align: center;
`

export const Title = styled.h2`
  font-family: 'Playfair Display', serif;
  width: 100%;
  font-size: 38px;
  text-align: center;
  color: ${silverFont};
`

export const Subtitle = styled.h3`
  font-family: 'Playfair Display', serif;
  width: 100%;
  font-size: 30px;
  text-align: center;
  color: ${navyBlue};
  margin-bottom: 15px;
`

export const TextParagraph = styled.p`
  font-size: 24px;
`

export const ProjectsList = styled.div`
  .project-container {
    margin-bottom: 50px;
  }

  .text-box {
    ${FlexboxContainer({ direction: 'column' })}
  }

  .text-box p {
    color: #eceff1;
    margin-bottom: 10px;
    padding: 0 300px;
    text-align: center;
  }

  .text-box a {
    margin-bottom: 15px;
    color: #597790;
  }

  .text-box a:hover {
    color: #eceff1;
  }

  .text-box .links-container {
    ${FlexboxContainer()}
    gap: 50px;
  }

  .prints-list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
    gap: 30px;
  }

  .card-item {
    max-width: 446px;
    cursor: pointer;
  }

  .card-item,
  .card-item img {
    width: 100%;
    height: 100%;
  }

  .card-item:hover img {
    transform: scale(1.1);
  }
`