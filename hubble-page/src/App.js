import { ThemeProvider } from 'styled-components';
import Header from './components/Header';
import { Container } from './components/styles/Container.styled'; 
import GlobalStyles from './components/styles/Global';

const theme = {
  colors: {
    header: '#ebfbff',
    body: '#fff',
    footer: '#003333',
  }
}

function App() {
  return (
    <ThemeProvider theme = {theme}>
    <>
    <GlobalStyles />
    <Header />
    <Container>
      <h1>Hello
      </h1>      
    </Container>
    </>
    </ThemeProvider>
  );
}

// 17:00 Minutes

export default App;
