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

import { FlexboxContainer, MainTitle, TextParagraph, AboutMeSection, Subtitle } from "../UI";

import { blackestBlueTransp } from "../UI/variables";

const ApresentationBox = styled.div`
  ${FlexboxContainer({ justify: 'flex-start', align: 'flex-start' })};
  position: relative;
  margin: 0 50px;
  z-index: 1;
`

const BackgroundApresentation = styled.div`
  position: absolute;
  width: 92%;
  height: 150px;
  background-color: #a3afbc;
  right: 0;
  top: 48px;
  z-index: 0;
`

const ProfileImg = styled.img`
  border-radius: 50%;
  width: 296px;
`

const TextBox = styled.div`
  border-radius: 8px;
  width: 100%;
  height: 50%;
  padding: 20px 36px;

  h1 {
    margin: 40px 0 20px;
    color: ${blackestBlueTransp};
  }

  p {
    text-align: justify;
    margin: 0 auto;
    margin-bottom: 20px;
    padding: 0 20px;
  }
`

const TechnologiesContainer = styled.div`
  width: 100%;
  ${FlexboxContainer({ direction: 'column' })};
  gap: 20px;
  padding: 0 50px;

  h2 {
    align-self: center;
    margin: 0 0 20px;
    color: ${blackestBlueTransp};
  }
`

const TechnologyList = styled.div`
  width: 100%;
  ${FlexboxContainer()};
  flex-wrap: wrap;
  gap: 30px;
  padding: 0 138px;
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
    position: absolute;
    bottom: 50px;
    opacity: 0;
    text-align: center;
  }

  &:hover p {
    bottom: 0;
    opacity: 1;
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
        <Subtitle data-aos="fade-up" data-aos-duration="1200">
          Entre as tecnologias que atuo, estão:
        </Subtitle>
        <TechnologyList data-aos="fade-right" data-aos-duration="1400">
          {technologiesToList.map(technology => (
            <TechnologyListItem key={technology.name}>
              <img src={technology.icon} alt={`Ícone do ${technology.name}`} />
              <p>{technology.name}</p>
            </TechnologyListItem>
          ))}
        </TechnologyList>
      </TechnologiesContainer>
    </AboutMeSection>
  )
}

export default AboutMe;