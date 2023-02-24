import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import {BsLinkedin, BsGithub, BsInstagram} from 'react-icons/bs'
import {SiReact} from 'react-icons/si'

import './Footer.css'


export const Footer = () => {
  return (
    <Container fluid className='footer bg-dark mt-2 d-flex mb-0 w-100'>
            <Container>
                <Row>
                    <Col md={4} sm={12} className='brand text pt-3 '>
                        <img
                            alt="logo"
                            src="../images/image.png"
                            width="70"
                            height="60"  
                            className='img-responsive img-fluid m-auto logo'                     
                        />{''}
                      Meme Generator
                    </Col>
                    <Col md={4} sm={12} className='redes py-3'>
                        <div className='social link d-flex align-items-center '>
                            <a href='https://www.linkedin.com/in/sofia-m-fernandez-lacroux/' target="_blank" rel="noopener noreferrer" className='link'> <BsLinkedin/></a>
                            <a href='https://github.com/sofiamfernandez' target="_blank" rel="noopener noreferrer" className='link'><BsGithub/></a>
                            <a href='https://www.instagram.com/sofia.m.fernandez/' target="_blank" rel="noopener noreferrer" className='link'>  <BsInstagram/></a>    
                           
                       </div>
                    </Col>
                    <Col md={4} sm={12} className='justify-content-center d-flex align-items-center footer-text py-3'>Powered with React
                   
                    by 
                    <a className='firma' href='https://www.sofiamfernandez.com/' target="_blank" rel="noopener noreferrer">
                    <span className='firma px-2 '><b>Sophie Ferdz <SiReact/></b></span></a>
                    </Col>
                </Row>
            </Container>
    </Container >
  )
}
