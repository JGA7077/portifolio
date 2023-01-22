import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { GlobalStyle } from './components/GlobalStyle';
import styled from 'styled-components';
import Header from './components/Header/Header';

const AppContainer = styled.div`
  background-image: linear-gradient(#182434f5,#799cbff0,#d4e4ed);
  height: 100vh;
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
    </AppContainer>
  );
}

export default App;
