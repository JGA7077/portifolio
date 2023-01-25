import styled from "styled-components";

import profileImg from '../../assets/imgs/profile-photo.jpeg'
import knockoutIcon from '../../assets/imgs/knockoutJs-icon.png'
import htmlIcon from '../../assets/imgs/html-icon.png'
import cssIcon from '../../assets/imgs/css-icon.png'
import jsIcon from '../../assets/imgs/js-icon.png'
import reactIcon from '../../assets/imgs/react-icon.png'
import reduxIcon from '../../assets/imgs/redux-icon.webp'
import reactRouterIcon from '../../assets/imgs/react-router-icon.png'
import lessIcon from '../../assets/imgs/less-icon.webp'
import sassIcon from '../../assets/imgs/sass-icon.png'
import bootstrapIcon from '../../assets/imgs/bootstrap-icon.png'
import swiperIcon from '../../assets/imgs/swiper-js.svg'
import styledComponentsIcon from '../../assets/imgs/styled-components-icon.png'
import gulpJsIcon from '../../assets/imgs/gulp-js-icon.webp'
import jQueryIcon from '../../assets/imgs/jquery-icon.png'

import { FlexboxContainer, MainTitle, TextParagraph, AboutMeSection, Title } from "../UI";

import { blackestBlueTransp, navyBlue, silverFont } from "../UI/variables";

const ApresentationBox = styled.div`
  ${FlexboxContainer({ direction: 'column' })};
  position: relative;
  z-index: 1;

  @media (min-width: 1024px) {
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: row;
  }

  @media (min-width: 1199px) {
    justify-content: flex-start;
    align-items: flex-start;
  }
`

const BackgroundApresentation = styled.div`
  position: absolute;
  width: 100%;
  height: 100px;
  background-color: #8d98aa;
  right: 0;
  top: 68px;
  z-index: 0;

  @media (min-width: 1199px) {
    width: 80%;
    height: 150px;
    background-color: #8d98aa;
  }
`

const ProfileImg = styled.img`
  border-radius: 50%;
  width: 215px;
  margin-top: 48px;

  @media (min-width: 1199px) {
    width: 296px;
    position: relative;
  }
`

const TextBox = styled.div`
  border-radius: 8px;
  width: 100%;
  height: 50%;

  h1 {
    margin: 20px 0;
    color: ${blackestBlueTransp};

    @media (min-width: 1024px) {
      margin: 90px 0 20px;
    }
  }

  p {
    text-align: center;
    margin: 0 auto;
    margin-bottom: 20px;

    @media (min-width: 1024px) {
      text-align: justify;
      padding: 0px 50px;
    }
  }
`

const TechnologiesContainer = styled.div`
  width: 100%;
  ${FlexboxContainer({ direction: 'column' })};
  gap: 20px;

  h2 {
    align-self: center;
    margin: 0 0 20px;
    color: #204467;
  }
`

const TechnologyList = styled.div`
  width: 100%;
  ${FlexboxContainer()};
  flex-wrap: wrap;
  gap: 0px 50px;

  @media (min-width: 1024px) {
    gap: 30px 50px;
  }
`

const TechnologyListItem = styled.div`
  position: relative;
  ${FlexboxContainer({ direction: 'column' })};
  gap: 30px;
  padding-bottom: 30px;
  min-height: 150px;

  img {
    width: 100px;
    height: 100%;
  }

  p {
    text-align: center;
    font-weight: 700;
    color: ${navyBlue};
  }

  @media (min-width: 1024px) {
    p {
      opacity: 0;
      position: absolute;
      bottom: 50px;
      color: ${silverFont};
      line-height: 16px;
    }

    &:hover p {
      color: #597790;
      bottom: -25px;
      opacity: 1;
    }
  }

  
`

const technologiesToList = [
  {
    name: 'HTML5',
    icon: htmlIcon,
  },
  {
    name: 'CSS3',
    icon: cssIcon,
  },
  {
    name: 'Javascript',
    icon: jsIcon,
  },
  {
    name: 'LESS',
    icon: lessIcon,
  },
  {
    name: 'SASS',
    icon: sassIcon,
  },
  {
    name: 'Bootstrap',
    icon: bootstrapIcon,
  },
  {
    name: 'React',
    icon: reactIcon,
  },
  {
    name: 'Redux',
    icon: reduxIcon,
  },
  {
    name: 'React Router Dom',
    icon: reactRouterIcon,
  },
  {
    name: 'Styled Components',
    icon: styledComponentsIcon,
  },
  {
    name: 'KnockoutJS',
    icon: knockoutIcon,
  },
  {
    name: 'Swiper JS',
    icon: swiperIcon,
  },
  {
    name: 'JQuery',
    icon: jQueryIcon,
  },
  {
    name: 'Gulp JS',
    icon: gulpJsIcon,
  },
]

const AboutMe = () => {

  return (
    <AboutMeSection id="apresentacao">
      <BackgroundApresentation />
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-12">
            <ApresentationBox>
              <ProfileImg src={profileImg} alt="Foto de Perfil" data-aos="fade-right" data-aos-duration="1000" />
              <TextBox>
                <MainTitle data-aos="fade-up" data-aos-duration="1100">Prazer, João Gabriel</MainTitle>
                <TextParagraph data-aos="fade-up" data-aos-duration="1200">
                  Tenho 29 anos, sou desenvolvedor FrontEnd e comecei a estudar desenvolvimento web a cerca de 3 anos. Tive a primeira oportunidade de ingressar na área como FrontEnd Júnior por volta de 1 ano e meio, hoje tenho trabalhado como Freelancer e estou em busca de enfrentar novos desafios e obter novos conhecimentos.
                </TextParagraph>
              </TextBox>
            </ApresentationBox>

            <TechnologiesContainer>
              <Title data-aos="fade-up" data-aos-duration="1200">
                Entre as tecnologias que atuo, estão:
              </Title>
              <TechnologyList data-aos="fade-right" data-aos-duration="1400">
                {technologiesToList.map(technology => (
                  <TechnologyListItem key={technology.name}>
                    <img src={technology.icon} alt={`Ícone do ${technology.name}`} />
                    <p>{technology.name}</p>
                  </TechnologyListItem>
                ))}
              </TechnologyList>
            </TechnologiesContainer>
          </div>
        </div>
      </div>
    </AboutMeSection>
  )
}

export default AboutMe;