import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

import "./Header.css"

export const Header = () => {
  return (
    <>

      <Navbar bg="dark" variant="dark">
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
        </Container>
      </Navbar>
    </>
  )
}
