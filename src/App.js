import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from './components/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Characters from './pages/Characters';
import Contact from './pages/Contact';
const theme = createTheme({
  typography: {
    fontFamily: ['Assistant', 'sans-serif'].join(','),
    color: '#1a1a1a',
    body1: {
      lineHeight: 1.8,
      marginBottom: '1.7rem',
      fontSize: '1.1rem',
      letterSpacing: '0.03038em',
      color: '#464646',
    },
    h2: {
      fontSize: '1.3rem',
      fontWeight: '400',
      marginBottom: '1.1rem',
      color: '#464646',
    },
  },
});

console.log(theme);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router basename={process.env.PUBLIC_URL}>
        <div>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/characters" element={<Characters />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
export { theme };
