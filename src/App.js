import { useEffect } from 'react';

import Aos from 'aos';
import 'aos/dist/aos.css';

import { GlobalStyle } from './components/GlobalStyle';
import styled from 'styled-components';

import Header from './components/Header/Header';
import AboutMe from './components/AboutMe/AboutMe'
import Projects from './components/Projects/Projects';

const AppContainer = styled.div`
  position: absolute;
  top: 60px;
`

function App() {
  useEffect(() => {
    Aos.init({
      once: true
    });

  }, [])
  

  return (
    <AppContainer>
      <GlobalStyle />
      <Header />
      <AboutMe />
      <Projects />
    </AppContainer>
  );
}

export default App;
