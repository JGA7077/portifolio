import styled from "styled-components";
import { ProjectsList, Title, Subtitle } from "../UI";

import Fancybox from "../Fancybox/Fancybox";

import smartBankPrint01 from '../../assets/imgs/prints/sb-01.png'
import smartBankPrint02 from '../../assets/imgs/prints/sb-02.png'
import smartBankPrint03 from '../../assets/imgs/prints/sb-03.png'

import petNoticiasPrint01 from '../../assets/imgs/prints/pn-01.png'
import petNoticiasPrint02 from '../../assets/imgs/prints/pn-02.png'
import petNoticiasPrint03 from '../../assets/imgs/prints/pn-03.png'

import sunnysideAgencyPrint01 from '../../assets/imgs/prints/sa-01.png'
import sunnysideAgencyPrint02 from '../../assets/imgs/prints/sa-02.png'
import sunnysideAgencyPrint03 from '../../assets/imgs/prints/sa-03.png'

import vinhoCiaPrint01 from '../../assets/imgs/prints/vc-01.png'
import vinhoCiaPrint02 from '../../assets/imgs/prints/vc-02.png'
import vinhoCiaPrint03 from '../../assets/imgs/prints/vc-03.png'

import aluraFormerPrint01 from '../../assets/imgs/prints/af-01.png'
import aluraFormerPrint02 from '../../assets/imgs/prints/af-02.png'
import aluraFormerPrint03 from '../../assets/imgs/prints/af-03.png'

import galleriaSassPrint01 from '../../assets/imgs/prints/gs-01.png'
import galleriaSassPrint02 from '../../assets/imgs/prints/gs-02.png'
import galleriaSassPrint03 from '../../assets/imgs/prints/gs-03.png'

export const ProjectsSection = styled.section`
  padding: 30px 20px;
  position: relative;
  background-image: linear-gradient(#799cbf, #b8ccdd);
`

export const ProjectsTitle = styled(Title)`
  font-size: 48px;
  margin-bottom: 20px;
  color: #204467;
`

const Projects = () => {

  const reposToShow = [
    {
      name: 'Smart Bank',
      id: 'smart-bank',
      description: 'Projeto feito através do curso do Alura sobre Styled Components e React',
      repoUrl: 'https://github.com/JGA7077/alura_react-styled-components',
      deployUrl: 'https://63cc82d1f84df008bb83b457--silver-bunny-bdaf92.netlify.app/',
      prints: [smartBankPrint01, smartBankPrint02, smartBankPrint03]
    },
    {
      name: 'Pet Notícias',
      id: 'pet-noticias',
      repoUrl: 'https://github.com/JGA7077/alura_react-router_Pet-noticias',
      description: 'Projeto feito através do curso do Alura sobre React Router Dom e React',
      deployUrl: 'https://jga7077.github.io/alura_react-router_Pet-noticias/',
      prints: [petNoticiasPrint01, petNoticiasPrint02, petNoticiasPrint03]
    },
    {
      name: 'Vinho e Cia',
      id: 'vinho-e-cia',
      description: 'Projeto criado desde o zero desde o Design até a Implementação, inspirado em vinícolas, as tencnologias usadas foram: React, React Router Styled Components e Slick Carousel',
      repoUrl: 'https://github.com/JGA7077/vinho-e-cia',
      deployUrl: 'https://creative-dieffenbachia-8278fa.netlify.app/',
      prints: [vinhoCiaPrint01, vinhoCiaPrint02, vinhoCiaPrint03]
    },
    {
      name: 'Frontend Menthor - Sunnyside Agency',
      id: 'sunntside-agency',
      description: 'Projeto baseado no desafio Sunnyside Agency do site Frontend Menthor, as tecnologias usadas foram React e SASS',
      repoUrl: 'https://github.com/JGA7077/Frontend-Challenge_Sunnyside-Agency',
      deployUrl: 'https://brave-hamilton-d48485.netlify.app/',
      prints: [sunnysideAgencyPrint01, sunnysideAgencyPrint02, sunnysideAgencyPrint03]
    },
    {
      name: 'Alura Former',
      id: 'alura_former-with-status',
      description: 'Projeto feito através do curso do Alura usando React e Mui Material, com foco em gerenciar os estados dos inputs, deixando a experiência do usuário melhor e mais clara',
      repoUrl: 'https://github.com/JGA7077/alura_former-with-status',
      deployUrl: 'https://jga7077.github.io/alura_former-with-status/',
      prints: [aluraFormerPrint01, aluraFormerPrint02, aluraFormerPrint03]
    },
    {
      name: 'Galleria SASS',
      id: 'galleria-sass',
      description: 'Projeto de galeria criado pelo canal Hora de Codar para treinar conceitos do SASS',
      repoUrl: 'https://github.com/JGA7077/Galleria-SASS',
      deployUrl: 'https://jga7077.github.io/Galleria-SASS/',
      prints: [galleriaSassPrint01, galleriaSassPrint02, galleriaSassPrint03]
    },
  ]


  return (
    // <ProjectsSection id="projetos" data-aos="fade-up" data-aos-duration="1000">
    <ProjectsSection id="projetos">
      <ProjectsTitle>Projetos</ProjectsTitle>
      <ProjectsList>
        {reposToShow.map(project => (
          <div className="project-container" key={project.name}>
            <div className="text-box">
              <Subtitle>{project.name}</Subtitle>
              <p>{project.description}</p>
              <div className="links-container">
                <a href={project.deployUrl}>Link para a App</a>
                <a href={project.repoUrl}>Link para o repositório</a>
              </div>
            </div>
            <div className="prints-list">
              {project.prints.map((print, index) => (
                <Fancybox options={{ infinite: false }}>
                  <div className="card-item" key={`Print ${index} do Projeto ${project.name}`} >
                    <span data-fancybox={`gallery-${project.id}`} data-src={print}>
                      <img src={print} alt={`Print ${index} do Projeto ${project.name}`} />
                    </span>
                  </div>
                </Fancybox>
              ))}
            </div>
          </div>
        ))}
      </ProjectsList>
    </ProjectsSection >
  )
}
export default Projects;