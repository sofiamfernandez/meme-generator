import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import {BsLinkedin, BsGithub, BsInstagram} from 'react-icons/bs'

import './Footer.css'


export const Footer = () => {
  return (
    <Container fluid className='bg-dark mt-3 mb-0 w-100'>
            <Container>
                <Row>
                    <Col className='brand text py-3'>
                        <img
                            alt="logo"
                            src="../images/image.png"
                            width="70"
                            height="60"  
                            className='img-responsive img-fluid m-auto'                     
                        />{''}
                      Meme Generator
                    </Col>
                    <Col className='redes'>
                        <div className='social d-flex align-items-center '>
                            <a href='#linkedIn' className='link'> <BsLinkedin/></a>
                            <a href='#linkedIn' className='link'><BsGithub/></a>
                            <a href='#linkedIn' className='link'>  <BsInstagram/></a>    
                           
                       </div>
                    </Col>
                    <Col>HOLA</Col>
                </Row>
            </Container>
    </Container>
  )
}
