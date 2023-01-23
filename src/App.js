import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { GlobalStyle } from './components/GlobalStyle';
import styled from 'styled-components';
import Header from './components/Header/Header';
import AboutMe from './components/AboutMe/AboutMe'

const AppContainer = styled.div`
  background-image: linear-gradient(#182434f5,#799cbff0,#d4e4ed);
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
    </AppContainer>
  );
}

export default App;
