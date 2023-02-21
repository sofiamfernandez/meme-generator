
import { Meme } from './components/Meme';
import { Footer } from './components/Footer';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './App.css';
import { createContext, useState } from 'react';
import ReactSwitch from "react-switch";

export const ThemeContext = createContext(null);


function App() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "dark" ? "light" : "dark"));
  }
  return (
    <ThemeContext.Provider value={{theme , toggleTheme}}>
      <div className='app' id={theme}>
          
         <Navbar  bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">
              <img
                alt="logo"
                src="../images/image.png"
                width="40"
                height="30"
                className="img-responsive img-fluid"
              />{' '}
              Meme Generator
            </Navbar.Brand>
            <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} /> 
            </Container>
          </Navbar>
               
          <Meme />
          <Footer />
      </div>
    </ThemeContext.Provider>
  
  );
}

export default App;
