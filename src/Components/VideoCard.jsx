import React,{useState} from 'react'
import { Card,Modal } from 'react-bootstrap'

function VideoCard() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
   
    <>
    <Card >
      <Card.Img onClick={handleShow} style={{height:'180px'}} variant="top" src="https://cdn.britannica.com/86/213486-050-077323E8/Movie-still-Emma-Watson-Florence-Pugh-Saoirse-Ronan-Eliza-Scanlen-Little-Women-2019.jpg" />
      <Card.Body>
        <Card.Title className='d-flex align-items-center justify-content-between '>
          <p>Caption</p>
           <button className="btn">
            <i className="fa-solid fa-trash text-danger"></i>
           </button>
        </Card.Title>
        
      </Card.Body>
    </Card>
    {/* modal */}
   
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Caption</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width="100%" height="480" src="https://www.youtube.com/embed/AST2-4db4ic?autoplay=1" title="caption" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </Modal.Body>
       
      </Modal>
      
    </>
  )
}

export default VideoCard
