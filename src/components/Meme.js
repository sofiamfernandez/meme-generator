
import html2canvas from 'html2canvas';
import { BsArrowDownUp, BsArrowRight,BsArrowLeft } from "react-icons/bs";


import React, { useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Figure from 'react-bootstrap/Figure';
import { InputGroup, Row, Col } from 'react-bootstrap';
import { Badge } from 'react-bootstrap';

import Container from 'react-bootstrap/Container';



import "./Meme.css"



export const Meme = () => {
//Estado inicial del editor de meme
const [meme, setMeme] = useState(25);
const [text, setText] = useState();

const [color, setColor] =useState('#FFFFFF');
const [size, setSize] = useState('');
const [positionY, setPositionY] = useState('');
const [positionX, setPositionX] = useState('');


const selectMeme = (e) => {
    setMeme(e.target.value);
    console.log(e.target.value);
}

const textMeme = (e) => {
    setText(e.target.value);
 
  }

const myStyle = {
    color:color,
    fontSize : parseInt(positionY),
    paddingTop : parseInt(size),
    paddingLeft: parseInt(positionX),
 

}

const Download = (e) => {
    html2canvas(document.querySelector("#exportar")).then(function(canvas) {
    
        let img = canvas.toDataURL("memes/jpg");
        let link = document.createElement("a");
        link.download = "tumeme.jpg";
        link.href = img;
        link.click();
    });
 

}

  return (
    <Container className=''>
        <Row>
        <h1 className='my-5 text-center title'><span>Crea tu propio meme</span></h1>
            <Col sm={12} md={6}>
              
              <Form className='text-center p-3'>
              <Form.Label className='mb-3 '>Selecciona una imagen: </Form.Label>
                  <Form.Select onChange={selectMeme} className='form-control form-select form-select-lg mb-3 w-100 m-auto' arial-label="dark">
                      <option value={0}>Seleccionar imagen</option>
                      <option value={1}>Dicaprio</option>
                      <option value={2}>Futurama</option>
                      <option value={3}>Bob Esponja</option>
                      <option value={4}>Nena picarona</option>
                      <option value={5}>Gato vegetales</option>
                      <option value={6}>Cálculos</option>
                      <option value={7}>Gato desobediente</option>
                      <option value={8}>Homero</option>
                      <option value={9}>Mujer</option>
                      <option value={10}>Bon Esponja caja</option>
                      <option value={11}>Derrapando</option>
                      <option value={12}>Yo</option>
                      <option value={13}>Dice mi mamá</option>
                      <option value={14}>Payaso IT</option>
                      <option value={15}>Toy Story</option>
                  </Form.Select>
                  <Form.Label className='mt-3 mb-3 text-center'>Ingresa el texto: </Form.Label>
                  <Form.Control 
                    onChange={textMeme} 
                    className='form-floating w-100 m-50 m-auto d-block' 
                    as="textarea" 
                    aria-label="textarea" 
                    maxlength="30" 
                    type="text" 
                    placeholder="Pone tu frase" required 
                    name="meme">
                    </Form.Control>

                  <Form.Label className='mt-3 mb-3 text-center'>Selecciona el color de tu frase: </Form.Label>
                  <InputGroup className="mb-3 input-group w-50 m-50 m-auto d-block">
                      <Badge bg='transparent'>
                          <Form.Control
                              name="color"
                              type="color"
                              aria-label="color"
                              value={color}
                              onChange={(e) => setColor(e.target.value)}
                          ></Form.Control>
                      </Badge>
                  </InputGroup>

                  <InputGroup className='range'>
                      <Form.Label htmlFor="customRange2" className="form-label">Elige el tamaño de la letra</Form.Label>
                      <Form.Range
                         
                          type="range"
                          min={10}
                          max={120}
                          id="customRange2"
                          value={positionY}
                          onChange={(e) => setPositionY(e.target.value)}
                          step={1}
                         
                      ></Form.Range>
                      
                      <Form.Label htmlFor="customRange2" className="form-label">Elige la posición horizontal <BsArrowLeft/> <BsArrowRight/></Form.Label>

                      <Form.Range
                          type="range"
                          min={-100}
                          max={280}
                          id="customRange2"
                          value={positionX}
                          onChange={(e) => setPositionX(e.target.value)}
                          step={1}
                      ></Form.Range>



                        <Form.Label htmlFor="customRange2" className="form-label">Elige la posición vertical <BsArrowDownUp/></Form.Label>

                        <Form.Range
                            type="range"
                            min={-100}
                            max={400}
                            id="customRange2"
                            value={size}
                            onChange={(e) => setSize(e.target.value)}
                            step={1}
                        ></Form.Range>

                  </InputGroup>

                 
           </Form>
        </Col>

          {/* Breakpoint     */}
        <Col sm={12} md={6}>
        <Form>
          <h2 className='text-center mt-3 mb-3'>Vista previa de tu meme: </h2>
            <Figure className="text-center w-100">
               <div id="exportar">
                  <Figure.Caption>
                      <p
                          className="position-absolute top-60 m-auto"
                          id="texto-meme"
                          style={myStyle}

                      >{text}</p>

                  </Figure.Caption>
                  <Figure.Image
                      src={`../images/${meme}.jpg`}
                      className="img-responsive d-block m-auto" alt="meme">
                  </Figure.Image>
              </div>
            </Figure>
          </Form>
        
          <div className='d-flex justify-content-center mb-3'>
              <Button onClick={Download} className='btn gradient-button mb-3 text-center'>Descarga tu meme</Button>
          </div>
          </Col>
        </Row>  
    </Container> 
  )
}
