
import html2canvas from 'html2canvas';



import React, { useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Figure from 'react-bootstrap/Figure';
import { InputGroup } from 'react-bootstrap';
import { Badge } from 'react-bootstrap';



import "./Meme.css"



export const Meme = () => {
//Estado inicial del editor de meme
const [meme, setMeme] = useState(25);
const [text, setText] = useState();
const [color, setColor] =useState('#fff');

const selectMeme = (e) => {
    setMeme(e.target.value);
    console.log(e.target.value);
}

const textMeme = (e) => {
    setText(e.target.value);
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
    <>
         <h1 className='mt-3 mb-3 text-center'>Editá tu propio meme</h1>
         <Form className='row text-center'>
            
            <Form.Label className='mt-3 mb-3 text-center'>Ingrese el texto del meme</Form.Label>
            <Form.Control onChange={textMeme} className='form-control w-50 m-50 m-auto d-block' type="text" placeholder="Pone tu frase" name="meme" arial-label="default input example" ></Form.Control>
            <Form.Label className='mt-3 mb-3 text-center'>Elegí el color de tu frase</Form.Label>
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
           


            <Form.Label className='mt-3 mb-3 text-center'>Elegí la imagen de tu meme</Form.Label>
            <Form.Select onChange={selectMeme} className='form-control form-select form-select-lg mb-3 w-50 m-auto' arial-label="form-select-lg example" >
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
        
            <Figure className="text-center w-100"  id="exportar">
                <Figure.Caption >
                    <p 
                    className="w-100 px-30 position-absolute top-60 start-30  h1 text-center" 
                    id="texto-meme"
                    style={{color:color}}
                    >{text}</p> 
                </Figure.Caption>

                <Figure.Image 
                     src={`../images/${meme}.jpg`} 
                     className="img-fluid img-responsive mt-3 d-block m-auto" alt="meme">
                </Figure.Image>
            </Figure>
                 
        </Form>
        <div className='d-flex justify-content-center'>
        <Button onClick={Download} type="button"  variant="primary" className='mb-3 text-center'>Descargar meme</Button>
        </div>
    </> // se quita para no generar código innecesario
  )
}
