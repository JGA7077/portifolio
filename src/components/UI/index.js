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
  ${FlexboxContainer({direction: 'column'})}
  position: absolute;
  top: 60px;
  left: -1000%;
  gap: 30px;
  width: 100vw;
  background-color: #182434f5;
  padding: 30px 0;

  &.open {
    left: -15px;
  }
  
  @media (min-width: 1024px) {
    flex-direction: row;
    left: 0;
    top: 0;
    background-color: transparent;
    width: 100%;
    height: 100%;
  }
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
  position: relative;
  background-image: linear-gradient(#182434f5,#799cbff0,#d4e4ed);
  
  @media (min-width: 1199px) {
    height: 100vh;
  }
`

export const MainTitle = styled.h1`
  font-family: 'Playfair Display', serif;
  width: 100%;
  font-size: 33px;
  font-weight: 700;
  text-align: center;

  @media (min-width: 1024px) {
    font-size: 48px;
  }
`

export const Title = styled.h2`
  font-family: 'Playfair Display', serif;
  width: 100%;
  font-size: 33px;
  font-weight: 700;
  text-align: center;
  color: ${silverFont};

  @media (min-width: 1024px) {
    font-size: 38px;
  }
`

export const Subtitle = styled.h3`
  font-family: 'Playfair Display', serif;
  width: 100%;
  font-size: 30px;
  font-weight: 700;
  text-align: center;
  color: ${navyBlue};
  margin-bottom: 15px;
`

export const TextParagraph = styled.p`
  font-size: 20px;

  @media (min-width: 1024px) {
    font-size: 24px;
  }
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
    text-align: center;

    @media (min-width: 1024px) {
      padding: 0px 150px;
    }

    @media (min-width: 1199px) {
      padding: 0px 200px;
    }
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
    grid-template-columns: 1fr;
    justify-items: center;
    gap: 30px;

    @media (min-width: 1024px) {
      grid-template-columns: repeat(3, 1fr);
    }
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