import React from 'react'
import { useState } from 'react';
import { Form} from 'react-bootstrap';

export const UploadImage = () => {

  const [selectedImg, setSelectedImg]     = useState();
  const [isImgPicked, setIsImgPicked] = useState(false);

  const changeHandler = (event) => {
    setSelectedImg(event.target.files[0]);
    setIsImgPicked(true);
    
};

  return (
    <div>
      <Form.Group controlId="formFileSm" className="mb-3">
        <Form.Label>Subir archivo</Form.Label>
        <Form.Control
            name='file'
            type="file" 
            size="sm"
            onChange={changeHandler} />
      </Form.Group>
      {isImgPicked ? (
				<div>
					<p>Filename: {selectedImg.name}</p>
					<p>Filetype: {selectedImg.type}</p>
					<p>Size in bytes: {selectedImg.size}</p>
					<p>
						lastModifiedDate:{' '}
						{selectedImg.lastModifiedDate.toLocaleDateString()}
					</p>
                    <p>Filename: {selectedImg.url}</p>
                    
				</div>
			) : (
				<p>Selecciona una imagen</p>
			)}
    </div>
  )
}         
