import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import {Modal,Form ,FloatingLabel } from 'react-bootstrap';


function Add() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    <div className="d-flex align-items-center">
        <h5>Upload Video</h5>
        <button onClick={handleShow} className="btn btn-warning ms-3 rounded-circle fw-bolder">+</button>
    </div>
    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Video Details!!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Please fill the following details</p>
          <div className="border rounded p-3">
          <FloatingLabel
        controlId="floatingInputCaption"
        label="video caption"
        className="mb-3"
      >
      <Form.Control type="text" placeholder="video caption" />
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingInputImage"
        label="image URL"
        className="mb-3"
      >
      <Form.Control type="text" placeholder="Image URL" />
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingInputCaption"
        label="youtube URL"
        className="mb-3"
      >
      <Form.Control type="text" placeholder="youtube URL" />
      </FloatingLabel>

          </div>
    
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button className='btn-success'>Upload</Button>
        </Modal.Footer>
    </Modal>
    </>
  )
}

export default Add
