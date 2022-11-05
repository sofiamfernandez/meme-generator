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
              alt=""
              src="../images/meme-logo-1.jpg"
              width="40"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Meme Generator
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  )
}
